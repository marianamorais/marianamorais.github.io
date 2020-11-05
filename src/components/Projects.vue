<template>
  <section class="projects-content">
    <h1>My projects</h1>
    <div class="projects-grid">
      <div class="project">
        <div class="project-content">
          <header>
            <div class="first">
              <div class="project-title">
                <h3>Gardencraft</h3>
              </div>
              <div class="project-rep">
                <a href="https://github.com/marianamorais/gardencraft" target="_blank">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
            <div class="project-image">
              <a href="https://gardencraft.netlify.app/" target="_blank">
                <img
                  src="../assets/images/projects/gardencraft.png"
                  alt="Gardencraft"
                />
              </a>
            </div>
          </header>
          <footer>
            <ul class="project-techs">
              <li>JS</li>
              <li>React</li>
              <li>Styled Components</li>
            </ul>
          </footer>
        </div>
      </div>
      <div class="project">
        <div class="project-content">
          <header>
            <div class="first">
              <div class="project-title">
                <h3>Coffelog</h3>
              </div>
               <div class="project-rep">
                <a href="https://github.com/marianamorais/coffeelog" target="_blank">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
              </div>
            </div>
            <div class="project-image">
              <a href="https://gardencraft.netlify.app/" target="_blank">
                <img
                  src="../assets/images/projects/coffeelog.png"
                  alt="Coffeelog"
                />
              </a>
            </div>
          </header>
          <footer>
            <ul class="project-techs">
              <li>JS</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less">
.projects-content {
  h1 {
    font-size: 1.8rem;
    text-align: center;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 48px;
    position: relative;
    margin-top: 50px;

    .project {
      transition-delay: 0ms;
      visibility: visible;
      opacity: 1;
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
        opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
        transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

      .project-content {
        width: 243px;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        height: 100%;
        padding: 2rem 1.75rem;
        background-color: #1b1b1b;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        border: 1px solid;
        border-image: linear-gradient(45deg, #ff934b, #e26f8f, #9b618a, #2e2e2e)
          1;

        header {
          padding: 0;
          margin: 0;
          .first {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0;
            .project-title h3 {
              margin: 0px 0px 20px;
              color: white;
              font-size: 1.2rem;
              letter-spacing: 1px;
              font-weight: 500;
            }
            .project-rep a {
              font-size: 1.2rem;
              color: white;
              transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
              cursor: pointer;
              &:hover{
                color: #e26f8f;
              }
            }
          }
          .project-image {
            width: 248px;
            height: 175px;
            img {
              border-radius: 4px;
              width: 248px;
              height: 175px;
              z-index: -2;
              
              filter: drop-shadow(0px 0px 0px #363636);
              transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

              &:hover {
                filter: drop-shadow(3px 3px 4px #363636);              }
            }
          }
        }
        
        footer {
          .project-techs {
            display: flex;
            align-items: flex-end;
            -webkit-box-flex: 1;
            flex-grow: 1;
            flex-wrap: wrap;
            padding: 0px;
            margin: 20px 0px 0px;
            list-style: none;

            li {
              margin-right: 15px;
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
}
</style>
