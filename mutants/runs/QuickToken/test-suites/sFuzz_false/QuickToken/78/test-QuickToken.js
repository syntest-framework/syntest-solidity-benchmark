const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addresssZe02b = accounts[0]
		const addressT4uD0XJ = accounts[1]
		const QuickTokenZOksTdr = await QuickToken.new(addresssZe02b, addressT4uD0XJ, {from: accounts[2]});
		const uintxC3Mtej = BigInt("1311")
		const addressMNA1P3L = accounts[3]
		const addressE7RXztD = accounts[2]
		const addressOMPAhCD = accounts[3]
		const boolTkVHslc = await QuickTokenZOksTdr.approve.call(addressMNA1P3L, uintxC3Mtej, {from: accounts[2]});
		const uintfbmEL1 = await QuickTokenZOksTdr.allowance.call(addressOMPAhCD, addressE7RXztD, {from: accounts[0]});

		assert.equal(boolTkVHslc, true)
		assert.equal(uintfbmEL1, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressF7XjTPK = accounts[2]
		const addressyMqtngS = accounts[2]
		const QuickTokenuSF1PPY = await QuickToken.new(addressF7XjTPK, addressyMqtngS, {from: accounts[1]});
		const uints1CzWNT = BigInt("1149")
		const addressNwWr4VX = accounts[3]
		const addressBO7wYN = accounts[0]
		const addresstjaBaX = accounts[1]
		const addressapwFJJ3 = accounts[0]
		const addressVyX2A1o = accounts[0]
		const addressJz1CNeH = accounts[0]
		const boolxqiGsns = await QuickTokenuSF1PPY.approve.call(addressNwWr4VX, uints1CzWNT, {from: accounts[3]});
		const uintAjVETqh = await QuickTokenuSF1PPY.allowance.call(addresstjaBaX, addressBO7wYN, {from: accounts[3]});
		const addresspBKt5RM = await QuickTokenuSF1PPY.setMinter.call(addressapwFJJ3, {from: accounts[2]});
		const uintdqBVpdL = await QuickTokenuSF1PPY.allowance.call(addressJz1CNeH, addressVyX2A1o, {from: accounts[2]});

		assert.equal(boolxqiGsns, true)
		assert.equal(uintAjVETqh, BigInt("0"))
		assert.equal(uintdqBVpdL, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressnuEZhOM = accounts[2]
		const addressiaygoMu = accounts[0]
		const QuickTokenkeW7RN = await QuickToken.new(addressnuEZhOM, addressiaygoMu, {from: accounts[2]});
		const uintnEZWzLm = BigInt("883")
		const addressxSCBMiH = accounts[4]
		const uinthgw3rjK = BigInt("1826")
		const addressLJ0J1Ad = accounts[3]
		const addressfPHIMKq = accounts[0]
		const addressT4tCqKN = accounts[4]
		const boolp9ZDlCH = await QuickTokenkeW7RN.approve.call(addressxSCBMiH, uintnEZWzLm, {from: accounts[0]});
		const booltanlk4 = await QuickTokenkeW7RN.transfer.call(addressLJ0J1Ad, uinthgw3rjK, {from: accounts[1]});
		const uintM1oSl7f = await QuickTokenkeW7RN.allowance.call(addressT4tCqKN, addressfPHIMKq, {from: accounts[4]});

		assert.equal(boolp9ZDlCH, true)
		await expect(QuickTokenkeW7RN.transfer.call(addressLJ0J1Ad, uinthgw3rjK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresspKSva2C = accounts[3]
		const addressg8Sn1bm = accounts[4]
		const QuickTokenEHJYNzA = await QuickToken.new(addresspKSva2C, addressg8Sn1bm, {from: accounts[5]});
		const addressgK0Ggdp = accounts[0]
		const addressfbvZ2HD = accounts[4]
		const uintyCpwzFw = BigInt("1574")
		const addressWIp6wY2 = "0x0000000000000000000000000000000000000001"
		const uintn50FYLK = BigInt("1289")
		const addressODJOzWX = accounts[4]
		const addressi0JptJ = "0x0000000000000000000000000000000000000001"
		const addressyj43pz3 = accounts[3]
		const addressab2hwqC = accounts[1]
		const uintrdZGVmM = BigInt("1186")
		const addresswGk4Es2 = accounts[1]
		const uint1IJbOp = await QuickTokenEHJYNzA.balanceOf.call(addressgK0Ggdp, {from: accounts[0]});
		const uintADQxTNj = await QuickTokenEHJYNzA.balanceOf.call(addressfbvZ2HD, {from: accounts[2]});
		const boolxYv14r = await QuickTokenEHJYNzA.approve.call(addressWIp6wY2, uintyCpwzFw, {from: "0x0000000000000000000000000000000000000001"});
		const boolGVMOR1J = await QuickTokenEHJYNzA.transferFrom.call(addressi0JptJ, addressODJOzWX, uintn50FYLK, {from: accounts[4]});
		const uinthO7LLxs = await QuickTokenEHJYNzA.allowance.call(addressab2hwqC, addressyj43pz3, {from: accounts[3]});
		const bool7ZJ1at = await QuickTokenEHJYNzA.transfer.call(addresswGk4Es2, uintrdZGVmM, {from: accounts[2]});

		assert.equal(boolxYv14r, true)
		assert.equal(uint1IJbOp, BigInt("0"))
		assert.equal(uintADQxTNj, BigInt("0"))
		await expect(QuickTokenEHJYNzA.transferFrom.call(addressi0JptJ, addressODJOzWX, uintn50FYLK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresslhUdcSY = accounts[4]
		const addressCiOmMPb = "0x0000000000000000000000000000000000000001"
		const QuickTokenysUhDV5 = await QuickToken.new(addresslhUdcSY, addressCiOmMPb, {from: accounts[2]});
		const addressCV1DaiN = accounts[2]
		const uintlQc4pgD = BigInt("1478")
		const addressxLVT5jl = accounts[2]
		const addressmfBhDo5 = "0x0000000000000000000000000000000000000001"
		const addressCIyGdnC = accounts[4]
		const uintlhcRAZV = BigInt("1631")
		const addressj3C7THD = accounts[5]
		const addressW9hNSBH = accounts[2]
		const uintZt6lqyL = BigInt("1507")
		const addressjLPf86N = accounts[1]
		const uintVOcUUL6 = await QuickTokenysUhDV5.balanceOf.call(addressCV1DaiN, {from: accounts[5]});
		const booluFnXaeV = await QuickTokenysUhDV5.approve.call(addressxLVT5jl, uintlQc4pgD, {from: accounts[4]});
		const uintJeKbaEC = await QuickTokenysUhDV5.allowance.call(addressCIyGdnC, addressmfBhDo5, {from: accounts[0]});
		const boolyklir1q = await QuickTokenysUhDV5.approve.call(addressj3C7THD, uintlhcRAZV, {from: accounts[2]});
		const uintyC8Ex8i = await QuickTokenysUhDV5.balanceOf.call(addressW9hNSBH, {from: accounts[3]});
		const addressWdoRJDY = await QuickTokenysUhDV5.mint.call(addressjLPf86N, uintZt6lqyL, {from: accounts[3]});

		assert.equal(booluFnXaeV, true)
		assert.equal(boolyklir1q, true)
		assert.equal(uintJeKbaEC, BigInt("0"))
		assert.equal(uintVOcUUL6, BigInt("0"))
		assert.equal(uintyC8Ex8i, BigInt("0"))
		await expect(QuickTokenysUhDV5.mint.call(addressjLPf86N, uintZt6lqyL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressR1Gjxdj = accounts[4]
		const address0pOeGz = "0x0000000000000000000000000000000000000001"
		const QuickTokenF7zW7ZG = await QuickToken.new(addressR1Gjxdj, address0pOeGz, {from: accounts[4]});
		const addresshatmWw8 = accounts[1]
		const addressJf2Sfx2 = accounts[5]
		const addressXmNVgTd = accounts[0]
		const uintimkHI0m = BigInt("1034")
		const address94t46I = accounts[3]
		const addressMHZo4N = await QuickTokenF7zW7ZG.setMinter.call(addresshatmWw8, {from: "0x0000000000000000000000000000000000000001"});
		const uintwIOLAHY = await QuickTokenF7zW7ZG.allowance.call(addressXmNVgTd, addressJf2Sfx2, {from: accounts[4]});
		const addressCimDX6C = await QuickTokenF7zW7ZG.mint.call(address94t46I, uintimkHI0m, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintwIOLAHY, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressfxNh8oC = accounts[4]
		const addressAO3Danl = "0x0000000000000000000000000000000000000001"
		const QuickTokenF7zW7ZG = await QuickToken.new(addressfxNh8oC, addressAO3Danl, {from: accounts[4]});
		const addressKre7VJ = accounts[2]
		const addressjCO6Wr7 = accounts[1]
		const addressf0zWEML = accounts[5]
		const addresstCdrJ94 = accounts[1]
		const uintRAo5te = BigInt("1063")
		const addressvAAQguP = accounts[1]
		const uinteFo7L9 = BigInt("1034")
		const addresseso8Eo = accounts[4]
		const addressBZ1xk9 = await QuickTokenF7zW7ZG.setMinter.call(addressKre7VJ, {from: accounts[0]});
		const addressMHZo4N = await QuickTokenF7zW7ZG.setMinter.call(addressjCO6Wr7, {from: "0x0000000000000000000000000000000000000001"});
		const uintwIOLAHY = await QuickTokenF7zW7ZG.allowance.call(addresstCdrJ94, addressf0zWEML, {from: accounts[4]});
		const boolObyO46 = await QuickTokenF7zW7ZG.approve.call(addressvAAQguP, uintRAo5te, {from: "0x0000000000000000000000000000000000000001"});
		const addressCimDX6C = await QuickTokenF7zW7ZG.mint.call(addresseso8Eo, uinteFo7L9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(QuickTokenF7zW7ZG.setMinter.call(addressKre7VJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressV01z7mq = accounts[2]
		const addressjdamrhU = accounts[0]
		const QuickTokenPHbst3e = await QuickToken.new(addressV01z7mq, addressjdamrhU, {from: "0x0000000000000000000000000000000000000001"});
		const addresshuNVVr = accounts[3]
		const uintvbIb62q = BigInt("185")
		const addressFpPdGjS = accounts[5]
		const uintpvIikiH = BigInt("1302")
		const addresse0AUYeN = accounts[1]
		const addresswirXSwK = accounts[4]
		const addressUSYzuyf = accounts[1]
		const uintTnzcZ5u = BigInt("163")
		const addresshPfpNhw = accounts[3]
		const addressmFBPP31 = accounts[2]
		const address75nuXr = await QuickTokenPHbst3e.setMinter.call(addresshuNVVr, {from: accounts[3]});
		const boolw8ULfEP = await QuickTokenPHbst3e.transfer.call(addressFpPdGjS, uintvbIb62q, {from: accounts[2]});
		const addressMZO2n2Z = await QuickTokenPHbst3e.mint.call(addresse0AUYeN, uintpvIikiH, {from: accounts[5]});
		const uintB1CR6Qs = await QuickTokenPHbst3e.allowance.call(addressUSYzuyf, addresswirXSwK, {from: accounts[4]});
		const boolFEGRgRb = await QuickTokenPHbst3e.transferFrom.call(addressmFBPP31, addresshPfpNhw, uintTnzcZ5u, {from: accounts[0]});
	});
})