const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintr8NrT99 = BigInt("1548")
		const stringiloWlBQ = ""
		const stringzw0JSee = "F0LtGqrTYhpJ8BpcQXoVpvHIua4hT7l52YmRc1BtPKQQyq2WxvmkHaRDApLb6S3bqNZoKy16hjl9"
		const MARVELCOINNMUUYG = await MARVELCOIN.new(uintr8NrT99, stringiloWlBQ, stringzw0JSee, {from: "0x0000000000000000000000000000000000000001"});
		const uintLUw9zB6 = BigInt("1862")
		const addressIOsuxSn = accounts[5]
		const uintTMDYDf8 = BigInt("1505")
		const uintvEBC6cX = BigInt("461")
		const addressNb8fjwR = accounts[5]
		const addressqSpo7Tp = accounts[3]
		const uintRiGievg = BigInt("1395")
		const boolJwl7AuW = await MARVELCOINNMUUYG.approve.call(addressIOsuxSn, uintLUw9zB6, {from: accounts[1]});
		const boolOil71Jd = await MARVELCOINNMUUYG.burn.call(uintTMDYDf8, {from: "0x0000000000000000000000000000000000000001"});
		const boolgpPJKQ6 = await MARVELCOINNMUUYG.transferFrom.call(addressqSpo7Tp, addressNb8fjwR, uintvEBC6cX, {from: accounts[5]});
		const boolLPXqus9 = await MARVELCOINNMUUYG.burn.call(uintRiGievg, {from: accounts[4]});
	});

	it('test for MARVELCOIN', async () => {
		const uintjbquvj = BigInt("459")
		const stringJawcQRX = "cEq2GiYIZ4vrHDjSfpeCGJBXW"
		const stringavfVHXC = "s1bC3jER3IAkAYol"
		const MARVELCOINvdjp9BI = await MARVELCOIN.new(uintjbquvj, stringJawcQRX, stringavfVHXC, {from: accounts[3]});
		const uintwFUbp3q = BigInt("231")
		const addressZLkOHBB = accounts[4]
		const addressZHIP3NI = accounts[0]
		const uintMTAvmVK = BigInt("85")
		const addresshIvbSvE = accounts[0]
		const addressQFCGufb = accounts[3]
		const uintP22RjA = BigInt("962")
		const addressVoFWWTH = accounts[2]
		const uintzmaAWix = BigInt("1023")
		const addressWYemHsr = accounts[1]
		const uintbFXBv0i = BigInt("1090")
		const addresse4YdiO2 = accounts[2]
		const boolWLKpBnW = await MARVELCOINvdjp9BI.transferFrom.call(addressZHIP3NI, addressZLkOHBB, uintwFUbp3q, {from: accounts[2]});
		const boolCPjFP4t = await MARVELCOINvdjp9BI.transferFrom.call(addressQFCGufb, addresshIvbSvE, uintMTAvmVK, {from: "0x0000000000000000000000000000000000000001"});
		const boolwsjjzc1 = await MARVELCOINvdjp9BI.transfer.call(addressVoFWWTH, uintP22RjA, {from: accounts[0]});
		const boolhklXBuh = await MARVELCOINvdjp9BI.transfer.call(addressWYemHsr, uintzmaAWix, {from: accounts[4]});
		const boolAzOaG5O = await MARVELCOINvdjp9BI.burnFrom.call(addresse4YdiO2, uintbFXBv0i, {from: accounts[3]});

		await expect(MARVELCOINvdjp9BI.transferFrom.call(addressZHIP3NI, addressZLkOHBB, uintwFUbp3q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uinteOFnde = BigInt("1882")
		const stringtSG2Ffr = "X7D0Ji3OA6UMRudFvoaitkz9FBLPghbCiceeLQ4EBkmypSeVByvOTmqof"
		const stringGzdmTLN = "KmF"
		const MARVELCOINrWpEn8w = await MARVELCOIN.new(uinteOFnde, stringtSG2Ffr, stringGzdmTLN, {from: accounts[5]});
		const uinto3UAAEz = BigInt("1952")
		const uintSR4vZDd = BigInt("79")
		const addressjy44JFg = accounts[1]
		const uintvX4Gc3P = BigInt("2041")
		const addressgvA53j8 = accounts[4]
		const addressDm5h4d = accounts[2]
		const boolLrZ1Pkn = await MARVELCOINrWpEn8w.burn.call(uinto3UAAEz, {from: accounts[3]});
		const boolCpXYr7e = await MARVELCOINrWpEn8w.burnFrom.call(addressjy44JFg, uintSR4vZDd, {from: accounts[1]});
		const booliRdE902 = await MARVELCOINrWpEn8w.transferFrom.call(addressDm5h4d, addressgvA53j8, uintvX4Gc3P, {from: accounts[1]});

		await expect(MARVELCOINrWpEn8w.burn.call(uinto3UAAEz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uinttynYsUR = BigInt("664")
		const stringEW3SJFy = "o6ayIsrkKs4CclJyjok71jbmBIeKl3UBRcYltUbPN34kwiPHVklOzub4qX"
		const stringOnOGimb = "yWKWLkTnrVNJRvh9uCbMkbJPVSr7oa2DVp6KpJRtvNiKIq1MsmRCYBR2n8snABmFJ1oxlcO"
		const MARVELCOINZj9fvd9 = await MARVELCOIN.new(uinttynYsUR, stringEW3SJFy, stringOnOGimb, {from: accounts[2]});
		const uintTAFOTU = BigInt("1396")
		const addressvsS24a5 = accounts[4]
		const uintZRFsKRw = BigInt("1594")
		const addressQKWQly = accounts[1]
		const byteEHAugf8 = "0x0814011815200b0315020c1e1d0c0f070e02190e16130e131f1b0d04"
		const uintAUkIES0 = BigInt("1897")
		const addressBgcI4f5 = accounts[5]
		const uinthZcuqUw = BigInt("1209")
		const addressGgdzSmK = accounts[3]
		const uintdj1TxPY = BigInt("462")
		const boolQDx8xqM = await MARVELCOINZj9fvd9.approve.call(addressvsS24a5, uintTAFOTU, {from: accounts[1]});
		const boolA8Z0uIy = await MARVELCOINZj9fvd9.burnFrom.call(addressQKWQly, uintZRFsKRw, {from: accounts[4]});
		const boolgZZbEAc = await MARVELCOINZj9fvd9.approveAndCall.call(addressBgcI4f5, uintAUkIES0, byteEHAugf8, {from: accounts[3]});
		const boolS7bX6Cv = await MARVELCOINZj9fvd9.transfer.call(addressGgdzSmK, uinthZcuqUw, {from: accounts[2]});
		const boolA5TrwTV = await MARVELCOINZj9fvd9.burn.call(uintdj1TxPY, {from: accounts[3]});

		assert.equal(boolQDx8xqM, true)
		await expect(MARVELCOINZj9fvd9.burnFrom.call(addressQKWQly, uintZRFsKRw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintTOxCXDz = BigInt("1689")
		const stringIQp0sn = "gKkJKmxaNcdD9RWdvIqistUgetiHY1xEYdE5jHyuCjy"
		const stringJgaXvLg = "zMTQ3x1znSKKeBGKjmrHYrUWO4MRNuEN2EwnFr9KOOIYgbSw5qz3r4BUiRw1na"
		const MARVELCOINeX4BJmH = await MARVELCOIN.new(uintTOxCXDz, stringIQp0sn, stringJgaXvLg, {from: accounts[5]});
		const uintwcrmpnU = BigInt("1147")
		const addressXdAthVG = accounts[3]
		const uintPiKPHOr = BigInt("1802")
		const bytepfTDP7s = "0x1a120309140211141502161c1c1d051e0d000710"
		const uintAjlLy76 = BigInt("858")
		const addresslJEkIfs = accounts[3]
		const uintL8G7pno = BigInt("955")
		const boolTJZqNoL = await MARVELCOINeX4BJmH.transfer.call(addressXdAthVG, uintwcrmpnU, {from: accounts[1]});
		const booleoXLnMO = await MARVELCOINeX4BJmH.burn.call(uintPiKPHOr, {from: accounts[3]});
		const boolaUpEfaR = await MARVELCOINeX4BJmH.approveAndCall.call(addresslJEkIfs, uintAjlLy76, bytepfTDP7s, {from: accounts[0]});
		const boolloNTKpr = await MARVELCOINeX4BJmH.burn.call(uintL8G7pno, {from: accounts[3]});

		await expect(MARVELCOINeX4BJmH.transfer.call(addressXdAthVG, uintwcrmpnU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintCL2xTed = BigInt("566")
		const stringHBkBTp2 = "xulmmDnwiCjrjkVWflrj6SIMvwpH9tBs5rEyyYHybpIK8CHecOh7DjKc28zksXI1lC8P5jnwiDMd9Jg"
		const stringVqxgxhE = "AdD7qWw3h0o65ai1MEbtqhWPfWF62dkiEPB7LcJ7HtOG7dYelAtfBsYVmRInouFFEruUi7SEXDhKAJwsy"
		const MARVELCOINAH5UuVQ = await MARVELCOIN.new(uintCL2xTed, stringHBkBTp2, stringVqxgxhE, {from: accounts[4]});
		const uintkzENAa = BigInt("1484")
		const addressC5oGELX = accounts[3]
		const bytecemJLUU = "0x100d091e"
		const uintV8Cxa2d = BigInt("1002")
		const addressh9DwEgp = accounts[0]
		const byteEuyCMuG = "0x1019151e1e04061418"
		const uintt4P0Q0Q = BigInt("64")
		const addressaDKlfZJ = accounts[4]
		const uintNkknHBm = BigInt("690")
		const boolSMwP0cF = await MARVELCOINAH5UuVQ.approve.call(addressC5oGELX, uintkzENAa, {from: accounts[2]});
		const boolo9NnGIp = await MARVELCOINAH5UuVQ.approveAndCall.call(addressh9DwEgp, uintV8Cxa2d, bytecemJLUU, {from: accounts[3]});
		const boolEEUGE5u = await MARVELCOINAH5UuVQ.approveAndCall.call(addressaDKlfZJ, uintt4P0Q0Q, byteEuyCMuG, {from: accounts[3]});
		const boolgxuxpBA = await MARVELCOINAH5UuVQ.burn.call(uintNkknHBm, {from: accounts[3]});

		assert.equal(boolSMwP0cF, true)
		await expect(MARVELCOINAH5UuVQ.approveAndCall.call(addressh9DwEgp, uintV8Cxa2d, bytecemJLUU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintw9SOXHE = BigInt("1412")
		const stringSZCAy8l = "xXNDK4S8UGv9HBtHdGmrCvLhjl5M7FhYUvverkQXg1XxPretc7aTFLnF51"
		const stringGVvnVUE = "LmPS"
		const MARVELCOINMJSgbxB = await MARVELCOIN.new(uintw9SOXHE, stringSZCAy8l, stringGVvnVUE, {from: accounts[3]});
		const uintaMgYO1F = BigInt("730")
		const addresstPGOFzo = accounts[3]
		const uintl9PS1Za = BigInt("7")
		const uint5H71wL = BigInt("590")
		const addressHV4TNGF = accounts[4]
		const addressILWX5WM = accounts[0]
		const uintfgiJH6d = BigInt("136")
		const boolz8c9ZLJ = await MARVELCOINMJSgbxB.burnFrom.call(addresstPGOFzo, uintaMgYO1F, {from: accounts[0]});
		const boolBf30ZNA = await MARVELCOINMJSgbxB.burn.call(uintl9PS1Za, {from: accounts[2]});
		const boolKf88loH = await MARVELCOINMJSgbxB.transferFrom.call(addressILWX5WM, addressHV4TNGF, uint5H71wL, {from: accounts[5]});
		const boolBi7GSkC = await MARVELCOINMJSgbxB.burn.call(uintfgiJH6d, {from: accounts[0]});

		await expect(MARVELCOINMJSgbxB.burnFrom.call(addresstPGOFzo, uintaMgYO1F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintVA7r7le = BigInt("1412")
		const stringSZCAy8l = "xXNDK4S8UGv9HBtHdGmrCvLhjl5M7FhYUvverkQXg1XxPretc7aTFLnF51"
		const stringGVvnVUE = "LmPS"
		const MARVELCOINMJSgbxB = await MARVELCOIN.new(uintVA7r7le, stringSZCAy8l, stringGVvnVUE, {from: accounts[3]});
		const uintxZabQaC = BigInt("920")
		const uintwbHNRUJ = BigInt("668")
		const addressJDzhwr = accounts[5]
		const boolj5pmUI5 = await MARVELCOINMJSgbxB.burn.call(uintxZabQaC, {from: accounts[3]});
		const boolENjRnrB = await MARVELCOINMJSgbxB.approve.call(addressJDzhwr, uintwbHNRUJ, {from: accounts[4]});

		assert.equal(boolENjRnrB, true)
		assert.equal(boolj5pmUI5, true)
	});

	it('test for MARVELCOIN', async () => {
		const uintnhFmDf7 = BigInt("1412")
		const stringSZCAy8l = "xXNDK4S8UGv9HBtHdGmrCvLhjl5M7FhYUvverkQXg1XxPretc7aTFLnF51"
		const stringGVvnVUE = "LmPS"
		const MARVELCOINMJSgbxB = await MARVELCOIN.new(uintnhFmDf7, stringSZCAy8l, stringGVvnVUE, {from: accounts[3]});
		const uintg4voy1 = BigInt("1509")
		const addressRB63Lbx = accounts[5]
		const uintpRUBbm9 = BigInt("1428")
		const addressAKX5Eq = accounts[3]
		const uintPDkjSqq = BigInt("644")
		const addressr3tWS7g = accounts[5]
		const boolmcXWtEn = await MARVELCOINMJSgbxB.transfer.call(addressRB63Lbx, uintg4voy1, {from: accounts[3]});
		const boolLRFbIex = await MARVELCOINMJSgbxB.transfer.call(addressAKX5Eq, uintpRUBbm9, {from: accounts[3]});
		const boolENjRnrB = await MARVELCOINMJSgbxB.approve.call(addressr3tWS7g, uintPDkjSqq, {from: accounts[4]});

		assert.equal(boolENjRnrB, true)
		assert.equal(boolLRFbIex, true)
		assert.equal(boolmcXWtEn, true)
	});
})