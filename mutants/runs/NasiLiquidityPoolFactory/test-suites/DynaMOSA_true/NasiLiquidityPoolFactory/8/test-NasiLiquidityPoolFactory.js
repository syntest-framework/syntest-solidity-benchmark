const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressJrxNHMK = accounts[5]
		const addressp9fk03T = accounts[1]
		const uintfRYfCvD = BigInt("961")
		const uinttkgnCCK = BigInt("1520")
		const NasiLiquidityPoolFactorygjLsvdY = await NasiLiquidityPoolFactory.new(addressJrxNHMK, addressp9fk03T, uintfRYfCvD, uinttkgnCCK, {from: accounts[4]});
		const addressmmwiWeo = accounts[2]
		const uintv3hHPa5 = BigInt("1951")
		const addressMissEJ4 = accounts[5]
		const boolCepb0e7 = await NasiLiquidityPoolFactorygjLsvdY.isPauser.call(addressmmwiWeo, {from: accounts[2]});
		const booliMOnlx8 = await NasiLiquidityPoolFactorygjLsvdY.decreaseAllowance.call(addressMissEJ4, uintv3hHPa5, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringCTELAA9 = "Q0G0Om7K4RXvIjPDX5YAEqemsCJKAGCrC7iNAkXQ5JmdusjwSbByp32X8iEPodIRjvxe3r"
		const stringLSoOFH = "Dnsehp2KqluXu0K5wYJbh0GYbDc5c6set5t5MvpMYun"
		const uintBTrjzXy = BigInt("61")
		const NasiLiquidityPoolFactoryd47rAiH = await NasiLiquidityPoolFactory.new(stringCTELAA9, stringLSoOFH, uintBTrjzXy, {from: accounts[0]});
		const addressCmzUz7 = accounts[0]
		const addresslmLdWlx = "0x0000000000000000000000000000000000000001"
		const uintEXQKYc4 = BigInt("1122")
		const boolzjDrKxe = await NasiLiquidityPoolFactoryd47rAiH.isOwner.call({from: accounts[1]});
		const addressWYsa71e = await NasiLiquidityPoolFactoryd47rAiH.addPauser.call(addressCmzUz7, {from: accounts[1]});
		const addresszyCNdNx = await NasiLiquidityPoolFactoryd47rAiH.delegate.call(addresslmLdWlx, {from: accounts[0]});
		const uint2569JsAqy = await NasiLiquidityPoolFactoryd47rAiH.burn.call(uintEXQKYc4, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringU0nuP8R = "I5LKILWd6u"
		const stringJReccwL = "wY82VYoQgnCsvfHRhbdV2YMh"
		const uintzqONbO2 = BigInt("133")
		const NasiLiquidityPoolFactoryMiJMIKd = await NasiLiquidityPoolFactory.new(stringU0nuP8R, stringJReccwL, uintzqONbO2, {from: "0x0000000000000000000000000000000000000001"});
		const uinteC1wZPc = BigInt("408")
		const addressOBH9XCL = "0x0000000000000000000000000000000000000001"
		const addressAzExRAF = accounts[2]
		const uinttvhnlJX = BigInt("827")
		const addressRVHHi28 = accounts[5]
		const boolIEaXAtB = true
		const uintg26n3Rh = BigInt("1111")
		const uintAb2SFje = BigInt("106")
		const boolnxqIVgM = await NasiLiquidityPoolFactoryMiJMIKd.transfer.call(addressOBH9XCL, uinteC1wZPc, {from: accounts[1]});
		const boolw42nngp = await NasiLiquidityPoolFactoryMiJMIKd.isMinter.call(addressAzExRAF, {from: accounts[4]});
		const boolUEmjYlB = await NasiLiquidityPoolFactoryMiJMIKd.transfer.call(addressRVHHi28, uinttvhnlJX, {from: accounts[2]});
		const uint256ZdR4G4l = await NasiLiquidityPoolFactoryMiJMIKd.setAllocationPoint.call(uintAb2SFje, uintg26n3Rh, boolIEaXAtB, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringLcUCCc9 = "KuJe5SkBbROT7BAPAcdtdDyvQCtxIrs5Gl"
		const stringTftzUmm = "FFr0ktSWgyYpbV"
		const uintFVqDa4D = BigInt("210")
		const NasiLiquidityPoolFactoryq43wpdP = await NasiLiquidityPoolFactory.new(stringLcUCCc9, stringTftzUmm, uintFVqDa4D, {from: accounts[4]});
		const addressZMkwedO = accounts[5]
		const uintvwQ3zuG = BigInt("557")
		const addressFN9jl5c = accounts[3]
		const addressHoXNdag = accounts[4]
		const uintzzVZjpD = BigInt("1740")
		const addresslT3jWsH = await NasiLiquidityPoolFactoryq43wpdP.dev.call(addressZMkwedO, {from: accounts[3]});
		const boolTqyiuIT = await NasiLiquidityPoolFactoryq43wpdP.increaseAllowance.call(addressFN9jl5c, uintvwQ3zuG, {from: accounts[3]});
		const boolUHdvT5R = await NasiLiquidityPoolFactoryq43wpdP.isPauser.call(addressHoXNdag, {from: accounts[1]});
		await NasiLiquidityPoolFactoryq43wpdP.renouncePauser.call({from: accounts[2]});
		const uint256KPj7btn = await NasiLiquidityPoolFactoryq43wpdP.leaveStaking.call(uintzzVZjpD, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringgkXWwjT = "hf2fEoaVvV7nwAy2rT1K4iEn9"
		const stringUDTlHe7 = "pPfYiM6PS9blW4X2"
		const uintWV2cUPC = BigInt("108")
		const NasiLiquidityPoolFactoryYda7z9g = await NasiLiquidityPoolFactory.new(stringgkXWwjT, stringUDTlHe7, uintWV2cUPC, {from: accounts[4]});
		const addressXiGzP0D = accounts[2]
		const addressSWmE9GB = accounts[3]
		const addressUjX7kNo = accounts[4]
		const uintrue7ZgJ = BigInt("689")
		const addressxtISahI = accounts[0]
		const addressoZIxWrX = accounts[2]
		const addressQcuiD2 = await NasiLiquidityPoolFactoryYda7z9g._delegate.call(addressSWmE9GB, addressXiGzP0D, {from: accounts[4]});
		const boolWrmy09P = await NasiLiquidityPoolFactoryYda7z9g.isPauser.call(addressUjX7kNo, {from: accounts[0]});
		const boolGqvuiWi = await NasiLiquidityPoolFactoryYda7z9g.increaseAllowance.call(addressxtISahI, uintrue7ZgJ, {from: accounts[2]});
		const uint256y3ob5dk = await NasiLiquidityPoolFactoryYda7z9g.getCurrentVotes.call(addressoZIxWrX, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const string35j0wo = "kYvnMzYjBscCe9HVK8T6kHlqzF99V2c1Nk93vDH"
		const stringoYaQcN = "iqiQOkXJ67Sp7m4dOLetDzcyECAxJDFXCaye4SQGkPgAPo4W"
		const uintrAEV4TP = BigInt("118")
		const NasiLiquidityPoolFactoryKQCJgPy = await NasiLiquidityPoolFactory.new(string35j0wo, stringoYaQcN, uintrAEV4TP, {from: accounts[0]});
		const uintptxfb9S = BigInt("631")
		const addressDYjIVMo = accounts[2]
		const uintGJRw82u = BigInt("851")
		const uintIqi6wH = BigInt("1115")
		const uintapxwVXp = BigInt("566")
		const uintuYr0rK6 = BigInt("1498")
		const uintGJpMsdJ = BigInt("735")
		const addressLGIT5zo = accounts[0]
		const bytezlVYJTR = "0x0906121d1d141f05050d0907110a141c1f021d1e1b18011d160718010a0b1003"
		const bytez1PmCLk = "0x130f111d011a0719111701041a1b10181c15091d010b09111d08080502171c18"
		const uintHlvscp = BigInt("121")
		const uintc2PAXug = BigInt("1844")
		const uintqKlWLlX = BigInt("1836")
		const addressnRmsOzD = accounts[4]
		await NasiLiquidityPoolFactoryKQCJgPy.massUpdatePools.call({from: accounts[3]});
		const boolorHnAXx = await NasiLiquidityPoolFactoryKQCJgPy.transfer.call(addressDYjIVMo, uintptxfb9S, {from: accounts[3]});
		const uint256C3TZl7V = await NasiLiquidityPoolFactoryKQCJgPy.deposit.call(uintIqi6wH, uintGJRw82u, {from: accounts[0]});
		const 
XtnBl8K = await NasiLiquidityPoolFactoryKQCJgPy._writeCheckpoint.call(addressLGIT5zo, uintGJpMsdJ, uintuYr0rK6, uintapxwVXp, {from: accounts[4]});
		const 
YnzPEEa = await NasiLiquidityPoolFactoryKQCJgPy.delegateBySig.call(addressnRmsOzD, uintqKlWLlX, uintc2PAXug, uintHlvscp, bytez1PmCLk, bytezlVYJTR, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringEOZX4Nl = "NQWQO8wxPtEArXWCnoC5cgk3k12JEnvHTsDf5poFkBOhmdIlAlO2ryRmt1lRDH5n"
		const stringrlouh2B = "6QlrtlJgcyOUvYGkjTSJOgmmxuF5u6da"
		const uintXvDjDKr = BigInt("181")
		const NasiLiquidityPoolFactoryug8jjt = await NasiLiquidityPoolFactory.new(stringEOZX4Nl, stringrlouh2B, uintXvDjDKr, {from: accounts[0]});
		const uintLmacbpu = BigInt("115")
		const addressIm5WUGM = accounts[3]
		const addressroYmkEP = accounts[4]
		const uintFMCz92n = BigInt("991")
		const booligAzzFp = await NasiLiquidityPoolFactoryug8jjt.increaseAllowance.call(addressIm5WUGM, uintLmacbpu, {from: accounts[1]});
		const addressPB0icdq = await NasiLiquidityPoolFactoryug8jjt.addMinter.call(addressroYmkEP, {from: accounts[0]});
		const uint256H2HPtGf = await NasiLiquidityPoolFactoryug8jjt.burn.call(uintFMCz92n, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringR0ET7bV = "j1A5SJzLM3Y7DS1kwguDckqsv9UfKGUdVSYuQ6pk6kxCRDhBQrrBYoqrXHoYx4gggn1kSfhd87dgpT6ADS7Be"
		const stringifjJugi = "izhDCtC9pIEv"
		const uinteCvZZQf = BigInt("25")
		const NasiLiquidityPoolFactoryFoZqMLR = await NasiLiquidityPoolFactory.new(stringR0ET7bV, stringifjJugi, uinteCvZZQf, {from: accounts[0]});
		const addressOvjApeg = "0x0000000000000000000000000000000000000001"
		const uintVZkiQ1v = BigInt("1642")
		const addressRiCNtD = accounts[1]
		await NasiLiquidityPoolFactoryFoZqMLR.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const boolGbJIgPo = await NasiLiquidityPoolFactoryFoZqMLR.isMinter.call(addressOvjApeg, {from: accounts[2]});
		const boolCUjTIqX = await NasiLiquidityPoolFactoryFoZqMLR.decreaseAllowance.call(addressRiCNtD, uintVZkiQ1v, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringVWrBo3 = "Rn2KP2aj5cReVc9GkPf"
		const stringgHbRGRU = "DDWUkeCTsInJUXkHWWY9N7i7u9cSPWtzcbNv3MnbkDbpVvUbVfa0Qibzr7738J1oroPnr"
		const uintLQcf1SW = BigInt("173")
		const NasiLiquidityPoolFactorykxFz5cH = await NasiLiquidityPoolFactory.new(stringVWrBo3, stringgHbRGRU, uintLQcf1SW, {from: accounts[0]});
		const addressVGHTA4U = accounts[0]
		const addressK0XnhAj = accounts[5]
		const addressAyiYJEU = accounts[3]
		const uintNPDmRG9 = BigInt("1106")
		const addressa6EjDpn = await NasiLiquidityPoolFactorykxFz5cH.addPauser.call(addressVGHTA4U, {from: accounts[5]});
		const uint256Q1feodg = await NasiLiquidityPoolFactorykxFz5cH.allowance.call(addressAyiYJEU, addressK0XnhAj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256S1COTtz = await NasiLiquidityPoolFactorykxFz5cH.enterStaking.call(uintNPDmRG9, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressxq2XkW3 = accounts[0]
		const addressme000AK = accounts[2]
		const uintR8z8esZ = BigInt("1135")
		const uintRSi2IQH = BigInt("442")
		const NasiLiquidityPoolFactoryPiMoLeS = await NasiLiquidityPoolFactory.new(addressxq2XkW3, addressme000AK, uintR8z8esZ, uintRSi2IQH, {from: accounts[0]});
		const uintI6axVe7 = BigInt("1449")
		const uintPlM2NkD = BigInt("1161")
		const addressOVTiuSw = accounts[1]
		const addressOcu6WAk = accounts[2]
		const boolYLOzUSe = false
		const addresse10G97n = accounts[4]
		const uintbVTYie4 = BigInt("1109")
		const addresspBUXMCA = accounts[3]
		const uintnzF15lm = BigInt("1172")
		const addressDS1fYnb = accounts[3]
		const addressdpVsLpF = accounts[0]
		const uint256K90FQF9 = await NasiLiquidityPoolFactoryPiMoLeS.withdraw.call(uintPlM2NkD, uintI6axVe7, {from: accounts[4]});
		const uint256BS07Gw = await NasiLiquidityPoolFactoryPiMoLeS.balanceOf.call(addressOVTiuSw, {from: accounts[4]});
		const boolBTnghez = await NasiLiquidityPoolFactoryPiMoLeS.isMinter.call(addressOcu6WAk, {from: accounts[4]});
		const uint256p3wYVem = await NasiLiquidityPoolFactoryPiMoLeS.addLpToken.call(uintbVTYie4, addresse10G97n, boolYLOzUSe, {from: "0x0000000000000000000000000000000000000001"});
		const addressTAPYYOG = await NasiLiquidityPoolFactoryPiMoLeS.transferOwnership.call(addresspBUXMCA, {from: accounts[1]});
		const boolFGiuQCU = await NasiLiquidityPoolFactoryPiMoLeS.transferFrom.call(addressdpVsLpF, addressDS1fYnb, uintnzF15lm, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressqmXeLL3 = accounts[5]
		const addressnvReMQ = accounts[1]
		const uinte06QaZW = BigInt("961")
		const uintPjmHXw = BigInt("1520")
		const NasiLiquidityPoolFactorygjLsvdY = await NasiLiquidityPoolFactory.new(addressqmXeLL3, addressnvReMQ, uinte06QaZW, uintPjmHXw, {from: accounts[4]});
		const boolLp2dnm = false
		const addressskTlMbI = "0x0000000000000000000000000000000000000001"
		const uintq0E7gX = BigInt("1526")
		const addressWNHJPEb = accounts[4]
		const uint256Ki2xkea = await NasiLiquidityPoolFactorygjLsvdY.addLpToken.call(uintq0E7gX, addressskTlMbI, boolLp2dnm, {from: accounts[4]});
		const boolCepb0e7 = await NasiLiquidityPoolFactorygjLsvdY.isPauser.call(addressWNHJPEb, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringGg4kb1K = "o2gYONAO2fOaMT5TbQ3KvYOMq8VJVO1r9Ap7IuzGwbXdu4HKgAHwdqt2uXHF7Sz"
		const stringvSrOSh = "8IcU1t16UtcVxnC5CPmmaTypGIckIWL6v0OqSaaL4mzVsSLJwTXWWHKkKFMMS7BMBObjsr5hoKIs5MEnrtxEjsLsh"
		const uintc6K9ydA = BigInt("71")
		const NasiLiquidityPoolFactoryOhy6wQf = await NasiLiquidityPoolFactory.new(stringGg4kb1K, stringvSrOSh, uintc6K9ydA, {from: accounts[1]});
		const uintJ8sFdBd = BigInt("1017")
		const addressQBa11rx = "0x0000000000000000000000000000000000000001"
		const addressbd6pw5q = accounts[0]
		const addressnUMGmOx = "0x0000000000000000000000000000000000000001"
		const uintA3EMWKT = BigInt("1984")
		const addressOOz8mb3 = accounts[0]
		const addressAsnjcyw = accounts[4]
		const uintTLYSMYN = BigInt("480")
		const boolDf8iDI = await NasiLiquidityPoolFactoryOhy6wQf.increaseAllowance.call(addressQBa11rx, uintJ8sFdBd, {from: accounts[1]});
		const addressgUzQGjv = await NasiLiquidityPoolFactoryOhy6wQf.delegate.call(addressbd6pw5q, {from: accounts[0]});
		const boolLwoLRB = await NasiLiquidityPoolFactoryOhy6wQf.isPauser.call(addressnUMGmOx, {from: accounts[2]});
		const boolGxQBIg = await NasiLiquidityPoolFactoryOhy6wQf.transferFrom.call(addressAsnjcyw, addressOOz8mb3, uintA3EMWKT, {from: accounts[1]});
		const uint256Rwga068 = await NasiLiquidityPoolFactoryOhy6wQf.updatePool.call(uintTLYSMYN, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringQ8cyCj = "ZmyWN3RwBmK6U8QbNG97BCKkBVe1Ch6IeT16OrLscWn1O9sOKwBDhvkBRsdptH0yAP59fvdr1"
		const stringUSu0mI = "BvbcsjkNMeyE4xbrVUjfJsNOWrwq4kkjcacJ9LOT7X6f33UKKN"
		const uintfsn1quT = BigInt("137")
		const NasiLiquidityPoolFactorytbuP33 = await NasiLiquidityPoolFactory.new(stringQ8cyCj, stringUSu0mI, uintfsn1quT, {from: accounts[5]});
		const addressLTaBmVj = "0x0000000000000000000000000000000000000001"
		const addressR4utTD9 = accounts[0]
		const uintVhDoC2 = BigInt("67")
		const addressTgrLnBY = accounts[2]
		const bool07OrSi = await NasiLiquidityPoolFactorytbuP33.isMinter.call(addressLTaBmVj, {from: accounts[1]});
		await NasiLiquidityPoolFactorytbuP33.onlyOwner.call({from: accounts[1]});
		const addressbDB15jP = await NasiLiquidityPoolFactorytbuP33.addPauser.call(addressR4utTD9, {from: accounts[1]});
		const boolEJ1F5W9 = await NasiLiquidityPoolFactorytbuP33.mint.call(addressTgrLnBY, uintVhDoC2, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressp5AwMd = accounts[0]
		const addressAwEm1K = accounts[2]
		const uintJMHe9Y9 = BigInt("1135")
		const uintX3D2GDa = BigInt("442")
		const NasiLiquidityPoolFactoryPiMoLeS = await NasiLiquidityPoolFactory.new(addressp5AwMd, addressAwEm1K, uintJMHe9Y9, uintX3D2GDa, {from: accounts[0]});
		const uintYShuwqP = BigInt("1130")
		const addressowfXIcf = accounts[4]
		const uintlBcXHVH = BigInt("1449")
		const uintjv74icq = BigInt("1161")
		const addressoJ0LFWT = accounts[1]
		const addressKA2GLwM = accounts[2]
		const boolYLOzUSe = true
		const addressGUXIHXe = accounts[4]
		const uintkdlWbqc = BigInt("1109")
		const addressePebvwB = accounts[3]
		const uintVXyB2RQ = BigInt("1172")
		const addressMOdDfy6 = accounts[3]
		const addressz73Nice = accounts[0]
		const uint256BIqNP5m = await NasiLiquidityPoolFactoryPiMoLeS.updatePool.call(uintYShuwqP, {from: accounts[0]});
		const addressBtq4YuY = await NasiLiquidityPoolFactoryPiMoLeS.addPauser.call(addressowfXIcf, {from: "0x0000000000000000000000000000000000000001"});
		const uint256K90FQF9 = await NasiLiquidityPoolFactoryPiMoLeS.withdraw.call(uintjv74icq, uintlBcXHVH, {from: accounts[4]});
		const uint256BS07Gw = await NasiLiquidityPoolFactoryPiMoLeS.balanceOf.call(addressoJ0LFWT, {from: accounts[4]});
		const boolBTnghez = await NasiLiquidityPoolFactoryPiMoLeS.isMinter.call(addressKA2GLwM, {from: accounts[4]});
		const uint256p3wYVem = await NasiLiquidityPoolFactoryPiMoLeS.addLpToken.call(uintkdlWbqc, addressGUXIHXe, boolYLOzUSe, {from: "0x0000000000000000000000000000000000000001"});
		const addressTAPYYOG = await NasiLiquidityPoolFactoryPiMoLeS.transferOwnership.call(addressePebvwB, {from: accounts[1]});
		const booljmBUy4q = await NasiLiquidityPoolFactoryPiMoLeS.paused.call({from: accounts[1]});
		const uint8Bi4lECS = await NasiLiquidityPoolFactoryPiMoLeS.decimals.call({from: accounts[3]});
		const boolFGiuQCU = await NasiLiquidityPoolFactoryPiMoLeS.transferFrom.call(addressz73Nice, addressMOdDfy6, uintVXyB2RQ, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringC3RwgkA = "34cLq8SuMIxW5v6rTaURQVBhqNfqhpfiTEomaYHRAIK1GYrukLi7gR"
		const stringi0D7TAe = "8iSd4tuFiDrd2HR4twZROPVGafrRWxeM69kiCYidfR2pDLiDzRPvcqqDqYN1sW4FAraFReCynDiIijYyGy5euRAIiPhf2FUVRH"
		const uintuOu5qLP = BigInt("54")
		const NasiLiquidityPoolFactorye0wA1oD = await NasiLiquidityPoolFactory.new(stringC3RwgkA, stringi0D7TAe, uintuOu5qLP, {from: accounts[2]});
		const uintR5zrdh7 = BigInt("372")
		const addressI5qJT7S = accounts[4]
		const addressVPGrtJt = accounts[3]
		const uintAcMF69P = BigInt("321")
		const stringmzk78tA = await NasiLiquidityPoolFactorye0wA1oD.symbol.call({from: accounts[1]});
		const addresss8GoNkl = await NasiLiquidityPoolFactorye0wA1oD.burnFrom.call(addressI5qJT7S, uintR5zrdh7, {from: accounts[3]});
		const uint256ntgk3q = await NasiLiquidityPoolFactorye0wA1oD.pendingNasi.call(uintAcMF69P, addressVPGrtJt, {from: accounts[3]});
		await NasiLiquidityPoolFactorye0wA1oD.renouncePauser.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringvfYEaYd = "65omNGcy55hwGhh4"
		const stringuWYuomN = "qoYQuMgNdet7magc"
		const uintcGfsukZ = BigInt("37")
		const NasiLiquidityPoolFactorySHILbTR = await NasiLiquidityPoolFactory.new(stringvfYEaYd, stringuWYuomN, uintcGfsukZ, {from: accounts[4]});
		const bytes9PjTyE = "0x070c18131b0e1a0d1209021f101100190715181e0e1e1b0917111e0b050a1901"
		const byteXFPMEz = "0x0f20021708040c1b130d091a08201c110c0304130c160e15070b05100d0e1708"
		const uintLSiY1N = BigInt("98")
		const uintA5ZtlXM = BigInt("127")
		const uintGGchWF1 = BigInt("1723")
		const addressX1HYEpM = "0x0000000000000000000000000000000000000001"
		const uintBzJ8x1G = BigInt("1999")
		const addressZCLU98Q = accounts[2]
		const addressl4w0nDv = accounts[3]
		const bytenHuycga = "0x05101a1e0704071e14180e011c140b181f0b1f060e01070b1e1616101c0b0418"
		const byteuRmGPKx = "0x111a05060f140a030703060e1d0f0f04180b05181c042010031f0e1c0d0b1c14"
		const uinttPyiPw = BigInt("172")
		const uintN4K8mbX = BigInt("154")
		const uintlUJxVsf = BigInt("161")
		const addressp6W4A4 = accounts[3]
		const uint8Tdvbr2y = await NasiLiquidityPoolFactorySHILbTR.decimals.call({from: accounts[0]});
		const 
cLTxVZm = await NasiLiquidityPoolFactorySHILbTR.delegateBySig.call(addressX1HYEpM, uintGGchWF1, uintA5ZtlXM, uintLSiY1N, byteXFPMEz, bytes9PjTyE, {from: "0x0000000000000000000000000000000000000001"});
		const boolB1wxTRH = await NasiLiquidityPoolFactorySHILbTR.approve.call(addressZCLU98Q, uintBzJ8x1G, {from: accounts[3]});
		const address4TVPka = await NasiLiquidityPoolFactorySHILbTR.delegates.call(addressl4w0nDv, {from: accounts[1]});
		const 
WW215Ud = await NasiLiquidityPoolFactorySHILbTR.delegateBySig.call(addressp6W4A4, uintlUJxVsf, uintN4K8mbX, uinttPyiPw, byteuRmGPKx, bytenHuycga, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressuwqzWFm = accounts[3]
		const addressHqTqa0k = accounts[3]
		const uintLaqJUda = BigInt("365")
		const uintLu6AjG2 = BigInt("1025")
		const NasiLiquidityPoolFactoryhzQGGSV = await NasiLiquidityPoolFactory.new(addressuwqzWFm, addressHqTqa0k, uintLaqJUda, uintLu6AjG2, {from: accounts[4]});
		const uintsWsM3xA = BigInt("1345")
		const uintobGxVkc = BigInt("1722")
		const uintXVbnqqi = BigInt("718")
		const addresskPtv3m = accounts[0]
		const uintRAbovgM = BigInt("675")
		const addressoaAxDz = accounts[2]
		const uintdmzQUVG = BigInt("614")
		const uint256NHAoU3B = await NasiLiquidityPoolFactoryhzQGGSV.getBonusMultiplier.call(uintobGxVkc, uintsWsM3xA, {from: accounts[1]});
		await NasiLiquidityPoolFactoryhzQGGSV.onlyPauser.call({from: accounts[4]});
		const boolmr8kePt = await NasiLiquidityPoolFactoryhzQGGSV.approve.call(addresskPtv3m, uintXVbnqqi, {from: accounts[3]});
		const boolenNtcNa = await NasiLiquidityPoolFactoryhzQGGSV.approve.call(addressoaAxDz, uintRAbovgM, {from: accounts[3]});
		const uint256HkgjHmt = await NasiLiquidityPoolFactoryhzQGGSV.emergencyWithdraw.call(uintdmzQUVG, {from: accounts[1]});
	});
})