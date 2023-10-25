const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPt6oT5KD = await LUP.new({from: accounts[4]});
		const uinth7051b7 = BigInt("875")
		const uintef57gwK = BigInt("456")
		const addressHGR4jKo = accounts[1]
		const uintFn3F3Z3 = BigInt("1388")
		const uintlSe7eW = BigInt("984")
		const addressLKj5OjM = accounts[1]
		const uintQnn6MQG = BigInt("1443")
		const addressF7GZmiR = accounts[4]
		const uintryeQfmJ = BigInt("423")
		const uintqSuk1T9 = BigInt("1912")
		const addressfUdvaDB = accounts[1]
		const boolSFLX83o = await LUPt6oT5KD.lock.call(addressHGR4jKo, uintef57gwK, uinth7051b7, {from: accounts[2]});
		const stringanhzmhr = await LUPt6oT5KD.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolHdVzu58 = await LUPt6oT5KD.lock.call(addressLKj5OjM, uintlSe7eW, uintFn3F3Z3, {from: accounts[5]});
		const boolJ8IZmti = await LUPt6oT5KD.unlock.call(addressF7GZmiR, uintQnn6MQG, {from: accounts[2]});
		const uint8f6XESPj = await LUPt6oT5KD.decimals.call({from: accounts[1]});
		const boolN0yluK5 = await LUPt6oT5KD.lock.call(addressfUdvaDB, uintqSuk1T9, uintryeQfmJ, {from: accounts[5]});

		await expect(LUPt6oT5KD.lock.call(addressHGR4jKo, uintef57gwK, uinth7051b7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsRMw59B = await LUP.new({from: accounts[1]});
		const uintkKKBUFr = BigInt("748")
		const addressiLTNw7L = accounts[4]
		const addressE63pVtq = "0x0000000000000000000000000000000000000001"
		const boolgVrPQXH = await LUPsRMw59B.transfer.call(addressiLTNw7L, uintkKKBUFr, {from: accounts[1]});
		const addressoeNa0UD = await LUPsRMw59B.upgradeTo.call(addressE63pVtq, {from: accounts[4]});

		assert.equal(boolgVrPQXH, true)
		await expect(LUPsRMw59B.upgradeTo.call(addressE63pVtq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPfNJEnxS = await LUP.new({from: accounts[4]});
		const uintjdHEAEG = BigInt("287")
		const addressESIe6Bw = "0x0000000000000000000000000000000000000001"
		const uintP04dsWX = BigInt("980")
		const uintBvVJHAC = BigInt("442")
		const addressaDRkCHW = accounts[0]
		const uintjsapLn = BigInt("1054")
		const uintamEiLW = BigInt("73")
		const addressLXMnMFG = accounts[1]
		const stringbID1qz1 = await LUPfNJEnxS.symbol.call({from: accounts[5]});
		const boolLYmkRxz = await LUPfNJEnxS.transfer.call(addressESIe6Bw, uintjdHEAEG, {from: accounts[4]});
		const boolHv2sLYQ = await LUPfNJEnxS.transferWithLock.call(addressaDRkCHW, uintBvVJHAC, uintP04dsWX, {from: accounts[1]});
		const boolA8asaoF = await LUPfNJEnxS.lock.call(addressLXMnMFG, uintamEiLW, uintjsapLn, {from: accounts[3]});
		const uint8dKrYPKB = await LUPfNJEnxS.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLYmkRxz, true)
		assert.equal(stringbID1qz1, "LUP")
		await expect(LUPfNJEnxS.transferWithLock.call(addressaDRkCHW, uintBvVJHAC, uintP04dsWX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPyHpX2Zo = await LUP.new({from: accounts[4]});
		const uintirCmXtc = BigInt("1710")
		const addressqGTRCAp = accounts[5]
		const uintiGA8v7p = BigInt("2014")
		const addressf0SNaiS = accounts[1]
		const boolmFvfNl = await LUPyHpX2Zo.transfer.call(addressqGTRCAp, uintirCmXtc, {from: accounts[1]});
		const boolRiLiOYg = await LUPyHpX2Zo.transfer.call(addressf0SNaiS, uintiGA8v7p, {from: accounts[0]});

		await expect(LUPyHpX2Zo.transfer.call(addressqGTRCAp, uintirCmXtc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPJZ4LlGr = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintoUxGCzj = BigInt("2038")
		const addressffu17on = "0x0000000000000000000000000000000000000001"
		const stringhltX8sR = await LUPJZ4LlGr.symbol.call({from: accounts[2]});
		const uint8BSzvwtc = await LUPJZ4LlGr.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolyNQXfGa = await LUPJZ4LlGr.transfer.call(addressffu17on, uintoUxGCzj, {from: accounts[4]});
	});

	it('test for LUP', async () => {
		const stringx0qZAr1 = "60GDucFtjSIhwCOdXAb4O037vToOFILnlrbXG7I5pK6oCsnkgK6jss6I6Xjyn82GOP1ckhAG"
		const stringilU9FJo = "JhpFpI7xFixPr7tWq2gAjFlyiCxYG9y1yXuaw3lKvsOtGn"
		const uintZ51ZX0 = BigInt("34")
		const LUPCCMd5qT = await LUP.new(stringx0qZAr1, stringilU9FJo, uintZ51ZX0, {from: accounts[0]});
		const uintjscM9A = BigInt("33")
		const addressn7Db7ZN = accounts[1]
		const boolabeRAcS = true
		const addressJ7flcTx = accounts[3]
		const boolLX1f6YN = await LUPCCMd5qT.unlock.call(addressn7Db7ZN, uintjscM9A, {from: accounts[3]});
		const boolb1RnmYw = await LUPCCMd5qT.freezeAccount.call(addressJ7flcTx, boolabeRAcS, {from: accounts[1]});
	});

	it('test for LUP', async () => {
		const LUPsRMw59B = await LUP.new({from: accounts[1]});
		const addresskpwYWE5 = accounts[5]
		const uintCrKmKV8 = BigInt("715")
		const addressGTPc8lR = accounts[4]
		const addressMBiyLz = "0x0000000000000000000000000000000000000001"
		const uint256qpxnWki = await LUPsRMw59B.balanceOf.call(addresskpwYWE5, {from: accounts[3]});
		const boolgVrPQXH = await LUPsRMw59B.transfer.call(addressGTPc8lR, uintCrKmKV8, {from: accounts[1]});
		const addressoeNa0UD = await LUPsRMw59B.upgradeTo.call(addressMBiyLz, {from: accounts[4]});

		assert.equal(boolgVrPQXH, true)
		assert.equal(uint256qpxnWki, BigInt("0"))
		await expect(LUPsRMw59B.upgradeTo.call(addressMBiyLz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsRMw59B = await LUP.new({from: accounts[1]});
		const uintZh8HMAi = BigInt("748")
		const addressfJcHVWp = accounts[4]
		const addresslgQGxWY = "0x0000000000000000000000000000000000000001"
		const addressbn1VDUh = "0x0000000000000000000000000000000000000001"
		const boolgVrPQXH = await LUPsRMw59B.transfer.call(addressfJcHVWp, uintZh8HMAi, {from: accounts[1]});
		const addressEFcpi42 = await LUPsRMw59B.notFrozen.call(addresslgQGxWY, {from: accounts[2]});
		const addressoeNa0UD = await LUPsRMw59B.upgradeTo.call(addressbn1VDUh, {from: accounts[4]});

		assert.equal(boolgVrPQXH, true)
		await expect(LUPsRMw59B.notFrozen.call(addresslgQGxWY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsRMw59B = await LUP.new({from: accounts[1]});
		const uintgEjylep = BigInt("748")
		const addressaNUgmgL = accounts[4]
		const addressTmo278v = "0x0000000000000000000000000000000000000002"
		const addressxvM2651 = accounts[1]
		const uintZ38jR5z = BigInt("729")
		const addressZPkm3lJ = "0x0000000000000000000000000000000000000001"
		const boolgVrPQXH = await LUPsRMw59B.transfer.call(addressaNUgmgL, uintgEjylep, {from: accounts[1]});
		const stringdrbDwxp = await LUPsRMw59B.name.call({from: accounts[0]});
		const addressoeNa0UD = await LUPsRMw59B.upgradeTo.call(addressTmo278v, {from: accounts[4]});
		const addresscXg2sZk = await LUPsRMw59B.notFrozen.call(addressxvM2651, {from: accounts[2]});
		const boolMg3fyUh = await LUPsRMw59B.unlock.call(addressZPkm3lJ, uintZ38jR5z, {from: accounts[4]});

		assert.equal(boolgVrPQXH, true)
		assert.equal(stringdrbDwxp, "LINKUP Token")
		await expect(LUPsRMw59B.upgradeTo.call(addressTmo278v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsRMw59B = await LUP.new({from: accounts[1]});
		const uintISl62hl = BigInt("1159")
		const uintFPkXyqS = BigInt("1690")
		const addressBqv50tI = accounts[2]
		const uintwjwFnS6 = BigInt("748")
		const addressKsziInc = accounts[4]
		const addressqB6vUta = "0x0000000000000000000000000000000000000003"
		const uintlUTpWl = BigInt("1283")
		const addressWMZo8Xj = accounts[4]
		const boolKsZA9fA = await LUPsRMw59B.transferWithLock.call(addressBqv50tI, uintFPkXyqS, uintISl62hl, {from: accounts[1]});
		const boolgVrPQXH = await LUPsRMw59B.transfer.call(addressKsziInc, uintwjwFnS6, {from: accounts[1]});
		const addressoeNa0UD = await LUPsRMw59B.upgradeTo.call(addressqB6vUta, {from: accounts[4]});
		const boolw6c2UZy = await LUPsRMw59B.unlock.call(addressWMZo8Xj, uintlUTpWl, {from: accounts[0]});

		assert.equal(boolKsZA9fA, true)
		assert.equal(boolgVrPQXH, true)
		await expect(LUPsRMw59B.upgradeTo.call(addressqB6vUta, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsRMw59B = await LUP.new({from: accounts[1]});
		const uintJKGQPLc = BigInt("748")
		const addressScYjVv8 = accounts[5]
		const addressMOErJg8 = accounts[1]
		const boolgVrPQXH = await LUPsRMw59B.transfer.call(addressScYjVv8, uintJKGQPLc, {from: accounts[1]});
		const addressmJ2sY6 = await LUPsRMw59B.upgradeTo.call(addressMOErJg8, {from: accounts[1]});

		assert.equal(boolgVrPQXH, true)
	});

	it('test for LUP', async () => {
		const LUPR0X83wW = await LUP.new({from: accounts[2]});
		const stringRYDjVe1 = await LUPR0X83wW.name.call({from: accounts[0]});
		const uint8ZP6uL1D = await LUPR0X83wW.decimals.call({from: accounts[0]});

		assert.equal(stringRYDjVe1, "LINKUP Token")
		assert.equal(uint8ZP6uL1D, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPsRMw59B = await LUP.new({from: accounts[1]});
		const boolgBWNesR = false
		const addressKIzXKol = accounts[0]
		const addressrTu4R7N = accounts[5]
		const uintJC2rDV = BigInt("729")
		const addressqx3hxqa = accounts[4]
		const addressG7EZUZ = "0x0000000000000000000000000000000000000001"
		const booltuA7Xyh = await LUPsRMw59B.freezeAccount.call(addressKIzXKol, boolgBWNesR, {from: accounts[1]});
		const uint256qpxnWki = await LUPsRMw59B.balanceOf.call(addressrTu4R7N, {from: accounts[3]});
		const boolgVrPQXH = await LUPsRMw59B.transfer.call(addressqx3hxqa, uintJC2rDV, {from: accounts[1]});
		const addressoeNa0UD = await LUPsRMw59B.upgradeTo.call(addressG7EZUZ, {from: accounts[4]});
		const stringxujircb = await LUPsRMw59B.symbol.call({from: accounts[3]});

		assert.equal(boolgVrPQXH, true)
		assert.equal(booltuA7Xyh, true)
		assert.equal(uint256qpxnWki, BigInt("0"))
		await expect(LUPsRMw59B.upgradeTo.call(addressG7EZUZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsRMw59B = await LUP.new({from: accounts[1]});
		const uinteOBaQNu = BigInt("2033")
		const uintzn8nkxG = BigInt("1154")
		const addressvkcSoLO = accounts[4]
		const uintSynDRax = BigInt("748")
		const addressvB1m4C = accounts[5]
		const uintKgkU19D = BigInt("238")
		const addressfNQQgfc = "0x0000000000000000000000000000000000000001"
		const boolIT1EKzX = await LUPsRMw59B.lock.call(addressvkcSoLO, uintzn8nkxG, uinteOBaQNu, {from: accounts[1]});
		const boolgVrPQXH = await LUPsRMw59B.transfer.call(addressvB1m4C, uintSynDRax, {from: accounts[1]});
		const boolTmKiQZ = await LUPsRMw59B.unlock.call(addressfNQQgfc, uintKgkU19D, {from: "0x0000000000000000000000000000000000000001"});
		const stringUfEdv6Q = await LUPsRMw59B.symbol.call({from: accounts[3]});

		await expect(LUPsRMw59B.lock.call(addressvkcSoLO, uintzn8nkxG, uinteOBaQNu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsRMw59B = await LUP.new({from: accounts[1]});
		const uintLoV4oFL = BigInt("720")
		const addressemTl3Oe = accounts[4]
		const uint9S1wEv = BigInt("1299")
		const addressWyxtqha = accounts[4]
		const boolgVrPQXH = await LUPsRMw59B.transfer.call(addressemTl3Oe, uintLoV4oFL, {from: accounts[1]});
		const stringjQEErpE = await LUPsRMw59B.symbol.call({from: accounts[3]});
		const boolfq6zhsw = await LUPsRMw59B.unlock.call(addressWyxtqha, uint9S1wEv, {from: accounts[1]});

		assert.equal(boolgVrPQXH, true)
		assert.equal(stringjQEErpE, "LUP")
		await expect(LUPsRMw59B.unlock.call(addressWyxtqha, uint9S1wEv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})