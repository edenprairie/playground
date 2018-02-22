import { Controller, Get } from "@nestjs/common";

@Controller("api")
export class UserController {
    @Get("something")    
    async getSomething(): Promise<string> {
        return "haaaaaa"
    }

    // /**
    //  * POST  /users  : Creates a new user.
    //  * <p>
    //  * Creates a new user if the login and email are not already used, and sends an
    //  * mail with an activation link.
    //  * The user needs to be activated on creation.
    //  *
    //  * @param userDTO the user to create
    //  * @return the ResponseEntity with status 201 (Created) and with body the new user, or with status 400 (Bad Request) if the login or email is already in use
    //  * @throws URISyntaxException if the Location URI syntax is incorrect
    //  * @throws BadRequestAlertException 400 (Bad Request) if the login or email is already in use
    //  */
    // @PostMapping("/users")
    // @Timed
    // @Secured(AuthoritiesConstants.ADMIN)
    // public ResponseEntity<User> createUser(@Valid @RequestBody UserDTO userDTO) throws URISyntaxException {
    //     log.debug("REST request to save User : {}", userDTO);

    //     if (userDTO.getId() != null) {
    //         throw new BadRequestAlertException("A new user cannot already have an ID", "userManagement", "idexists");
    //         // Lowercase the user login before comparing with database
    //     } else if (userRepository.findOneByLogin(userDTO.getLogin().toLowerCase()).isPresent()) {
    //         throw new LoginAlreadyUsedException();
    //     } else if (userRepository.findOneByEmailIgnoreCase(userDTO.getEmail()).isPresent()) {
    //         throw new EmailAlreadyUsedException();
    //     } else {
    //         User newUser = userService.createUser(userDTO);
    //         mailService.sendCreationEmail(newUser);
    //         return ResponseEntity.created(new URI("/api/users/" + newUser.getLogin()))
    //             .headers(HeaderUtil.createAlert( "userManagement.created", newUser.getLogin()))
    //             .body(newUser);
    //     }
    // }

    // /**
    //  * PUT /users : Updates an existing User.
    //  *
    //  * @param userDTO the user to update
    //  * @return the ResponseEntity with status 200 (OK) and with body the updated user
    //  * @throws EmailAlreadyUsedException 400 (Bad Request) if the email is already in use
    //  * @throws LoginAlreadyUsedException 400 (Bad Request) if the login is already in use
    //  */
    // @PutMapping("/users")
    // @Timed
    // @Secured(AuthoritiesConstants.ADMIN)
    // public ResponseEntity<UserDTO> updateUser(@Valid @RequestBody UserDTO userDTO) {
    //     log.debug("REST request to update User : {}", userDTO);
    //     Optional<User> existingUser = userRepository.findOneByEmailIgnoreCase(userDTO.getEmail());
    //     if (existingUser.isPresent() && (!existingUser.get().getId().equals(userDTO.getId()))) {
    //         throw new EmailAlreadyUsedException();
    //     }
    //     existingUser = userRepository.findOneByLogin(userDTO.getLogin().toLowerCase());
    //     if (existingUser.isPresent() && (!existingUser.get().getId().equals(userDTO.getId()))) {
    //         throw new LoginAlreadyUsedException();
    //     }
    //     Optional<UserDTO> updatedUser = userService.updateUser(userDTO);

    //     return ResponseUtil.wrapOrNotFound(updatedUser,
    //         HeaderUtil.createAlert("userManagement.updated", userDTO.getLogin()));
    // }

    // /**
    //  * GET /users : get all users.
    //  *
    //  * @param pageable the pagination information
    //  * @return the ResponseEntity with status 200 (OK) and with body all users
    //  */
    // @GetMapping("/users")
    // @Timed
    // public ResponseEntity<List<UserDTO>> getAllUsers(Pageable pageable) {
    //     final Page<UserDTO> page = userService.getAllManagedUsers(pageable);
    //     HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/users");
    //     return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    // }

    // /**
    //  * @return a string list of the all of the roles
    //  */
    // @GetMapping("/users/authorities")
    // @Timed
    // @Secured(AuthoritiesConstants.ADMIN)
    // public List<String> getAuthorities() {
    //     return userService.getAuthorities();
    // }

    // /**
    //  * GET /users/:login : get the "login" user.
    //  *
    //  * @param login the login of the user to find
    //  * @return the ResponseEntity with status 200 (OK) and with body the "login" user, or with status 404 (Not Found)
    //  */
    // @GetMapping("/users/{login:" + Constants.LOGIN_REGEX + "}")
    // @Timed
    // public ResponseEntity<UserDTO> getUser(@PathVariable String login) {
    //     log.debug("REST request to get User : {}", login);
    //     return ResponseUtil.wrapOrNotFound(
    //         userService.getUserWithAuthoritiesByLogin(login)
    //             .map(UserDTO::new));
    // }

    // /**
    //  * DELETE /users/:login : delete the "login" User.
    //  *
    //  * @param login the login of the user to delete
    //  * @return the ResponseEntity with status 200 (OK)
    //  */
    // @DeleteMapping("/users/{login:" + Constants.LOGIN_REGEX + "}")
    // @Timed
    // @Secured(AuthoritiesConstants.ADMIN)
    // public ResponseEntity<Void> deleteUser(@PathVariable String login) {
    //     log.debug("REST request to delete User: {}", login);
    //     userService.deleteUser(login);
    //     return ResponseEntity.ok().headers(HeaderUtil.createAlert( "userManagement.deleted", login)).build();
    // }
}