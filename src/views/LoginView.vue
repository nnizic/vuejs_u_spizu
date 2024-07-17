<template>
  <div class="login">
    <h1>Prijava</h1>

    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email adresa</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Upiši email"
            />
            <small id="emailHelp" class="form-text text-muted">
              Email adresa je sigurna sa nama.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Zaporka</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Upiši zaporku"
            />
          </div>
          <button type="submit" class="btn btn-primary">Unesi</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
