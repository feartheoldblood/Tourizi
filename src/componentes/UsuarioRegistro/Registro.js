import React from "react";


const UsuarioRegistro = () => {
  return (
    <div class="container mb-3">
      <h1 class="mt-5 mb-5 text-center">Crea una nueva cuenta</h1>
      <div class="row d-flex justify-content-center">
        <form class="col-lg-4 needs-validation">
          <div>
            <label class="form-label" for="frm_name">
              Ingresa tus nombres:
            </label>
            <input
              id="frm_name"
              class="form-control"
              placeholder="Juan Pablo"
              type="text"
              required
            />
            <div class="valid-feedback">Bien</div>
            <div class="invalid-feedback">Por favor escriba su nombre</div>
          </div>
          <div class="mt-3">
            <label class="form-label" for="frm_last_name">
              Ingresa tus apellidos:
            </label>
            <input
              id="fmr_last_name"
              placeholder="Pérez"
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="mt-3">
            <label class="form-label" for="frm_email">
              Ingresa tu correo:
            </label>
            <input
              id="frm_email"
              placeholder="tucorreo@algo.com"
              type="email"
              class="form-control"
            />
          </div>
          <div class="mt-3">
            <label class="form-label" for="frm_password">
              Crea tu contraseña:
            </label>
            <input
              id="passwordcheck"
              placeholder="Min 6 caracteres"
              type="password"
              class="form-control"
            />
          </div>
          <div class="mb-5 mt-3">
            <a
              type="submit"
              class="w-100 btn btn btn-primary btn-lg btn-block"
              href=""
            >
              REGISTRARSE
            </a>
          </div>
          <div class="d-flex justify-space-between align-items-center mb-5">
            <hr class="bg-gray-300 w-100 mr-1" />
            <span class="w-100 text-center">o</span>
            <hr class="bg-gray-300 w-100 ml-1" />
          </div>
          <div class="mb-5 text-center mb-3">
            <div class="mb-2">¿Ya tienes cuenta?</div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsuarioRegistro