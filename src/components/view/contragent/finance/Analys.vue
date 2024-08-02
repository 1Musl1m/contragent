<template>
  <div class="px-20">
      <h1>
        Показатели рассчитаны на основе автоматически обработанной общедоступной бухгалтерской
        отчетности организации.
      </h1>

      <div class="mt-10 flex items-center gap-32">
        <div>
          <h2 class="text-lg font-bold mb-4">Бухгалтерская отчетность</h2>
          <div class="flex items-center gap-5">
            <img src="/vector/green.svg" alt="" />
            Положительные
          </div>
        </div>

        <div>
          <h2 class="text-lg font-bold mb-4">Платежеспособность</h2>
          <div class="flex items-center gap-5">
            <img src="/vector/orange.svg" alt="" />
            Требуют внимание
          </div>
        </div>

        <div>
          <h2 class="text-lg font-bold mb-4">Эффективность</h2>
          <div class="flex items-center gap-5">
            <img src="/vector/red.svg" alt="" />
            Отрицательные
          </div>
        </div>
      </div>

      <div class="mt-20">
        <div class="grid grid-cols-3">
          <div class="flex flex-col gap-5">
            <h2>Выручка</h2>
            <span class="text-2xl font-semibold text-blue-600">456709</span>

            <h2>Стоимость</h2>
            <span class="text-2xl font-semibold text-blue-600">456709</span>

            <h2>Дебиторская задолженность</h2>
            <span class="text-2xl font-semibold text-blue-600">456709</span>
          </div>

          <div class="flex flex-col gap-5">
            <h2>Прибыль</h2>
            <span class="text-2xl font-semibold text-blue-600">456709</span>

            <h2>Кредиторская задолженность</h2>
            <span class="text-2xl font-semibold text-blue-600">456709</span>
          </div>

          <img src="@/assets/image/dynamic.png" />
        </div>
      </div>

      <div class="mt-32">
        <div class="flex items-end gap-10">
          <h2 class="text-2xl font-bold">Финансовая устойчивость :</h2>
          <div class="flex items-center gap-5">
            <img src="/vector/green.svg" />
            <p>Положительные</p>
          </div>
        </div>

        <div class="mt-10">
          <p>Описание</p>
          <div class="mt-10">
            <div class="card">
              <app-accordion value="0">
                <accordion-panel value="0">
                  <accordion-header>Финансовая устойчивость :</accordion-header>
                  <accordion-content>
                    <p class="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </accordion-content>
                </accordion-panel>
                <accordion-panel value="1">
                  <accordion-header>Зависимость от кредитов :</accordion-header>
                  <accordion-content>
                    <p class="m-0">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                  </accordion-content>
                </accordion-panel>
                <accordion-panel value="2">
                  <accordion-header>Обеспеченность собственными средствами : </accordion-header>
                  <accordion-content>
                    <p class="m-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
                      quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                      soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                  </accordion-content>
                </accordion-panel>

                <accordion-panel value="3">
                  <accordion-header>Зависимость от дебиторов :</accordion-header>
                  <accordion-content>
                    <p class="m-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
                      quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                      soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                  </accordion-content>
                </accordion-panel>

                <accordion-panel value="4">
                  <accordion-header>Доля заемного капитала :</accordion-header>
                  <accordion-content>
                    <p class="m-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
                      quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                      soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                  </accordion-content>
                </accordion-panel>
              </app-accordion>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-32">
        <div class="flex items-end gap-10">
          <h2 class="text-2xl font-bold">Платежеспособность :</h2>
          <div class="flex items-center gap-5">
            <img src="/vector/red.svg" />
            <p>Отрицательные</p>
          </div>
        </div>

        <div class="mt-10">
          <div class="card">
            <app-accordion value="0">
              <accordion-panel value="0">
                <accordion-header>Финансовая устойчивость :</accordion-header>
                <accordion-content>
                  <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </accordion-content>
              </accordion-panel>
              <accordion-panel value="1">
                <accordion-header>Зависимость от кредитов :</accordion-header>
                <accordion-content>
                  <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Consectetur, adipisci velit, sed quia non numquam eius modi.
                  </p>
                </accordion-content>
              </accordion-panel>
              <accordion-panel value="2">
                <accordion-header>Обеспеченность собственными средствами : </accordion-header>
                <accordion-content>
                  <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                    rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                    est eligendi optio cumque nihil impedit quo minus.
                  </p>
                </accordion-content>
              </accordion-panel>

              <accordion-panel value="3">
                <accordion-header>Зависимость от дебиторов :</accordion-header>
                <accordion-content>
                  <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                    rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                    est eligendi optio cumque nihil impedit quo minus.
                  </p>
                </accordion-content>
              </accordion-panel>

              <accordion-panel value="4">
                <accordion-header>Доля заемного капитала :</accordion-header>
                <accordion-content>
                  <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                    rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                    est eligendi optio cumque nihil impedit quo minus.
                  </p>
                </accordion-content>
              </accordion-panel>
            </app-accordion>
          </div>
        </div>
      </div>

      <div class="mt-32">
        <div class="flex items-end gap-10">
          <h2 class="text-2xl font-bold">Эффективность : </h2>
          <div class="flex items-center gap-5">
            <img src="/vector/orange.svg" />
            <p>Требуют внимания</p>
          </div>
        </div>

        <div class="mt-10">
          <div class="card">
            <app-accordion value="0">
              <accordion-panel value="0">
                <accordion-header>Финансовая устойчивость :</accordion-header>
                <accordion-content>
                  <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </accordion-content>
              </accordion-panel>
              <accordion-panel value="1">
                <accordion-header>Зависимость от кредитов :</accordion-header>
                <accordion-content>
                  <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Consectetur, adipisci velit, sed quia non numquam eius modi.
                  </p>
                </accordion-content>
              </accordion-panel>
              <accordion-panel value="2">
                <accordion-header>Обеспеченность собственными средствами : </accordion-header>
                <accordion-content>
                  <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                    rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                    est eligendi optio cumque nihil impedit quo minus.
                  </p>
                </accordion-content>
              </accordion-panel>

              <accordion-panel value="3">
                <accordion-header>Зависимость от дебиторов :</accordion-header>
                <accordion-content>
                  <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                    rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                    est eligendi optio cumque nihil impedit quo minus.
                  </p>
                </accordion-content>
              </accordion-panel>

              <accordion-panel value="4">
                <accordion-header>Доля заемного капитала :</accordion-header>
                <accordion-content>
                  <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                    rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                    est eligendi optio cumque nihil impedit quo minus.
                  </p>
                </accordion-content>
              </accordion-panel>
            </app-accordion>
          </div>
        </div>
      </div>
    </div>
</template>