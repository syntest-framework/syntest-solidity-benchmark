const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintAng3xPY = BigInt("1062")
		const stringRaKz0P7 = "YjVDJOiSqTIzlA2q1cVFx48MqJiX5T6B3hEzDeq7TjtGwEalBiY"
		const stringnknp0XJ = "xh8lPnziJQntnDX"
		const MARVELCOINolzV45f = await MARVELCOIN.new(uintAng3xPY, stringRaKz0P7, stringnknp0XJ, {from: accounts[4]});
		const uintZR1IoBE = BigInt("1000")
		const addressLhD8U1F = accounts[0]
		const byteysKTpNM = "0x1c180a03121715181918120e13"
		const uintoXwb2w = BigInt("1318")
		const address3PyeWw = accounts[2]
		const uintMoREqkL = BigInt("1722")
		const addressnRFu5OI = accounts[3]
		const byteUsd9ffu = "0x18140805010b1f1c1b1619011b080d09011f10"
		const uintwarEOs9 = BigInt("1852")
		const addressagQPoXz = accounts[2]
		const boolKFQLHQD = await MARVELCOINolzV45f.approve.call(addressLhD8U1F, uintZR1IoBE, {from: accounts[4]});
//		const boolzApPkh4 = await MARVELCOINolzV45f.approveAndCall.call(address3PyeWw, uintoXwb2w, byteysKTpNM, {from: accounts[4]});
//		const boolgGHhj14 = await MARVELCOINolzV45f.transfer.call(addressnRFu5OI, uintMoREqkL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolWwzUmik = await MARVELCOINolzV45f.approveAndCall.call(addressagQPoXz, uintwarEOs9, byteUsd9ffu, {from: accounts[2]});

		assert.equal(boolKFQLHQD, true)
		await expect(MARVELCOINolzV45f.approveAndCall.call(address3PyeWw, uintoXwb2w, byteysKTpNM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintSQxQHGv = BigInt("1570")
		const stringcF8NYNB = "15SAUqw8RAUKRY9cHLjgOxPyQPr"
		const stringMM5yD5w = "GH85Vd3bp3t2F3Eb8Bup5javYVnOJBC"
		const MARVELCOINjJDi5HG = await MARVELCOIN.new(uintSQxQHGv, stringcF8NYNB, stringMM5yD5w, {from: accounts[1]});
		const uint4pkdl9 = BigInt("1957")
		const addressPZUZlM2 = accounts[1]
		const addressKYCbg22 = accounts[1]
		const uintuH4Y0gO = BigInt("1329")
		const addressuuYAD1F = accounts[5]
		const uintggYt5Ys = BigInt("54")
		const addressQoIf83B = accounts[1]
		const addressUUWUUgi = accounts[3]
		const uintiApYsRb = BigInt("1668")
		const addresskCmvCDp = accounts[4]
//		const booltPwjRsE = await MARVELCOINjJDi5HG.transferFrom.call(addressKYCbg22, addressPZUZlM2, uint4pkdl9, {from: accounts[1]});
//		const boolYUnsyEG = await MARVELCOINjJDi5HG.approve.call(addressuuYAD1F, uintuH4Y0gO, {from: accounts[4]});
//		const boolHSZgr9 = await MARVELCOINjJDi5HG.transferFrom.call(addressUUWUUgi, addressQoIf83B, uintggYt5Ys, {from: accounts[5]});
//		const boolcLkAujq = await MARVELCOINjJDi5HG.burnFrom.call(addresskCmvCDp, uintiApYsRb, {from: accounts[2]});

		await expect(MARVELCOINjJDi5HG.transferFrom.call(addressKYCbg22, addressPZUZlM2, uint4pkdl9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintPSuF85 = BigInt("821")
		const stringX1VbDar = "VhrVUFzNQU8yG1ZaMlTBaOazYnK7rZTLl9ofriE2tvLiHgkINUuqRtePKVjczxRRapdj11A"
		const stringOfqdOjI = "7wbVl9UYNUjaSxR2hwnbi7tBwq5im5Fx74aERDivt3pIvu8X5YXWPcSwrzJRwJwWjmuYB0VfLbi5Ntwu"
		const MARVELCOINiFqNLd2 = await MARVELCOIN.new(uintPSuF85, stringX1VbDar, stringOfqdOjI, {from: "0x0000000000000000000000000000000000000001"});
		const uintDocgzmU = BigInt("168")
		const addresslkHCry2 = accounts[3]
		const bytenl2cPwl = "0x0b130808"
		const uintp9jvtF9 = BigInt("688")
		const addressJCY0lJl = accounts[1]
		const boolrmKRBg0 = await MARVELCOINiFqNLd2.approve.call(addresslkHCry2, uintDocgzmU, {from: accounts[4]});
		const boolYiA15gS = await MARVELCOINiFqNLd2.approveAndCall.call(addressJCY0lJl, uintp9jvtF9, bytenl2cPwl, {from: accounts[3]});
	});

	it('test for MARVELCOIN', async () => {
		const uintZz9jQfD = BigInt("1303")
		const stringWgak5Ak = "S2XxfluPM3gs4LHxIw1T75H4"
		const stringOmCxoCa = "ogMywQWPJL0V9YlVZ63PblVXGtkrJmFrTKEkI4VxaQHNTLP4LeOClSdWS3Z"
		const MARVELCOINrHf6J3g = await MARVELCOIN.new(uintZz9jQfD, stringWgak5Ak, stringOmCxoCa, {from: accounts[1]});
		const uintbEAsPdJ = BigInt("38")
		const addressmW7m3fZ = accounts[3]
		const uintvkVTEeo = BigInt("462")
		const uintSF2mzq5 = BigInt("169")
		const addressQFdIERe = accounts[1]
		const bool6cfTux = await MARVELCOINrHf6J3g.approve.call(addressmW7m3fZ, uintbEAsPdJ, {from: accounts[4]});
//		const boola5jeoQQ = await MARVELCOINrHf6J3g.burn.call(uintvkVTEeo, {from: accounts[4]});
//		const boolsl70Qxo = await MARVELCOINrHf6J3g.approve.call(addressQFdIERe, uintSF2mzq5, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool6cfTux, true)
		await expect(MARVELCOINrHf6J3g.burn.call(uintvkVTEeo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintGxYYgad = BigInt("1303")
		const stringWgak5Ak = "S2XxfluPM3gs4LHxIw1T75H4"
		const stringOmCxoCa = "ogMywQWPJL0V9YlVZ63PblVXGtkrJmFrTKEkI4VxaQHNTLP4LeOClSdWS3Z"
		const MARVELCOINrHf6J3g = await MARVELCOIN.new(uintGxYYgad, stringWgak5Ak, stringOmCxoCa, {from: accounts[1]});
		const uintTXkOPmj = BigInt("38")
		const addressmGjTe3z = accounts[4]
		const uintG0TzB1U = BigInt("377")
		const addressdWkFbo5 = accounts[1]
		const uintZUVY4Wg = BigInt("462")
		const bool6cfTux = await MARVELCOINrHf6J3g.approve.call(addressmGjTe3z, uintTXkOPmj, {from: accounts[4]});
//		const boolB7oVb8w = await MARVELCOINrHf6J3g.transfer.call(addressdWkFbo5, uintG0TzB1U, {from: accounts[2]});
//		const boola5jeoQQ = await MARVELCOINrHf6J3g.burn.call(uintZUVY4Wg, {from: accounts[4]});

		assert.equal(bool6cfTux, true)
		await expect(MARVELCOINrHf6J3g.transfer.call(addressdWkFbo5, uintG0TzB1U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintByXwsEB = BigInt("1028")
		const stringeRzsha = "1mtIBUYMkAVdKkjiUnYgFkMwsjsQ6Nv5lpcnhkFSf1meCPo6AAxBLcWm5zIm2UNfR9TxTRH47CEgxcUI4dD5YQ4e50cV9Ft"
		const stringAyL0vKn = "PNC39saUdHzeQKAEQeQXlcXmDtVhd88m954VYdGXFHDhz"
		const MARVELCOINvKywCWy = await MARVELCOIN.new(uintByXwsEB, stringeRzsha, stringAyL0vKn, {from: accounts[4]});
		const uint336KyV = BigInt("995")
		const addressrXMMwJR = accounts[5]
		const byteRqeGM7D = "0x00071e0c0f09151415"
		const uintMNB6v9E = BigInt("1880")
		const addressVpk82Mj = accounts[2]
//		const boolYmr1gsX = await MARVELCOINvKywCWy.burnFrom.call(addressrXMMwJR, uint336KyV, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAYiB7l = await MARVELCOINvKywCWy.approveAndCall.call(addressVpk82Mj, uintMNB6v9E, byteRqeGM7D, {from: accounts[0]});

		await expect(MARVELCOINvKywCWy.burnFrom.call(addressrXMMwJR, uint336KyV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintqYxkOi6 = BigInt("829")
		const stringzls5QB = "1IWhcmpkW34JzuioomHIgIANNNvZy2laLKwFbMhhHluMPiHQUEk51QqqkmYmU63H0NmS3yj1"
		const stringJDH7zp = "1DX1JRNdREuvzDtcmkfKZ8hC13qdUMw5Dney8EK8f69VDjRi00vTiE7NysmU"
		const MARVELCOINJLylajC = await MARVELCOIN.new(uintqYxkOi6, stringzls5QB, stringJDH7zp, {from: accounts[1]});
		const uintPVnvUez = BigInt("1990")
		const addressTzwzfMm = accounts[2]
		const uintkYN8QoM = BigInt("1180")
		const addressFOvdDDt = accounts[2]
		const boolrRwuC3S = await MARVELCOINJLylajC.transfer.call(addressTzwzfMm, uintPVnvUez, {from: accounts[1]});
		const boolEzR7ebJ = await MARVELCOINJLylajC.approve.call(addressFOvdDDt, uintkYN8QoM, {from: accounts[4]});

		assert.equal(boolEzR7ebJ, true)
		assert.equal(boolrRwuC3S, true)
	});

	it('test for MARVELCOIN', async () => {
		const uintFOQRPho = BigInt("1303")
		const stringWgak5Ak = "S2XxfluPM3gs4LHxIw1T75H4"
		const stringOmCxoCa = "ogMywQWPJL0V9YlVZ63PblVXGtkrJmFrTKEkI4VxaQHNTLP4LeOClSdWS3Z"
		const MARVELCOINrHf6J3g = await MARVELCOIN.new(uintFOQRPho, stringWgak5Ak, stringOmCxoCa, {from: accounts[1]});
		const uintZM9Gqen = BigInt("258")
		const uintcsOSm2l = BigInt("484")
		const booln2lBvrx = await MARVELCOINrHf6J3g.burn.call(uintZM9Gqen, {from: accounts[1]});
//		const boola5jeoQQ = await MARVELCOINrHf6J3g.burn.call(uintcsOSm2l, {from: accounts[4]});

		assert.equal(booln2lBvrx, true)
		await expect(MARVELCOINrHf6J3g.burn.call(uintcsOSm2l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintwaQSLCa = BigInt("1028")
		const stringeRzsha = "1mtIBUYMkAVdKkjiUnYgFkMwsjsQ6Nv5lpcnhkFSf1meCPo6AAxBLcWm5zIm2UNfR9TxTRH47CEgxcUI4dD5YQ4e50cV9Ft"
		const stringAyL0vKn = "PNC39saUdHzeQKAEQeQXlcXmDtVhd88m954VYdGXFHDhz"
		const MARVELCOINvKywCWy = await MARVELCOIN.new(uintwaQSLCa, stringeRzsha, stringAyL0vKn, {from: accounts[4]});
		const uintHHxovaq = BigInt("1110")
		const addressUNyWf1z = accounts[4]
		const bytezb1q5LQ = "0x121a041a"
		const uintjT1PYG = BigInt("1925")
		const addressirW4A2 = "0x0000000000000000000000000000000000000001"
//		const boolOmdvy48 = await MARVELCOINvKywCWy.burnFrom.call(addressUNyWf1z, uintHHxovaq, {from: accounts[0]});
//		const boolcwhFNPC = await MARVELCOINvKywCWy.approveAndCall.call(addressirW4A2, uintjT1PYG, bytezb1q5LQ, {from: accounts[2]});

		await expect(MARVELCOINvKywCWy.burnFrom.call(addressUNyWf1z, uintHHxovaq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})