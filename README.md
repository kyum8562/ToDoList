# ToDoList(ver 1.0)

리액트를 사용하여 만든 To Do List 웹앱 입니다.

오늘 할 일을 기록해 효율적인 일 처리를 하기 위해서 만든 웹앱 입니다.

## 기능

처음 화면에 들어오게 되면 welcome 모드로 기본적인 화면을 표시합니다.

### `입력 기능(Create)`

create를 누르면 입력모드가 활성화 됩니다.
제목(title)과 내용(desc)를 작성하고 확인을 누르면 일정 등록을 할 수 있습니다.

### `읽기 기능(Read)`

입력 기능을 통해서 등록이 완료된 항목들을 누르게 되면 read 모드로 변경이 되면서
제목(title)과 내용(desc)가 표시됩니다.

### `수정 기능(Update)`

읽기모드에서 update를 누르면 수정모드가 활성화 됩니다.
해당 id값의 제목(title)과 내용(desc)이 수정 가능한 상태로 표시가 됩니다.
임의의 값을 넣어 수정을 하고 확인을 누르면 수정이 완료됩니다.

### `삭제 기능(Delete)`

이 기능은 해당 id값의 제목(title)과 내용(desc)를 삭제하는 기능입니다.
읽기모드에서 delete를 누르면 삭제모드가 활성화 됩니다.
really? 라는 alert를 띄우면서 사용자에게 의사를 한번 더 묻고
확인을 누를시, 삭제 되었다는 alert가 화면에 띄워지면서
목록에 있었던 해당 값이 지워지게 됩니다.
