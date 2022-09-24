export const loadScriptByURL = (id, url, callback) => {
  const isScriptExist = document.getElementById(id);

  if (!isScriptExist) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.id = id;
    script.onload = () => {
      if (callback) callback();
    };
    document.body.appendChild(script);
  }

  if (isScriptExist && callback) callback();
};

export const getRecaptchaToken = (action, callback) => {
  window.grecaptcha.ready(() => {
    window.grecaptcha
      .execute(process.env.NEXT_PUBLIC_RECAPTA_KEY, { action })
      .then((token) => callback(null, token))
      .catch((err) => callback(err, null));
  });
};
