const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintZsB32mR = BigInt("1952")
		const stringUNxeRem = "6w6YGJZupuPkXOgiufTeCXTVTq76QaOTmLpg"
		const stringHMEGmNc = "ZtQIBgJvZd9IaK5bbHXfFHzeizhYhGGv5NtI6bHXBOxhWzTem2GHebIcZxM4FCGH32LMMxU1"
		const GFCtd11jk = await GFC.new(uintZsB32mR, stringUNxeRem, stringHMEGmNc, {from: accounts[3]});
		const uintgEgPtBt = BigInt("1575")
		const addressl6vb0c7 = accounts[4]
		const uinteodbkE7 = BigInt("983")
		const addressx1uhC02 = accounts[1]
		const addressX8Hd0aM = accounts[1]
		const uintbV6PEvQ = BigInt("658")
		const addressfuzQ7Ip = accounts[3]
		const addressTYbDQKf = accounts[4]
		const uintt1SNxW9 = BigInt("1781")
		const addresswbCPyTB = accounts[3]
		const addressHnHX9uE = accounts[1]
		const boolxSdvhVV = await GFCtd11jk.transfer.call(addressl6vb0c7, uintgEgPtBt, {from: "0x0000000000000000000000000000000000000001"});
		const boolHPrxLcx = await GFCtd11jk.transferFrom.call(addressX8Hd0aM, addressx1uhC02, uinteodbkE7, {from: accounts[2]});
		const boolRXniN5V = await GFCtd11jk.transferFrom.call(addressTYbDQKf, addressfuzQ7Ip, uintbV6PEvQ, {from: accounts[2]});
		const boolcQPRh6G = await GFCtd11jk.transferFrom.call(addressHnHX9uE, addresswbCPyTB, uintt1SNxW9, {from: accounts[1]});

		await expect(GFCtd11jk.transfer.call(addressl6vb0c7, uintgEgPtBt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintCFpduvw = BigInt("1761")
		const stringmAx9q6R = "HXQwTSS1bFojcQ0XlzenaBsn2pJzG3dCEhaqpDAhGGN5RdyrYgmyS8rYfkoGX14UYTgdXP7R1DFoP"
		const stringq1RiGKI = "GYESOygoKjxTjiuNgOUNYFsOeDA6LRIPbys5quAKhohS6YyX7m7VtEU3I4bIXPEC8bKYMLO5pTMEAG1Fk487HeOqMma7R"
		const GFCeK5VvSV = await GFC.new(uintCFpduvw, stringmAx9q6R, stringq1RiGKI, {from: accounts[5]});
		const bytemCE9Bv7 = "0x011820060c0714131a010605"
		const uintr12TRQN = BigInt("1353")
		const addressOtnjeuq = accounts[5]
		const uintYO6ZW8 = BigInt("1330")
		const addressTiNvnhV = accounts[1]
		const uintTJ994i6 = BigInt("1578")
		const addressue3xyrE = accounts[4]
		const uintGjaGZnZ = BigInt("1477")
		const addressk0ERq4k = accounts[1]
		const uintiN4GrrA = BigInt("620")
		const bools0T7zPp = await GFCeK5VvSV.approveAndCall.call(addressOtnjeuq, uintr12TRQN, bytemCE9Bv7, {from: accounts[5]});
		const boolnVvoehD = await GFCeK5VvSV.burnFrom.call(addressTiNvnhV, uintYO6ZW8, {from: accounts[2]});
		const booltXsOiY = await GFCeK5VvSV.approve.call(addressue3xyrE, uintTJ994i6, {from: "0x0000000000000000000000000000000000000001"});
		const boolN06UyUK = await GFCeK5VvSV.approve.call(addressk0ERq4k, uintGjaGZnZ, {from: accounts[3]});
		const boolJAvMEkU = await GFCeK5VvSV.burn.call(uintiN4GrrA, {from: accounts[1]});

		await expect(GFCeK5VvSV.approveAndCall.call(addressOtnjeuq, uintr12TRQN, bytemCE9Bv7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintTUxU2J9 = BigInt("987")
		const stringgkrHfq5 = "8cm0SjsxUK7kK7zOEdOJ1DT"
		const stringkIuil3 = "3QIwEkncB2McZYuN953IdNIYVlvN4TDlCNaGw6NEsGiG98bfrTyPCvWnLIVtuK3BX6U"
		const GFCeEK3NxL = await GFC.new(uintTUxU2J9, stringgkrHfq5, stringkIuil3, {from: accounts[4]});
		const uintQJt3UWf = BigInt("1300")
		const addresslMidYps = accounts[0]
		const addresswGUsul4 = accounts[4]
		const uintO0MbGCO = BigInt("1039")
		const addressunuf7Mx = accounts[5]
		const uintzoyIhka = BigInt("1458")
		const addressH2v7Umk = accounts[2]
		const addressLZUZpMl = accounts[4]
		const byteBtXzAmO = "0x131804191f0911110d1f1b06"
		const uintBXLuumF = BigInt("1983")
		const addressYBtiTvL = accounts[3]
		const uintGbTTECC = BigInt("1073")
		const addressYN5uXfM = accounts[1]
		const boolaqt1NKo = await GFCeEK3NxL.transferFrom.call(addresswGUsul4, addresslMidYps, uintQJt3UWf, {from: accounts[3]});
		const boolS9ZaI2l = await GFCeEK3NxL.transfer.call(addressunuf7Mx, uintO0MbGCO, {from: accounts[4]});
		const booldjkWaor = await GFCeEK3NxL.transferFrom.call(addressLZUZpMl, addressH2v7Umk, uintzoyIhka, {from: accounts[4]});
		const boolI07HFGj = await GFCeEK3NxL.approveAndCall.call(addressYBtiTvL, uintBXLuumF, byteBtXzAmO, {from: accounts[1]});
		const boolZDlSoo = await GFCeEK3NxL.approve.call(addressYN5uXfM, uintGbTTECC, {from: accounts[4]});

		await expect(GFCeEK3NxL.transferFrom.call(addresswGUsul4, addresslMidYps, uintQJt3UWf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintY9P1Ekr = BigInt("991")
		const stringmj3zsDZ = "tk0QWE51mw4HtlyjEknGtMytm9i5SMf6KA5v9PVnuHB"
		const stringHr74oPg = "aFgDJ1DFgzrNkMakKJ6mypeu9KrAA23dhg6TQUvPLG5ZFdOJ1l2HHZ"
		const GFCZsheq4W = await GFC.new(uintY9P1Ekr, stringmj3zsDZ, stringHr74oPg, {from: accounts[1]});
		const uintK2ILc6z = BigInt("722")
		const addressXW8nhw = accounts[1]
		const uintlD9ikqP = BigInt("1402")
		const byteLrenAMD = "0x16200c011a131e160f081d1f151815180c140f141e011c01"
		const uintBTAZCXv = BigInt("390")
		const addressgyBBAlV = accounts[4]
		const uintNst3N6J = BigInt("818")
		const addressNT9nsYL = accounts[1]
		const boolUuzfBvp = await GFCZsheq4W.burnFrom.call(addressXW8nhw, uintK2ILc6z, {from: accounts[2]});
		const boolUctrK3M = await GFCZsheq4W.burn.call(uintlD9ikqP, {from: accounts[2]});
		const boolhv4vuMK = await GFCZsheq4W.approveAndCall.call(addressgyBBAlV, uintBTAZCXv, byteLrenAMD, {from: accounts[2]});
		const boolteoK1DR = await GFCZsheq4W.transfer.call(addressNT9nsYL, uintNst3N6J, {from: accounts[1]});

		await expect(GFCZsheq4W.burnFrom.call(addressXW8nhw, uintK2ILc6z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintyNKX846 = BigInt("1993")
		const stringS2Cvv5t = "GJjVTrJ27MJp2OT4EHBvhth3jJy6FYhNFkyu2vvbmF3M9xHgI98WNNvnQaCsKqIgPgkYz8YqO"
		const stringvKaefS = "hkVWJPEHOXQ7zLMmIr8plK63b6231c"
		const GFCqrKJLjp = await GFC.new(uintyNKX846, stringS2Cvv5t, stringvKaefS, {from: "0x0000000000000000000000000000000000000001"});
		const uintpI0ReH0 = BigInt("1619")
		const addressk6KK4FE = accounts[3]
		const addressWxaXIm = accounts[3]
		const uintXAUOdmL = BigInt("1659")
		const addressXfkqfit = accounts[5]
		const uintb655gjf = BigInt("481")
		const addressiOopbAI = accounts[0]
		const bytexsQmsRx = "0x021b1b03180d19061c14041d1f0e0f1315"
		const uintHHk0B0G = BigInt("723")
		const addressfuAN0Wo = accounts[4]
		const boolA70APUJ = await GFCqrKJLjp.transferFrom.call(addressWxaXIm, addressk6KK4FE, uintpI0ReH0, {from: accounts[1]});
		const boolR6fzk3 = await GFCqrKJLjp.approve.call(addressXfkqfit, uintXAUOdmL, {from: accounts[4]});
		const boolg9Q3zSP = await GFCqrKJLjp.transfer.call(addressiOopbAI, uintb655gjf, {from: accounts[4]});
		const boolIFVGBBn = await GFCqrKJLjp.approveAndCall.call(addressfuAN0Wo, uintHHk0B0G, bytexsQmsRx, {from: accounts[3]});
	});

	it('test for GFC', async () => {
		const uintbRKFxsz = BigInt("926")
		const stringgdGKLUN = "SCqzPxYidYTviKcrr"
		const stringFMaTAGB = "4CzuqAqpjdSMSI2aiukocARwsVzSTH5ngF5LxcgX1PAmklfLY4MVJbd9SkCZ6Bv0Dpoe2RwgzRWyuldhhB"
		const GFCGvE3Zoy = await GFC.new(uintbRKFxsz, stringgdGKLUN, stringFMaTAGB, {from: accounts[1]});
		const uintfmWa3ja = BigInt("11")
		const byteABq1kyj = "0x121f021a1518051806101008"
		const uintTz7iW4r = BigInt("186")
		const addressJz33QO6 = accounts[0]
		const boolMHFrtfy = await GFCGvE3Zoy.burn.call(uintfmWa3ja, {from: accounts[4]});
		const boolEbZXKti = await GFCGvE3Zoy.approveAndCall.call(addressJz33QO6, uintTz7iW4r, byteABq1kyj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCGvE3Zoy.burn.call(uintfmWa3ja, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})