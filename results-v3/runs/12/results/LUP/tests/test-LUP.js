const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPpCXce2R = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressidBYEGv = accounts[1]
		const uintrcPxt1P = BigInt("614")
		const uint5uSPu7 = BigInt("1807")
		const addressPv9FQKw = accounts[2]
		const uintDIiRlsp = BigInt("1263")
		const uintY0n3I3J = BigInt("42")
		const addressPBOhav7 = accounts[4]
		const uint256pljev9T = await LUPpCXce2R.balanceOf.call(addressidBYEGv, {from: accounts[2]});
		const boolt6Vtk6v = await LUPpCXce2R.lock.call(addressPv9FQKw, uint5uSPu7, uintrcPxt1P, {from: accounts[3]});
		const boolfsIfSQ0 = await LUPpCXce2R.transferWithLock.call(addressPBOhav7, uintY0n3I3J, uintDIiRlsp, {from: accounts[0]});
	});

	it('test for LUP', async () => {
		const stringERvmRa7 = "Hm68dGFHowJ2rqORWsnQ21JUkMjc"
		const stringgxkPwPw = "hEfbXIfnpJ8hcahgcYtRGXwTT6x"
		const uintNCwv0K = BigInt("85")
		const LUPQx9I4q = await LUP.new(stringERvmRa7, stringgxkPwPw, uintNCwv0K, {from: accounts[2]});
		const boolhPfnYpl = false
		const addresskpZhgmk = accounts[3]
		const uintQJW0CuC = BigInt("747")
		const addressfs9oRWk = accounts[0]
		const uintq7D9rLG = BigInt("1295")
		const addressiG8InAl = accounts[4]
		const boolJWAwdSu = await LUPQx9I4q.freezeAccount.call(addresskpZhgmk, boolhPfnYpl, {from: "0x0000000000000000000000000000000000000001"});
		const boolmWEbujl = await LUPQx9I4q.transfer.call(addressfs9oRWk, uintQJW0CuC, {from: accounts[3]});
		const boolBJUnJ2c = await LUPQx9I4q.transfer.call(addressiG8InAl, uintq7D9rLG, {from: accounts[2]});
	});

	it('test for LUP', async () => {
		const LUPHSm1WI = await LUP.new({from: accounts[2]});
		const uintFxhSX0v = BigInt("661")
		const addresskE7qUTD = accounts[0]
		const addressiPpZJ6 = accounts[3]
		const uintXe4nOWZ = BigInt("1504")
		const uinttb6chgy = BigInt("1142")
		const addressSrmWs1C = accounts[1]
		const uint8l3mGyJc = await LUPHSm1WI.decimals.call({from: accounts[0]});
		const boolNtWxW7I = await LUPHSm1WI.transfer.call(addresskE7qUTD, uintFxhSX0v, {from: accounts[1]});
		const stringHRvGheJ = await LUPHSm1WI.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256S4p4q5u = await LUPHSm1WI.balanceOf.call(addressiPpZJ6, {from: accounts[3]});
		const boolSka9xOu = await LUPHSm1WI.lock.call(addressSrmWs1C, uinttb6chgy, uintXe4nOWZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8l3mGyJc, BigInt("18"))
		await expect(LUPHSm1WI.transfer.call(addresskE7qUTD, uintFxhSX0v, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPGdpZQjA = await LUP.new({from: accounts[4]});
		const addressUEVzPrU = accounts[1]
		const bool3IWyvx = true
		const addressA96be8T = accounts[5]
		const uintopAQnyy = BigInt("1538")
		const uintSfL0nPJ = BigInt("326")
		const addressHk07tI = accounts[4]
		const stringqiyZVS6 = await LUPGdpZQjA.symbol.call({from: accounts[1]});
		const uint8lk6gvHc = await LUPGdpZQjA.decimals.call({from: accounts[0]});
		const uint256lpXebtT = await LUPGdpZQjA.balanceOf.call(addressUEVzPrU, {from: accounts[3]});
		const boolnDzQbgv = await LUPGdpZQjA.freezeAccount.call(addressA96be8T, bool3IWyvx, {from: accounts[1]});
		const boolk3y3qRj = await LUPGdpZQjA.transferWithLock.call(addressHk07tI, uintSfL0nPJ, uintopAQnyy, {from: accounts[2]});

		assert.equal(stringqiyZVS6, "LUP")
		assert.equal(uint256lpXebtT, BigInt("0"))
		assert.equal(uint8lk6gvHc, BigInt("18"))
		await expect(LUPGdpZQjA.freezeAccount.call(addressA96be8T, bool3IWyvx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPGdpZQjA = await LUP.new({from: accounts[4]});
		const addressgt3N0v = accounts[1]
		const addressGtjsjkZ = accounts[2]
		const bool3IWyvx = true
		const addressc37aoEU = accounts[5]
		const uintPOprQUg = BigInt("1538")
		const uintAFNEeos = BigInt("326")
		const addresslDlgbc = accounts[4]
		const stringqiyZVS6 = await LUPGdpZQjA.symbol.call({from: accounts[1]});
		const addressYHChKiF = await LUPGdpZQjA.notFrozen.call(addressgt3N0v, {from: accounts[3]});
		const uint8lk6gvHc = await LUPGdpZQjA.decimals.call({from: accounts[0]});
		const uint256lpXebtT = await LUPGdpZQjA.balanceOf.call(addressGtjsjkZ, {from: accounts[3]});
		const boolnDzQbgv = await LUPGdpZQjA.freezeAccount.call(addressc37aoEU, bool3IWyvx, {from: accounts[1]});
		const boolk3y3qRj = await LUPGdpZQjA.transferWithLock.call(addresslDlgbc, uintAFNEeos, uintPOprQUg, {from: accounts[2]});

		assert.equal(stringqiyZVS6, "LUP")
		await expect(LUPGdpZQjA.notFrozen.call(addressgt3N0v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPHSm1WI = await LUP.new({from: accounts[2]});
		const addresskYm25A = accounts[0]
		const addresswGvq0sI = accounts[5]
		const uintfGgGa3k = BigInt("691")
		const addressUKKnu14 = accounts[3]
		const addressEOcET7z = accounts[4]
		const uintDgHvcRg = BigInt("2041")
		const addressYgwCht = accounts[1]
		const addressrZIHJE8 = accounts[2]
		const addressPxtG1LC = accounts[3]
		const uintzr49aIX = BigInt("1528")
		const addressNKTZod = accounts[2]
		const uintgwzePRX = BigInt("1504")
		const uintPR2hcb = BigInt("1142")
		const addressdzemR4R = accounts[1]
		const uint8l3mGyJc = await LUPHSm1WI.decimals.call({from: accounts[0]});
		const stringHRvGheJ = await LUPHSm1WI.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const addressDWcHec1 = await LUPHSm1WI.upgradeTo.call(addresskYm25A, {from: accounts[1]});
		const stringru4Pzj = await LUPHSm1WI.symbol.call({from: accounts[3]});
		const uint256S4p4q5u = await LUPHSm1WI.balanceOf.call(addresswGvq0sI, {from: accounts[3]});
		const bool9MXFHc = await LUPHSm1WI.transfer.call(addressUKKnu14, uintfGgGa3k, {from: accounts[0]});
		const uint256rnC6Wdf = await LUPHSm1WI.balanceOf.call(addressEOcET7z, {from: accounts[0]});
		const boolBruG8b1 = await LUPHSm1WI.transfer.call(addressYgwCht, uintDgHvcRg, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ghSOtpl = await LUPHSm1WI.balanceOf.call(addressrZIHJE8, {from: accounts[3]});
		const uint256k5mMjTk = await LUPHSm1WI.balanceOf.call(addressPxtG1LC, {from: "0x0000000000000000000000000000000000000001"});
		const boolSZ9Awzf = await LUPHSm1WI.unlock.call(addressNKTZod, uintzr49aIX, {from: accounts[3]});
		const boolSka9xOu = await LUPHSm1WI.lock.call(addressdzemR4R, uintPR2hcb, uintgwzePRX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringHRvGheJ, "LUP")
		assert.equal(uint8l3mGyJc, BigInt("18"))
		await expect(LUPHSm1WI.upgradeTo.call(addresskYm25A, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPGdpZQjA = await LUP.new({from: accounts[4]});
		const uintDK8hIzO = BigInt("1196")
		const uintYifnOen = BigInt("8")
		const addressXri6Pz = accounts[3]
		const addressVj7UxXv = accounts[4]
		const bool3IWyvx = true
		const addressIvm8UOE = accounts[5]
		const stringqiyZVS6 = await LUPGdpZQjA.symbol.call({from: accounts[1]});
		const boolp8JlGOK = await LUPGdpZQjA.transferWithLock.call(addressXri6Pz, uintYifnOen, uintDK8hIzO, {from: accounts[4]});
		const uint256UBPXklb = await LUPGdpZQjA.balanceOf.call(addressVj7UxXv, {from: accounts[0]});
		const boolnDzQbgv = await LUPGdpZQjA.freezeAccount.call(addressIvm8UOE, bool3IWyvx, {from: accounts[1]});

		assert.equal(boolp8JlGOK, true)
		assert.equal(stringqiyZVS6, "LUP")
		assert.equal(uint256UBPXklb, BigInt("50000000000000000000000000"))
		await expect(LUPGdpZQjA.freezeAccount.call(addressIvm8UOE, bool3IWyvx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPHSm1WI = await LUP.new({from: accounts[2]});
		const uintC2bQln6 = BigInt("661")
		const addressMYD3h1q = accounts[2]
		const uint8W61mqLz = await LUPHSm1WI.decimals.call({from: accounts[0]});
		const stringd8vUCoI = await LUPHSm1WI.name.call({from: accounts[3]});
		const boolNtWxW7I = await LUPHSm1WI.transfer.call(addressMYD3h1q, uintC2bQln6, {from: accounts[1]});

		assert.equal(stringd8vUCoI, "LINKUP Token")
		assert.equal(uint8W61mqLz, BigInt("18"))
		await expect(LUPHSm1WI.transfer.call(addressMYD3h1q, uintC2bQln6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPHSm1WI = await LUP.new({from: accounts[2]});
		const uintQzvkqe = BigInt("1731")
		const addressGwiFbFg = accounts[4]
		const addressRlZu8nT = accounts[5]
		const uintvrDgYw0 = BigInt("687")
		const addressKxUKyYn = accounts[4]
		const addressQYh1048 = "0x0000000000000000000000000000000000000001"
		const addresspxtvurs = accounts[4]
		const uintfouWgKJ = BigInt("2041")
		const addressHWOTiLu = accounts[1]
		const addressARGvkBl = accounts[3]
		const uinteTNeKW8 = BigInt("1528")
		const addressnKV10E4 = accounts[2]
		const uintNSzqEl = BigInt("1504")
		const uintZJL96JM = BigInt("1142")
		const addressgczDB8U = accounts[1]
		const uint8l3mGyJc = await LUPHSm1WI.decimals.call({from: accounts[0]});
		const stringru4Pzj = await LUPHSm1WI.symbol.call({from: accounts[3]});
		const boolz82l5pH = await LUPHSm1WI.unlock.call(addressGwiFbFg, uintQzvkqe, {from: accounts[2]});
		const uint256S4p4q5u = await LUPHSm1WI.balanceOf.call(addressRlZu8nT, {from: accounts[3]});
		const bool9MXFHc = await LUPHSm1WI.transfer.call(addressKxUKyYn, uintvrDgYw0, {from: accounts[0]});
		const uint256lPSdzhF = await LUPHSm1WI.balanceOf.call(addressQYh1048, {from: accounts[1]});
		const uint256rnC6Wdf = await LUPHSm1WI.balanceOf.call(addresspxtvurs, {from: accounts[0]});
		const boolBruG8b1 = await LUPHSm1WI.transfer.call(addressHWOTiLu, uintfouWgKJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256k5mMjTk = await LUPHSm1WI.balanceOf.call(addressARGvkBl, {from: "0x0000000000000000000000000000000000000001"});
		const boolSZ9Awzf = await LUPHSm1WI.unlock.call(addressnKV10E4, uinteTNeKW8, {from: accounts[3]});
		const boolSka9xOu = await LUPHSm1WI.lock.call(addressgczDB8U, uintZJL96JM, uintNSzqEl, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringru4Pzj, "LUP")
		assert.equal(uint8l3mGyJc, BigInt("18"))
		await expect(LUPHSm1WI.unlock.call(addressGwiFbFg, uintQzvkqe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPHSm1WI = await LUP.new({from: accounts[2]});
		const boolu8nmRY = false
		const addresss0QS5mH = accounts[1]
		const uintOHvIVmy = BigInt("1889")
		const addresscPyU2sq = accounts[3]
		const uintKryddlP = BigInt("1811")
		const addresswCVl8yg = accounts[1]
		const boolSHRpx0g = await LUPHSm1WI.freezeAccount.call(addresss0QS5mH, boolu8nmRY, {from: accounts[2]});
		const boolyVHylvA = await LUPHSm1WI.unlock.call(addresscPyU2sq, uintOHvIVmy, {from: "0x0000000000000000000000000000000000000001"});
		const uint8rCkNj1Y = await LUPHSm1WI.decimals.call({from: accounts[3]});
		const boolNtWxW7I = await LUPHSm1WI.transfer.call(addresswCVl8yg, uintKryddlP, {from: accounts[1]});

		assert.equal(boolSHRpx0g, true)
		await expect(LUPHSm1WI.unlock.call(addresscPyU2sq, uintOHvIVmy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPHSm1WI = await LUP.new({from: accounts[2]});
		const addressWXIGCYA = accounts[4]
		const addressmxQCwl3 = accounts[5]
		const addressOuKdJz = await LUPHSm1WI.upgradeTo.call(addressWXIGCYA, {from: accounts[2]});
		const uint256ednlDRG = await LUPHSm1WI.balanceOf.call(addressmxQCwl3, {from: accounts[0]});

		assert.equal(uint256ednlDRG, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPHSm1WI = await LUP.new({from: accounts[2]});
		const uintJ058c3 = BigInt("12")
		const uintBZnDOuw = BigInt("1127")
		const addressWRlmu1f = accounts[0]
		const boolyzuuhwU = true
		const addressAgRLNXk = "0x0000000000000000000000000000000000000001"
		const uintCmhmbGL = BigInt("1731")
		const addressvUZDQR = accounts[4]
		const addressweJTfy = accounts[5]
		const uintFPaGD1I = BigInt("687")
		const addressafVM5jr = accounts[4]
		const addressHslRxaT = "0x0000000000000000000000000000000000000001"
		const addressoPgtGj = accounts[5]
		const uintWAFeCdz = BigInt("452")
		const uintEhZIgp = BigInt("38")
		const addressgZ8oT09 = accounts[0]
		const uintkCFw72n = BigInt("2041")
		const addressEx2TZwa = accounts[1]
		const addressjk4sPs1 = accounts[3]
		const uintBbu6d5 = BigInt("1528")
		const addressturmtsI = accounts[2]
		const uintL40KOoY = BigInt("174")
		const addressXb5EuIm = accounts[5]
		const uintD6YCNc5 = BigInt("1504")
		const uintlzKfqpN = BigInt("1142")
		const addressRbkR0KQ = accounts[1]
		const uint8l3mGyJc = await LUPHSm1WI.decimals.call({from: accounts[0]});
		const boolTFKJEP = await LUPHSm1WI.lock.call(addressWRlmu1f, uintBZnDOuw, uintJ058c3, {from: accounts[2]});
		const stringru4Pzj = await LUPHSm1WI.symbol.call({from: accounts[3]});
		const boolRzH0nZ9 = await LUPHSm1WI.freezeAccount.call(addressAgRLNXk, boolyzuuhwU, {from: "0x0000000000000000000000000000000000000001"});
		const boolz82l5pH = await LUPHSm1WI.unlock.call(addressvUZDQR, uintCmhmbGL, {from: accounts[2]});
		const uint256S4p4q5u = await LUPHSm1WI.balanceOf.call(addressweJTfy, {from: accounts[3]});
		const bool9MXFHc = await LUPHSm1WI.transfer.call(addressafVM5jr, uintFPaGD1I, {from: accounts[0]});
		const uint256lPSdzhF = await LUPHSm1WI.balanceOf.call(addressHslRxaT, {from: accounts[1]});
		const uint256rnC6Wdf = await LUPHSm1WI.balanceOf.call(addressoPgtGj, {from: accounts[0]});
		const boolaw7Dyyb = await LUPHSm1WI.transferWithLock.call(addressgZ8oT09, uintEhZIgp, uintWAFeCdz, {from: accounts[1]});
		const boolBruG8b1 = await LUPHSm1WI.transfer.call(addressEx2TZwa, uintkCFw72n, {from: "0x0000000000000000000000000000000000000001"});
		const uint256k5mMjTk = await LUPHSm1WI.balanceOf.call(addressjk4sPs1, {from: "0x0000000000000000000000000000000000000001"});
		const boolSZ9Awzf = await LUPHSm1WI.unlock.call(addressturmtsI, uintBbu6d5, {from: accounts[3]});
		const boolddoAJHo = await LUPHSm1WI.transfer.call(addressXb5EuIm, uintL40KOoY, {from: accounts[4]});
		const boolSka9xOu = await LUPHSm1WI.lock.call(addressRbkR0KQ, uintlzKfqpN, uintD6YCNc5, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8l3mGyJc, BigInt("18"))
		await expect(LUPHSm1WI.lock.call(addressWRlmu1f, uintBZnDOuw, uintJ058c3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPHSm1WI = await LUP.new({from: accounts[2]});
		const addressWXDPHOJ = accounts[3]
		const uintCLW4zV5 = BigInt("197")
		const uintoFm9r8c = BigInt("174")
		const addressr4MS3dK = accounts[2]
		const boolGNLHvNm = true
		const addressjulKb31 = accounts[3]
		const uintLMyIPtr = BigInt("1792")
		const addressvsqFKuY = "0x0000000000000000000000000000000000000001"
		const uinthwQ2tok = BigInt("1300")
		const uintEXK1y1j = BigInt("40")
		const addressMS0wqrX = accounts[2]
		const boolhtDG297 = false
		const addressU6FZ0yT = accounts[1]
		const uintaoT71qI = BigInt("793")
		const uintqQFfnz = BigInt("796")
		const addressvq5klsz = accounts[2]
		const boolfnCuB2g = false
		const addressX4Ebg0W = accounts[2]
		const uintBQ59GKF = BigInt("1201")
		const addresshDYL128 = accounts[3]
		const uint256HWJhHqk = await LUPHSm1WI.balanceOf.call(addressWXDPHOJ, {from: accounts[1]});
		const boolfhXh0uR = await LUPHSm1WI.lock.call(addressr4MS3dK, uintoFm9r8c, uintCLW4zV5, {from: accounts[2]});
		const boolRrkmI05 = await LUPHSm1WI.freezeAccount.call(addressjulKb31, boolGNLHvNm, {from: accounts[5]});
		const boolf7DUlCV = await LUPHSm1WI.transfer.call(addressvsqFKuY, uintLMyIPtr, {from: accounts[1]});
		const boolvJWrw2n = await LUPHSm1WI.lock.call(addressMS0wqrX, uintEXK1y1j, uinthwQ2tok, {from: accounts[0]});
		const bool35n2jn = await LUPHSm1WI.freezeAccount.call(addressU6FZ0yT, boolhtDG297, {from: accounts[5]});
		const boolAIWLUM = await LUPHSm1WI.lock.call(addressvq5klsz, uintqQFfnz, uintaoT71qI, {from: accounts[1]});
		const uint8cgZGwny = await LUPHSm1WI.decimals.call({from: accounts[3]});
		const stringILXgToO = await LUPHSm1WI.symbol.call({from: accounts[0]});
		const boolKZSKxn = await LUPHSm1WI.freezeAccount.call(addressX4Ebg0W, boolfnCuB2g, {from: accounts[2]});
		const uint8t2xJFn5 = await LUPHSm1WI.decimals.call({from: accounts[3]});
		const stringIIFP107 = await LUPHSm1WI.symbol.call({from: accounts[0]});
		const boollFf2TS4 = await LUPHSm1WI.transfer.call(addresshDYL128, uintBQ59GKF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfhXh0uR, true)
		assert.equal(uint256HWJhHqk, BigInt("0"))
		await expect(LUPHSm1WI.freezeAccount.call(addressjulKb31, boolGNLHvNm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})