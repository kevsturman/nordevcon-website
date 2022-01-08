export default function Hero(/* { speakers } */) {
  return (
    <section className="" id="hero">
      <div class="hex-grid">
        <ul class="hex-grid__list">
          {new Array(20).map(() => (
            <li class="hex-grid__item">
              <div class="hex-grid__content"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
