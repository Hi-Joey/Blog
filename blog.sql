CREATE DATABASE blog;
USE blog;

create table if not exists posts
(
    id          bigint unsigned auto_increment
        primary key,
    title       varchar(255)  not null,
    description varchar(2000) not null,
    img         varchar(255)  not null,
    date        datetime      not null,
    uid         int           null,
    cat         varchar(45)   null,
    constraint id
        unique (id)
);

create table if not exists users
(
    id       int auto_increment
        primary key,
    username varchar(45)  not null,
    email    varchar(255) not null,
    password varchar(255) not null,
    img      varchar(255) null
);

insert into posts (id, title, description, img, date, uid, cat)
values  (1, 'Donec at porta leo, vitae hendrerit sapien', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget sollicitudin dolor. Fusce imperdiet justo quis quam tempus, quis rutrum justo dignissim. Quisque congue leo orci, congue elementum lorem consectetur at. Nam vel sem nec mi fringilla eleifend. Pellentesque magna ipsum, viverra placerat lacinia eu, posuere nec risus. In at ligula a mauris bibendum tincidunt. Donec dignissim, ligula nec finibus consectetur, odio arcu posuere lectus, id scelerisque justo nisi vel ligula. Pellentesque sit amet sem eget velit sodales eleifend. Sed tristique tortor a lectus lacinia, vel tempus risus faucibus. Suspendisse luctus tellus quis turpis mollis finibus. ', '1708275900065man.png', '2024-02-18 05:43:20', 19, 'art'),
        (2, 'Aenean molestie mi a est tempor efficitur ultricies in diam', 'Morbi semper, lectus hendrerit aliquet scelerisque, quam purus aliquam lacus, vel semper est nulla et purus. Phasellus aliquam orci quis leo tempus, at fermentum nisl mattis. Nulla eu tortor mollis, cursus massa ac, semper enim. Aliquam erat volutpat. Integer tristique congue lacus ac facilisis. Donec ultricies felis arcu, sit amet ornare erat fermentum quis. Phasellus id nibh maximus, sollicitudin purus et, faucibus magna. Aenean neque velit, consectetur consequat tristique ultrices, imperdiet non nibh. Duis vitae magna pharetra, semper quam a, auctor nisi. Mauris placerat est leo, pulvinar elementum est ullamcorper sed.', '1708275812044beauty2.png', '2024-02-18 05:46:20', 19, 'food'),
        (3, 'Lorem ipsum dolor sit amet', 'Mauris molestie arcu et magna luctus, pulvinar efficitur quam sollicitudin. Aliquam aliquam venenatis nulla sed tristique. Pellentesque at suscipit risus. Curabitur nisi erat, hendrerit vel mauris ac, suscipit posuere lorem. Aliquam non egestas est. Curabitur rutrum nulla est, nec imperdiet enim bibendum id. Sed ut pharetra risus, sed facilisis turpis. Morbi faucibus velit nunc. Nam ac sem fermentum, pharetra velit a, bibendum leo. Aenean mollis ex quis egestas rutrum. In commodo vel odio eget venenatis. Maecenas suscipit est ac leo tristique, eu tincidunt purus rhoncus. Nullam tincidunt sem lorem.', '1708275735287beauty.png', '2024-02-18 05:46:33', 19, 'technology'),
        (4, 'Donec at porta leo, vitae hendrerit sapien', 'Nunc luctus, augue quis ullamcorper pretium, nibh dolor mollis risus, quis fringilla erat nisi et enim. Donec cursus sagittis tellus, ac dapibus urna vehicula nec. Aliquam condimentum lectus pharetra lectus accumsan, sed ultrices dui interdum. Aliquam euismod diam eu ante imperdiet euismod. Sed lobortis quam hendrerit, porta neque sit amet, convallis nunc. Cras facilisis, erat ut rhoncus porttitor, quam justo rhoncus ligula, vitae imperdiet est dolor nec nunc. Nulla volutpat est semper, pellentesque quam in, facilisis velit. Cras ante quam, bibendum a tincidunt id, sollicitudin eget arcu. Curabitur dolor dolor, ultricies a ipsum in, gravida tempor est.', '1708274312021trump.png', '2024-02-18 08:38:32', 19, 'cinema'),
        (5, 'Lorem ipsum dolor sit amet', 'Sed ultrices egestas enim, vel convallis justo egestas ultrices. Nunc luctus luctus fringilla. Morbi placerat dignissim ipsum eget condimentum. Duis bibendum nisl luctus, molestie tortor nec, elementum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus risus ut nisi suscipit tristique. Praesent cursus ex enim, non ultrices turpis luctus in. Aliquam at leo nisl. Cras non placerat libero. Curabitur in diam nec arcu ullamcorper condimentum. Quisque ac velit finibus, lacinia massa nec, dignissim urna.', '1708275843528bus.png', '2024-02-18 08:39:03', 19, 'cinema'),
        (7, 'Aenean molestie mi a est tempor efficitur ultricies in diam', '<p><span style="background-color: rgb(255, 255, 255);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta iaculis arcu vitae fermentum. Morbi bibendum molestie lacus in rutrum. Duis id ante auctor, luctus risus nec, iaculis nisl. Sed malesuada lacus ac metus suscipit posuere. Nulla consectetur, justo ac imperdiet vestibulum, quam ligula accumsan dui, id egestas metus magna nec enim. Donec eget lectus feugiat, sodales dolor et, gravida dui. Etiam id neque a mi dignissim lobortis. Etiam sollicitudin sed magna eget facilisis. Vivamus varius pharetra mi, id tincidunt nulla efficitur nec. Mauris vestibulum nisl vitae feugiat ullamcorper. Phasellus dignissim consectetur neque ac vehicula. Sed risus mauris, ornare quis dapibus a, consequat quis magna. Integer faucibus, tellus in ultricies maximus, libero sem lobortis odio, sit amet pellentesque nunc neque eu erat. Vivamus vitae faucibus erat.</span></p>', '1708276387736eagle.png', '2024-02-18 09:02:15', 19, 'art'),
        (8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', '<p><span style="background-color: rgb(255, 255, 255);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tempus orci. Sed pretium hendrerit dignissim. Ut at mi sit amet arcu vehicula tristique. Nulla varius, ligula id malesuada sagittis, felis dolor imperdiet ipsum, sit amet condimentum sem diam sed tellus. Quisque in sagittis enim. Donec dignissim sollicitudin feugiat. Pellentesque molestie, enim vel ullamcorper fringilla, ex arcu tincidunt velit, venenatis mollis justo dui vitae nunc. Integer dictum enim nisi, vitae pretium metus venenatis eget. Integer sit amet turpis ut ligula scelerisque condimentum eget eget enim.</span></p>', '1708275812044beauty2.png', '2024-02-18 09:03:32', 19, 'art'),
        (9, 'Nam eu viverra ipsum.', '<p><span style="background-color: rgb(255, 255, 255);">Nam eu viverra ipsum. Proin ut purus quam. Mauris condimentum dolor sed libero egestas, ut pretium nisi bibendum. Etiam vitae iaculis quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac elementum orci. Nullam suscipit congue tellus quis dignissim. Etiam faucibus nibh at lobortis tristique. Aenean sollicitudin maximus justo vitae venenatis. Vivamus eu nisl vitae erat molestie imperdiet.</span></p>', '1708275843528bus.png', '2024-02-18 09:04:03', 19, ''),
        (10, 'Donec at porta leo, vitae hendrerit sapien', '<p><span style="background-color: rgb(255, 255, 255);">Donec at porta leo, vitae hendrerit sapien. Suspendisse potenti. Etiam vehicula arcu a sodales suscipit. Integer vel metus sollicitudin, porta leo id, placerat lacus. Aenean diam diam, commodo vitae rutrum sed, viverra vitae metus. Praesent vitae pretium diam, eget elementum massa. Aliquam pellentesque ullamcorper elementum. Curabitur in metus vel est commodo varius. Pellentesque at turpis blandit, tristique ligula non, mattis quam. Duis faucibus rutrum ante. Fusce eget nulla lectus.</span></p>', '1708276371427arrow.png', '2024-02-18 09:04:33', 19, 'technology'),
        (11, 'Curabitur vestibulum laoreet efficitur.', '<p><span style="background-color: rgb(255, 255, 255);">Maecenas in nisl sit amet enim malesuada sagittis. Mauris nulla risus, bibendum id congue sed, gravida et libero. Integer et egestas sem, id ullamcorper risus. Sed eu vehicula nisi. Quisque quis risus vitae massa sagittis mattis. Duis et bibendum dolor. Fusce at est ut dui molestie cursus non eget ipsum.</span></p>', '1708275900065man.png', '2024-02-18 09:05:00', 19, 'cinema'),
        (12, 'Vivamus eget orci blandit, semper mi quis, lobortis lorem.', '<p><span style="background-color: rgb(255, 255, 255);">Vivamus eget orci blandit, semper mi quis, lobortis lorem. Nunc accumsan in felis id malesuada. Proin iaculis sagittis vehicula. Maecenas congue purus at urna imperdiet aliquam in eu nisi. Mauris commodo luctus quam, nec volutpat ante scelerisque aliquam. Donec ultricies, ligula sed vulputate blandit, nisl augue feugiat nisi, at condimentum elit mauris at ipsum. Curabitur in blandit dolor. Vestibulum quis nunc ante. Nam quis lectus vitae sem vehicula vestibulum.</span></p>', '1708275924811shark.png', '2024-02-18 09:05:24', 19, 'cinema'),
        (13, 'Aenean molestie mi a est tempor efficitur ultricies in diam', '<p><span style="background-color: rgb(255, 255, 255);">Aenean molestie mi a est tempor efficitur ultricies in diam. Suspendisse molestie ex eget diam finibus, eget imperdiet odio tempus. Praesent venenatis quam vel imperdiet malesuada. Maecenas mauris nibh, semper eget lectus a, pellentesque tincidunt dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus facilisis neque et odio egestas rhoncus. In elementum lacus orci, nec pharetra ipsum malesuada ut. Ut faucibus semper tellus. Donec faucibus, erat vitae pharetra venenatis, nulla urna feugiat lacus, ac scelerisque sapien nisi at ligula. Nunc nec nunc non nulla consequat vulputate. Fusce semper feugiat est nec dapibus.</span></p>', '1708276371427arrow.png', '2024-02-18 09:06:18', 19, 'cinema'),
        (14, 'Aliquam quis ante ac magna lobortis vulputate ut vel augue', '<p><span style="background-color: rgb(255, 255, 255);">Aliquam quis ante ac magna lobortis vulputate ut vel augue. Mauris bibendum mattis consectetur. Proin at lorem libero. Aliquam dignissim ipsum tempor mattis dignissim. Vestibulum pellentesque risus in felis rutrum imperdiet. Curabitur leo nulla, vestibulum quis vulputate ut, semper id odio. Donec a nibh faucibus, convallis erat facilisis, ultrices arcu. Nulla eget libero vehicula, dapibus ante vitae, imperdiet erat. Aliquam facilisis pretium mattis. Etiam eu posuere lectus. Nam quis fringilla urna.</span></p>', '1708275998736war.png', '2024-02-18 09:06:38', 19, 'cinema'),
        (15, 'Ut eleifend dictum odio, ut semper nisl vulputate sit amet', '<p><span style="background-color: rgb(255, 255, 255);">Ut eleifend dictum odio, ut semper nisl vulputate sit amet. Donec euismod orci vel maximus tincidunt. Proin pharetra feugiat eros, eget mollis mi luctus quis. Praesent aliquam aliquet fermentum. Sed elementum quam sem, sed pretium diam pulvinar ac. Nulla ultrices ut velit id posuere. Praesent vel urna ultrices, venenatis ex non, consequat eros. Nunc bibendum lectus mauris, nec efficitur velit imperdiet eu. Morbi condimentum leo et cursus consequat. Nam nec purus enim. Nunc volutpat mauris eget bibendum scelerisque. Mauris venenatis rhoncus odio, et posuere ligula euismod eget.</span></p>', '1708276016775watch.png', '2024-02-18 09:06:56', 19, 'design'),
        (16, 'Suspendisse vestibulum gravida vehicula', '<p><span style="background-color: rgb(255, 255, 255);">Suspendisse vestibulum gravida vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque vitae urna ac ligula tempor venenatis ac sit amet magna. Donec ut ex sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec pretium nibh quis purus commodo tincidunt. Cras porta justo quis ex vulputate pretium. Donec placerat, augue in sagittis viverra, mi sapien tincidunt lectus, eu laoreet leo lorem a nunc. Maecenas eget pellentesque risus. Maecenas vel laoreet mauris, quis posuere nulla. Sed et orci feugiat, volutpat nulla quis, lacinia sapien. Suspendisse potenti. Duis tristique velit augue, et sodales nibh varius at. Maecenas consequat et urna vitae sagittis. Aenean commodo tellus sed risus ultricies, at commodo massa suscipit. Nulla sapien ante, bibendum eget sollicitudin in, ornare pharetra nulla.</span></p>', '1708276334418rainny.png', '2024-02-18 09:12:14', 19, 'cinema'),
        (17, 'Cras quis sapien ut tortor iaculis viverra et quis magna', '<p><span style="background-color: rgb(255, 255, 255);">Cras quis sapien ut tortor iaculis viverra et quis magna. Integer a sem nec felis volutpat pretium a nec augue. Maecenas at sollicitudin nulla. Aliquam erat volutpat. Pellentesque tempor porta facilisis. Vivamus fringilla semper velit, quis rutrum ipsum ullamcorper ut. Quisque facilisis tellus sit amet odio congue pulvinar. Nunc feugiat fermentum quam, in scelerisque tellus porttitor id. Aenean in enim vitae erat fringilla maximus. Aenean consequat tempor nunc, eget suscipit nisi.</span></p>', '1708276352571beauty3.png', '2024-02-18 09:12:32', 19, 'art'),
        (18, 'Cras quis sapien ut tortor iaculis viverra et quis magna', '<p><span style="background-color: rgb(255, 255, 255);">Cras quis sapien ut tortor iaculis viverra et quis magna. Integer a sem nec felis volutpat pretium a nec augue. Maecenas at sollicitudin nulla. Aliquam erat volutpat. Pellentesque tempor porta facilisis. Vivamus fringilla semper velit, quis rutrum ipsum ullamcorper ut. Quisque facilisis tellus sit amet odio congue pulvinar. Nunc feugiat fermentum quam, in scelerisque tellus porttitor id. Aenean in enim vitae erat fringilla maximus. Aenean consequat tempor nunc, eget suscipit nisi.</span></p>', '1708276354843beauty3.png', '2024-02-18 09:12:34', 19, 'art'),
        (19, 'Quisque nibh eros, interdum a venenatis eget, eleifend eget felis', '<p><span style="background-color: rgb(255, 255, 255);">Quisque nibh eros, interdum a venenatis eget, eleifend eget felis. Pellentesque facilisis, magna vel molestie vulputate, justo felis hendrerit felis, vitae rutrum lacus augue sed lectus. In sed dignissim justo. Quisque nibh dui, suscipit eget est et, tincidunt dapibus turpis. Morbi tristique semper nisi, imperdiet fermentum turpis ultrices sit amet. Etiam venenatis eget mi ut dapibus. In non accumsan nisi, nec auctor libero. Integer egestas non dolor quis egestas. Vestibulum bibendum odio ut rutrum facilisis. Morbi sit amet tortor finibus, commodo justo quis, tristique metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed fermentum dolor et tellus cursus eleifend. Proin leo libero, tincidunt sit amet molestie eleifend, molestie at ipsum. Sed a augue tincidunt, faucibus lorem nec, placerat erat. Etiam finibus eros vel tristique lobortis. Praesent in nibh gravida, luctus neque sit amet, gravida sem.</span></p>', '1708276371427arrow.png', '2024-02-18 09:12:51', 19, 'cinema'),
        (20, 'Maecenas consequat fringilla rutrum', '<p><span style="background-color: rgb(255, 255, 255);">Maecenas consequat fringilla rutrum. Ut dui est, facilisis vel mollis eget, maximus vel est. Vestibulum elementum aliquet dolor ut accumsan. Donec ullamcorper ornare ipsum id facilisis. Sed tempus elit purus, sit amet sagittis lectus interdum sed. Duis malesuada luctus nunc, tempor condimentum lacus tempor nec. Ut blandit accumsan lorem, dignissim egestas sem facilisis eu. Proin sagittis magna arcu, eget hendrerit felis dictum quis. Aenean maximus urna nisi, sit amet fringilla ligula luctus in. Aenean ac nisi quis ante imperdiet scelerisque. Morbi hendrerit, leo nec vulputate sollicitudin, mi eros pretium nibh, nec blandit quam turpis ut dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed a vulputate diam. Duis at leo gravida nisi dignissim efficitur. Curabitur accumsan, libero rhoncus porttitor rutrum, sem nibh bibendum sem, a facilisis metus neque eu lacus.</span></p>', '1708276387736eagle.png', '2024-02-18 09:13:07', 19, 'cinema');


insert into users (id, username, email, password, img)
values  (1, 'test', 'test', 'test', 'https://source.unsplash.com/random'),
        (19, '123', '123', '$2a$10$jP3fSbT1ayDQTe7OslQ.EucLcO72/1O0j5ZtiAHKTlaMh7e7chQ2q', 'https://source.unsplash.com/random');