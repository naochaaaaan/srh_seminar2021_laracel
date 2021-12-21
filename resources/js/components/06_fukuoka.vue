<template>
    <div class="container">
        <h1 class="content-title font-weight-bold">福岡会場</h1>
        <h4 class="my-5">2021/11/13<br class="d-lg-none" />＠アクロス福岡</h4>

        <div class="container-fluid">
            <!-- 講義Ⅰ -->

            <div class="row mb-3 rounded">
                <div class="card col-10 mx-auto banner">
                    <h4 class="card-header font-weight-bold">講義Ⅰ</h4>
                    <a href="https://vimeo.com/653107130" class="py-2" data-lity>
                        <img src="images/fukuoka/fukuoka001.jpg" class="img-fluid img-thumbnail" alt="" />
                    </a>
                    <h3 class="card-title font-weight-bold">日本における第一次緊急事態宣言下の１万人調査</h3>
                    <h3 class="card-text font-weight-bold">講師：北村 邦夫</h3>
                    <h5 class="card-text mb-2">(一般社団法人 日本家族計画協会 会長)</h5>
                </div>
            </div>

            <!-- 講義Ⅱ -->

            <div class="row mb-3 rounded">
                <div class="card col-10 mx-auto banner">
                    <h4 class="card-header font-weight-bold">講義Ⅱ</h4>
                    <a href="https://vimeo.com/653107055" class="py-2" data-lity>
                        <img src="images/fukuoka/fukuoka002.jpeg" class="img-fluid img-thumbnail" alt="" />
                    </a>
                    <h3 class="card-title font-weight-bold">
                        新型コロナウイルス感染症で脅かされている<br />
                        リプロダクティブ・ヘルスの諸課題
                    </h3>
                    <h4 class="card-text font-weight-bold">講師：池田 裕美枝</h4>
                    <h5 class="card-text mb-2">(京都大学大学院医学研究科 健康医学系健康情報学分野 医学博士課程)</h5>
                </div>
            </div>

            <!-- 講義Ⅲ -->

            <div class="row mb-3 rounded">
                <div class="card col-10 mx-auto banner">
                    <h4 class="card-header font-weight-bold">講義Ⅲ</h4>
                    <a href="https://vimeo.com/653107004" class="py-2" data-lity>
                        <img src="images/fukuoka/fukuoka003.jpeg" class="img-fluid img-thumbnail" alt="" />
                    </a>
                    <h3 class="card-title font-weight-bold">
                        予防を改めて学ぶ<br />
                        -計画外の妊娠や性感染症に悩まないために-
                    </h3>
                    <h3 class="card-text font-weight-bold">講師：高村 一紘</h3>
                    <h5 class="card-text mb-2">(宮崎県立宮崎病院 産婦人科・地域医療科 医長)</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .works {
        list-style-type: none;
        padding-left: 0;
        text-align: center;
        padding-left: 15%;
        padding-right: 15%;
    }

    .jp {
        font-weight: 100;
    }

    .card-lang {
        font-weight: 500;
    }

    .card {
        display: inline-block;
        margin: 30px 60px;
        width: 350px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 5px #ccc;
    }
    .card-img {
        border-radius: 5px 5px 0 0;
        width: 100%;
        height: 200px;
        object-fit: contain;
    }
    .card-content {
        padding: 20px;
    }
    .card-title {
        /* font-size: 20px; */
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
    }
    .card-text {
        /* font-size: 14px; */
        line-height: 1.5;
    }

    .card-link {
        border: 2px solid #00aaff;
        text-decoration: none;
        color: #00aaff;
        margin: 0 10px;
        padding: 5px 10px;
        border-radius: 5px;
        transition: 0.4s;
        font-weight: bold;
    }
    .card-link:hover {
        background-color: #00aaff;
        color: white;
    }

    .github-link {
        border-color: #171515;
        color: #171515;
    }
    .github-link:hover {
        background-color: #171515;
        color: white;
    }

    .banner a {
        display: inline-block;
        background: url('../assets/images/play.png') center/50% no-repeat;
        background-size: 150px 150px;
    }
    .banner a img {
        vertical-align: middle;
        -webkit-transition: opacity 0.3s;
        transition: opacity 0.3s;
        aspect-ratio: 16 / 9;
    }
    .banner a:hover img {
        opacity: 0.4;
    }

    .button-green {
        background-color: #00a893;
    }

    /*.work-content{
	width: 350px;
	padding: 10px;
	margin: 30px 60px;
  display: inline-block;
}

.work-content:hover{
  background-color: rgba(50, 50, 100, 0.3);
}

.works-image{
    width: 100%;
}*/

    @media screen and (max-width: 768px) {
        .works {
            padding-left: 1%;
            padding-right: 1%;
        }

        .card-link {
            border: 2px solid #00aaff;
            background-color: #00aaff;
            text-decoration: none;
            color: white;
            margin: 0 10px;
            padding: 5px 10px;
            border-radius: 5px;

            font-weight: bold;
        }

        .github-link {
            background-color: #171515;
            border-color: #171515;
        }
    }

    @media screen and (max-width: 550px) {
        .card {
            width: 280px;
            margin: 30px 0;
        }
    }
</style>
