const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringGRTUJ9 = "YdHkYYK0HAEmB2gLF0LtGqrTYhpJ8BpcQXoVpvHIua4hT7l52YmRc1BtPKQQyq2WxvmkHaRDApLb6S3bqNZoKy"
		const stringf5e4eW1 = "Qaiuu6dckko63ODGuAs8tNrx6yuLwGlfnGJIYRyOwJbhldIPjFEWjFUnrYvzLhU423WsneFFgaagVV"
		const uintrdMDYDf = BigInt("249")
		const OnXFinancejYil71J = await OnXFinance.new(stringGRTUJ9, stringf5e4eW1, uintrdMDYDf, {from: accounts[2]});
		const uintJwl7AuW = BigInt("600")
		const addressKw9zB64 = accounts[1]
		const addressIOsuxSn = accounts[5]
		const uint8kvjNPMo = await OnXFinancejYil71J.decimals.call({from: accounts[2]});
		const stringlwY84se = await OnXFinancejYil71J.name.call({from: accounts[5]});
//		const boolLZfXWbr = await OnXFinancejYil71J.transferFrom.call(addressIOsuxSn, addressKw9zB64, uintJwl7AuW, {from: accounts[1]});

		assert.equal(stringlwY84se, "YdHkYYK0HAEmB2gLF0LtGqrTYhpJ8BpcQXoVpvHIua4hT7l52YmRc1BtPKQQyq2WxvmkHaRDApLb6S3bqNZoKy")
		assert.equal(uint8kvjNPMo, BigInt("18"))
		await expect(OnXFinancejYil71J.transferFrom.call(addressIOsuxSn, addressKw9zB64, uintJwl7AuW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringpBv8co4 = "as1bC3jER3IAkAYolALvl8n2UtzFZ28ElhDEG"
		const stringQAWixer = "tyeRB6n1KQywaOeq6VeIkvLpxag6gwouC7IHYC"
		const uintalXBuhu = BigInt("127")
		const OnXFinanceQzJdYDE = await OnXFinance.new(stringpBv8co4, stringQAWixer, uintalXBuhu, {from: accounts[2]});
		const uintHu8gHMJ = BigInt("1166")
		const addressP4tEDJ = accounts[2]
		const uintZjzc1Nc = BigInt("634")
		const addresssRjAd6s = accounts[4]
		const boolIP3NI2 = await OnXFinanceQzJdYDE.approve.call(addressP4tEDJ, uintHu8gHMJ, {from: accounts[2]});
		const uint8vbSvEW = await OnXFinanceQzJdYDE.decimals.call({from: accounts[1]});
		const boolkIDIyRk = await OnXFinanceQzJdYDE.approve.call(addresssRjAd6s, uintZjzc1Nc, {from: accounts[2]});

		assert.equal(boolIP3NI2, true)
		assert.equal(boolkIDIyRk, true)
		assert.equal(uint8vbSvEW, BigInt("18"))
	});

	it('test for OnXFinance', async () => {
		const stringqrV5vmN = "Pi2iHX65JymOPmWP5ykuw2OJVd2qQ4qZpdAzOAvtprcU9drJo9TncVeKc"
		const stringnudeSgz = "f3PSFQwlH6331YqOGTyt9nj6Dl4gRmT1PMnksCeGExFDqoffWMjqH5cw9HFb2gFFnhIc5XdI3aJ6qXVosZMYffah1tnXdpuSue"
		const uintFCt1y0k = BigInt("191")
		const OnXFinanceU18Hr7l = await OnXFinance.new(stringqrV5vmN, stringnudeSgz, uintFCt1y0k, {from: "0x0000000000000000000000000000000000000001"});
		const uintbQgdzSm = BigInt("348")
		const addressP44P7GB = accounts[3]
		const uintLv7V0qo = BigInt("1602")
		const addresszfvd9dK = accounts[2]
		const addressdOGimbj = accounts[1]
		const uintmcW1m9m = BigInt("1771")
		const addressVxSusaA = accounts[2]
		const uintemLwUL = BigInt("1500")
		const addressR5yt1fR = accounts[1]
		const addressY7u6vU4 = accounts[3]
		const uintDTgSzr = BigInt("1897")
		const addressyVc4Kzx = accounts[0]
		const uintSDmLVti = BigInt("627")
		const addressAiscbUu = accounts[0]
		const addressOsURUkY = accounts[3]
		const boolhZcuqUw = await OnXFinanceU18Hr7l.transfer.call(addressP44P7GB, uintbQgdzSm, {from: accounts[3]});
		const booldj1TxPY = await OnXFinanceU18Hr7l.transferFrom.call(addressdOGimbj, addresszfvd9dK, uintLv7V0qo, {from: accounts[0]});
		const boolXHcXll = await OnXFinanceU18Hr7l.approve.call(addressVxSusaA, uintmcW1m9m, {from: accounts[1]});
		const boolp63bHYK = await OnXFinanceU18Hr7l.transferFrom.call(addressY7u6vU4, addressR5yt1fR, uintemLwUL, {from: "0x0000000000000000000000000000000000000001"});
		const boolKUyjeLD = await OnXFinanceU18Hr7l.approve.call(addressyVc4Kzx, uintDTgSzr, {from: accounts[2]});
		const boolNTHATLW = await OnXFinanceU18Hr7l.transferFrom.call(addressOsURUkY, addressAiscbUu, uintSDmLVti, {from: accounts[3]});
	});

	it('test for OnXFinance', async () => {
		const stringxpnocvo = "3x1znSKKeBGKjmrHYrUWO4MRNuEN2EwnFr9KOOIYgbSw5qz3r4BUiRw1najwqnLbwEoT19C8VJsGs7hfrIlX6"
		const stringAjlLy76 = "kaEHJcs39XdFvIKa4A8vH"
		const uintPlzjFRn = BigInt("114")
		const OnXFinanceXnpDp22 = await OnXFinance.new(stringxpnocvo, stringAjlLy76, uintPlzjFRn, {from: accounts[4]});
		const uintjhVG6cr = BigInt("1262")
		const addressQeFlhdA = accounts[2]
		const uintkHgxZiK = BigInt("504")
		const addressQRGgK4C = accounts[2]
		const addressF7skUpE = "0x0000000000000000000000000000000000000001"
		const uintNCcRUWI = await OnXFinanceXnpDp22.totalSupply.call({from: accounts[0]});
		const stringDpb6nmk = await OnXFinanceXnpDp22.symbol.call({from: accounts[1]});
//		const boolfnUidJZ = await OnXFinanceXnpDp22.transfer.call(addressQeFlhdA, uintjhVG6cr, {from: accounts[3]});
//		const boolOr2ooX = await OnXFinanceXnpDp22.transferFrom.call(addressF7skUpE, addressQRGgK4C, uintkHgxZiK, {from: accounts[0]});

		assert.equal(stringDpb6nmk, "kaEHJcs39XdFvIKa4A8vH")
		assert.equal(uintNCcRUWI, BigInt("114000000000000000000"))
		await expect(OnXFinanceXnpDp22.transfer.call(addressQeFlhdA, uintjhVG6cr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringNpynwpT = "74bn8AO5d1qIscMfPs6qPMwwP3LNGis6cYsvIm3Cf99NsHV6Ae4H2C38LAhDUP64o"
		const stringnaNk2Gc = "1YkcqoX5CE6bObfuPmWkLrrAYeesN2aQi0RaJWLkssW5rccP9DdiQ2ENUM4oqth2bAo3Gcnf"
		const uintquRBz71 = BigInt("371")
		const OnXFinancexnZXpFM = await OnXFinance.new(stringNpynwpT, stringnaNk2Gc, uintquRBz71, {from: accounts[2]});
		const uintwZAw8NX = BigInt("297")
		const addressgZB83s = accounts[2]
		const uintOTcwzqs = BigInt("471")
		const addressiMOiwxo = accounts[0]
		const boolxcpEARj = await OnXFinancexnZXpFM.approve.call(addressgZB83s, uintwZAw8NX, {from: accounts[2]});
//		const boolCXHYyvb = await OnXFinancexnZXpFM.approveAndCall.call(addressiMOiwxo, uintOTcwzqs, {from: accounts[3]});
//		const stringROTqL43 = await OnXFinancexnZXpFM.name.call({from: accounts[3]});

		assert.equal(boolxcpEARj, true)
		await expect(OnXFinancexnZXpFM.approveAndCall.call(addressiMOiwxo, uintOTcwzqs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringNpynwpT = "74bn8AO5d1qIscMfPs6qPMwwP3LNGis6cYsvIm3Cf99NsHV6Ae4H2C38LAhDUP64o"
		const stringnaNk2Gc = "1YkcqoX5CE6bObfuPmWkLrrAYeesN2aQi0RaJWLkssW5rccP9DdiQ2ENUM4oqth2bAo3Gcnf"
		const uint1BDdFw = BigInt("371")
		const OnXFinancexnZXpFM = await OnXFinance.new(stringNpynwpT, stringnaNk2Gc, uint1BDdFw, {from: accounts[2]});
		const uintk050GzV = BigInt("1262")
		const addressZm45adU = accounts[0]
		const uintPOA9Znh = BigInt("736")
		const addressp61O8lL = accounts[5]
		const uinth7q2Bh5 = BigInt("297")
		const addressEt4lfik = accounts[2]
//		const boolp5Y6XQ = await OnXFinancexnZXpFM.increaseAllowance.call(addressZm45adU, uintk050GzV, {from: accounts[3]});
//		const boolpFKDFsM = await OnXFinancexnZXpFM.decreaseAllowance.call(addressp61O8lL, uintPOA9Znh, {from: accounts[1]});
//		const boolxcpEARj = await OnXFinancexnZXpFM.approve.call(addressEt4lfik, uinth7q2Bh5, {from: accounts[2]});
//		const stringROTqL43 = await OnXFinancexnZXpFM.name.call({from: accounts[3]});

		await expect(OnXFinancexnZXpFM.increaseAllowance.call(addressZm45adU, uintk050GzV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringNpynwpT = "74bn8AO5d1qIscMfPs6qPMwwP3LNGis6cYsvIm3Cf99NsHV6Ae4H2C38LAhDUP64o"
		const stringnaNk2Gc = "1YkcqoX5CE6bObfuPmWkLrrAYeesN2aQi0RaJWLkssW5rccP9DdiQ2ENUM4oqth2bAo3Gcnf"
		const uintGvBI2v = BigInt("371")
		const OnXFinancexnZXpFM = await OnXFinance.new(stringNpynwpT, stringnaNk2Gc, uintGvBI2v, {from: accounts[2]});
		const uintasIFo10 = BigInt("1361")
		const addressWc45WRB = accounts[0]
		const uintBjxGSKI = BigInt("297")
		const addressEvC6Qs0 = accounts[3]
		const boolRh2kleH = await OnXFinancexnZXpFM.transfer.call(addressWc45WRB, uintasIFo10, {from: accounts[2]});
		const boolxcpEARj = await OnXFinancexnZXpFM.approve.call(addressEvC6Qs0, uintBjxGSKI, {from: accounts[2]});

		assert.equal(boolRh2kleH, true)
		assert.equal(boolxcpEARj, true)
	});

	it('test for OnXFinance', async () => {
		const stringCzeMGJV = "uJhDeR11sf"
		const stringll8BBSu = "4bE1wGjR9pZqLQRXvQGFes38GDLlsSy7Az8l5uH8UxuO60Lao3kXWcYMsfqhhdtxlwVr5Rwal5bWazTniIK59jCm"
		const uintxDYQDES = BigInt("124")
		const OnXFinanceopHKyzJ = await OnXFinance.new(stringCzeMGJV, stringll8BBSu, uintxDYQDES, {from: accounts[4]});
		const addressYV0IxFt = accounts[2]
		const uintTu6kC85 = BigInt("538")
		const addressV8DxbrI = accounts[4]
//		const boolFMeYoHg = await OnXFinanceopHKyzJ.transferownership.call(addressYV0IxFt, {from: accounts[0]});
//		const boolxp9tAH = await OnXFinanceopHKyzJ.approveAndCall.call(addressV8DxbrI, uintTu6kC85, {from: accounts[4]});

		await expect(OnXFinanceopHKyzJ.transferownership.call(addressYV0IxFt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringbVyxSAA = "4bqXPmrdPBczkkf6DnbI4qydN0D20YdPsaUwy"
		const stringZ2aTVLe = "tChsxuKWLPgpLbDC5QCOdN1g8dWkuP1Ln5O8zOH5"
		const uintqykLVBg = BigInt("43")
		const OnXFinanceC8tv7Fr = await OnXFinance.new(stringbVyxSAA, stringZ2aTVLe, uintqykLVBg, {from: accounts[0]});
		const uintuw2CrCx = BigInt("41")
		const addressj8iQtSE = accounts[2]
		const uintyv0GUL1 = BigInt("1884")
		const addressO3NJjiD = accounts[2]
		const uintaTRHP4 = BigInt("1682")
		const address3oYYvJ = accounts[2]
		const addressNpkaJgO = accounts[3]
		const uintjnpoZVx = BigInt("1332")
		const addressQiBVnda = accounts[2]
		const uinthcecjCT = BigInt("893")
		const addressdjvFIJ = accounts[0]
		const addressH2LSgeN = accounts[2]
		const boolLJfD8KJ = await OnXFinanceC8tv7Fr.transfer.call(addressj8iQtSE, uintuw2CrCx, {from: accounts[0]});
		const boolZLvsjS = await OnXFinanceC8tv7Fr.approveAndCall.call(addressO3NJjiD, uintyv0GUL1, {from: accounts[0]});
		const boolRmmxmi3 = await OnXFinanceC8tv7Fr.approve.call(address3oYYvJ, uintaTRHP4, {from: accounts[3]});
		const uintbmhMUn1 = await OnXFinanceC8tv7Fr.balanceOf.call(addressNpkaJgO, {from: accounts[5]});
		const booluoQeJU4 = await OnXFinanceC8tv7Fr.approve.call(addressQiBVnda, uintjnpoZVx, {from: accounts[1]});
//		const boolwoleYf4 = await OnXFinanceC8tv7Fr.transferFrom.call(addressH2LSgeN, addressdjvFIJ, uinthcecjCT, {from: accounts[3]});

		assert.equal(boolLJfD8KJ, true)
		assert.equal(boolRmmxmi3, true)
		assert.equal(boolZLvsjS, true)
		assert.equal(booluoQeJU4, true)
		assert.equal(uintbmhMUn1, BigInt("0"))
		await expect(OnXFinanceC8tv7Fr.transferFrom.call(addressH2LSgeN, addressdjvFIJ, uinthcecjCT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringbVyxSAA = "4bqXPmrdPBczkkf6DnbI4qydN0D20YdPsaUwy"
		const stringZ2aTVLe = "tChsxuKWLPgpLbDC5QCOdN1g8dWkuP1Ln5O8zOH5"
		const uintm5P9rqc = BigInt("43")
		const OnXFinanceC8tv7Fr = await OnXFinance.new(stringbVyxSAA, stringZ2aTVLe, uintm5P9rqc, {from: accounts[0]});
		const uintletsPtE = BigInt("1696")
		const addresskfw95wA = accounts[2]
		const uintYET0GLp = BigInt("0")
		const addressfOnjZz = accounts[3]
		const uintCy00qOl = BigInt("1313")
		const addressMQQ25Bc = accounts[2]
		const boolNq0Meae = await OnXFinanceC8tv7Fr.approveAndCall.call(addresskfw95wA, uintletsPtE, {from: accounts[0]});
		const boolLJfD8KJ = await OnXFinanceC8tv7Fr.transfer.call(addressfOnjZz, uintYET0GLp, {from: accounts[0]});
		const booluoQeJU4 = await OnXFinanceC8tv7Fr.approve.call(addressMQQ25Bc, uintCy00qOl, {from: accounts[1]});

		assert.equal(boolLJfD8KJ, true)
		assert.equal(boolNq0Meae, true)
		assert.equal(booluoQeJU4, true)
	});
})