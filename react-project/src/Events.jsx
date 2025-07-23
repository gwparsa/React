function Events() {

    const eventHandler = () => alert("salam");

  return (
    <div>
        <p>please increse:</p>
        <button onClick={eventHandler}>increase</button>
    </div>
  )
}

export default Events