const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTcjR8YPD = await PACT.new({from: accounts[2]});
		const uintVJG7VM4 = BigInt("2025")
		const addressWH2b1f = accounts[3]
		const uintpn6Gxe4 = BigInt("1248")
		const addressVUvce7z = "0x0000000000000000000000000000000000000001"
		const addressZd5UQ1 = accounts[0]
		const stringEMJtlT3 = await PACTcjR8YPD.name.call({from: accounts[4]});
		const uint8qLIJrE = await PACTcjR8YPD.decimals.call({from: accounts[1]});
		const boolyl0wAM = await PACTcjR8YPD.transfer.call(addressWH2b1f, uintVJG7VM4, {from: accounts[0]});
		const boolYDUoVk = await PACTcjR8YPD.approve.call(addressVUvce7z, uintpn6Gxe4, {from: accounts[3]});
		const boolLebyR6Q = await PACTcjR8YPD.setupBasePool.call(addressZd5UQ1, {from: accounts[1]});

		assert.equal(stringEMJtlT3, "P2PB2B community token")
		assert.equal(uint8qLIJrE, BigInt("18"))
		await expect(PACTcjR8YPD.transfer.call(addressWH2b1f, uintVJG7VM4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTzy1VK7y = await PACT.new({from: accounts[3]});
		const addresspbp0xm = accounts[3]
		const addressRkWOu3Q = accounts[5]
		const addressk8P7pNv = accounts[4]
		const addressVas1N3D = accounts[4]
		const booleUXGQn5 = await PACTzy1VK7y.setupRewards.call(addresspbp0xm, {from: accounts[0]});
		const stringQJbc9r0 = await PACTzy1VK7y.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolrnPPHlr = await PACTzy1VK7y.setupReserve.call(addressRkWOu3Q, {from: "0x0000000000000000000000000000000000000001"});
		const boolxn15xdq = await PACTzy1VK7y.setupTeam.call(addressk8P7pNv, {from: accounts[3]});
		const boolTKCvVxX = await PACTzy1VK7y.setupBasePool.call(addressVas1N3D, {from: accounts[0]});

		await expect(PACTzy1VK7y.setupRewards.call(addresspbp0xm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTU9Nnofp = await PACT.new({from: accounts[3]});
		const addressHoUGMGD = accounts[2]
		const addresspTPfwfV = accounts[5]
		const boolDL6tU5f = await PACTU9Nnofp.setupTeam.call(addressHoUGMGD, {from: accounts[1]});
		const boolO6kcWT = await PACTU9Nnofp.setupTeam.call(addresspTPfwfV, {from: accounts[1]});
		const uintQhvTKYA = await PACTU9Nnofp.totalSupply.call({from: accounts[1]});
		const uint8Qv3QKw = await PACTU9Nnofp.decimals.call({from: accounts[2]});
		const stringfMfKSLf = await PACTU9Nnofp.symbol.call({from: accounts[1]});

		await expect(PACTU9Nnofp.setupTeam.call(addressHoUGMGD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTvlxAtp0 = await PACT.new({from: accounts[5]});
		const addressRu3B5gS = accounts[3]
		const addressy5IOmbJ = accounts[3]
		const addressX6UB7BM = accounts[5]
		const addressHi3g5Zh = "0x0000000000000000000000000000000000000001"
		const boolSvFLIq7 = await PACTvlxAtp0.setupBasePool.call(addressRu3B5gS, {from: accounts[3]});
		const uintneWe7Y = await PACTvlxAtp0.allowance.call(addressX6UB7BM, addressy5IOmbJ, {from: accounts[2]});
		const stringYMzvNbh = await PACTvlxAtp0.symbol.call({from: accounts[4]});
		const boolSz928EI = await PACTvlxAtp0.setupRewards.call(addressHi3g5Zh, {from: accounts[4]});

		await expect(PACTvlxAtp0.setupBasePool.call(addressRu3B5gS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTAWDeS6W = await PACT.new({from: accounts[3]});
		const uintJkk4iY9 = BigInt("62")
		const addressfxEtUSI = accounts[5]
		const addressAPJmfXt = accounts[4]
		const addressI224AHz = accounts[4]
		const boolKgZ9eGX = await PACTAWDeS6W.transferFrom.call(addressAPJmfXt, addressfxEtUSI, uintJkk4iY9, {from: accounts[0]});
		const uintWLw7s8T = await PACTAWDeS6W.balanceOf.call(addressI224AHz, {from: accounts[2]});
		const uintqCTunke = await PACTAWDeS6W.totalSupply.call({from: accounts[3]});

		await expect(PACTAWDeS6W.transferFrom.call(addressAPJmfXt, addressfxEtUSI, uintJkk4iY9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTKvLPpR0 = await PACT.new({from: accounts[1]});
		const addressuo2lYCa = accounts[4]
		const uintymtoehI = BigInt("987")
		const addressKKCj5Jf = accounts[0]
		const uintuddOSGu = await PACTKvLPpR0.totalSupply.call({from: accounts[5]});
		const boolz7MRSG = await PACTKvLPpR0.setupReserve.call(addressuo2lYCa, {from: accounts[5]});
		const boolnwrgj2I = await PACTKvLPpR0.approve.call(addressKKCj5Jf, uintymtoehI, {from: accounts[0]});

		assert.equal(uintuddOSGu, BigInt("1000000000000000000000000000"))
		await expect(PACTKvLPpR0.setupReserve.call(addressuo2lYCa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTKYPP2A0 = await PACT.new({from: accounts[4]});
		const addresshovdeK6 = accounts[3]
		const addressOrxPO1 = accounts[3]
		const uintmgb0cBh = BigInt("861")
		const addresss6npSh = accounts[3]
		const addressJIeqUs7 = accounts[0]
		const uintH2J0JTT = await PACTKYPP2A0.balanceOf.call(addresshovdeK6, {from: accounts[4]});
		const uintayl7TO = await PACTKYPP2A0.balanceOf.call(addressOrxPO1, {from: "0x0000000000000000000000000000000000000001"});
		const boolDWrDn8d = await PACTKYPP2A0.approve.call(addresss6npSh, uintmgb0cBh, {from: accounts[4]});
		const boolQCxWUl = await PACTKYPP2A0.setupTeam.call(addressJIeqUs7, {from: accounts[2]});

		assert.equal(boolDWrDn8d, true)
		assert.equal(uintH2J0JTT, BigInt("0"))
		assert.equal(uintayl7TO, BigInt("0"))
		await expect(PACTKYPP2A0.setupTeam.call(addressJIeqUs7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTDX9rntg = await PACT.new({from: accounts[4]});
		const uintZmLw7Tk = BigInt("501")
		const addresszuqb4V7 = accounts[0]
		const addressra0TvKt = accounts[1]
		const addressbS9HO10 = accounts[3]
		const uintdSRzO8s = BigInt("116")
		const addressQZ3x0K3 = accounts[5]
		const addressUXkVKo3 = accounts[2]
		const stringkGSicPi = await PACTDX9rntg.name.call({from: accounts[0]});
		const uint8pGEo4He = await PACTDX9rntg.decimals.call({from: accounts[0]});
		const boolTGQAoCb = await PACTDX9rntg.approve.call(addresszuqb4V7, uintZmLw7Tk, {from: accounts[1]});
		const uintL94FYoq = await PACTDX9rntg.allowance.call(addressbS9HO10, addressra0TvKt, {from: accounts[3]});
		const boolZWOhg9M = await PACTDX9rntg.transferFrom.call(addressUXkVKo3, addressQZ3x0K3, uintdSRzO8s, {from: accounts[0]});

		assert.equal(boolTGQAoCb, true)
		assert.equal(stringkGSicPi, "P2PB2B community token")
		assert.equal(uint8pGEo4He, BigInt("18"))
		assert.equal(uintL94FYoq, BigInt("0"))
		await expect(PACTDX9rntg.transferFrom.call(addressUXkVKo3, addressQZ3x0K3, uintdSRzO8s, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTKYPP2A0 = await PACT.new({from: accounts[4]});
		const addressQNcSqrE = accounts[3]
		const addresshU9w1v1 = accounts[4]
		const uintb85LIF9 = BigInt("861")
		const addressHKSlui = accounts[3]
		const uintI844Ubv = BigInt("473")
		const addressTs5Sl3 = accounts[5]
		const addressdGu0AR0 = accounts[0]
		const uintH2J0JTT = await PACTKYPP2A0.balanceOf.call(addressQNcSqrE, {from: accounts[4]});
		const uintayl7TO = await PACTKYPP2A0.balanceOf.call(addresshU9w1v1, {from: "0x0000000000000000000000000000000000000001"});
		const boolDWrDn8d = await PACTKYPP2A0.approve.call(addressHKSlui, uintb85LIF9, {from: accounts[4]});
		const boolobXwq8z = await PACTKYPP2A0.burn.call(addressTs5Sl3, uintI844Ubv, {from: accounts[1]});
		const boolQCxWUl = await PACTKYPP2A0.setupTeam.call(addressdGu0AR0, {from: accounts[2]});

		assert.equal(boolDWrDn8d, true)
		assert.equal(uintH2J0JTT, BigInt("0"))
		assert.equal(uintayl7TO, BigInt("0"))
		await expect(PACTKYPP2A0.burn.call(addressTs5Sl3, uintI844Ubv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTKYPP2A0 = await PACT.new({from: accounts[4]});
		const addressAGiSGoA = accounts[3]
		const addressZP8nUGo = accounts[4]
		const uintgC8kNHN = BigInt("861")
		const addressaZOMP3R = accounts[3]
		const addressF6q4WI4 = accounts[0]
		const uintH2J0JTT = await PACTKYPP2A0.balanceOf.call(addressAGiSGoA, {from: accounts[4]});
		const uintayl7TO = await PACTKYPP2A0.balanceOf.call(addressZP8nUGo, {from: "0x0000000000000000000000000000000000000001"});
		const boolDWrDn8d = await PACTKYPP2A0.approve.call(addressaZOMP3R, uintgC8kNHN, {from: accounts[4]});
		const stringtxtBtr = await PACTKYPP2A0.symbol.call({from: accounts[3]});
		const boolQCxWUl = await PACTKYPP2A0.setupTeam.call(addressF6q4WI4, {from: accounts[2]});

		assert.equal(boolDWrDn8d, true)
		assert.equal(stringtxtBtr, "PACT")
		assert.equal(uintH2J0JTT, BigInt("0"))
		assert.equal(uintayl7TO, BigInt("0"))
		await expect(PACTKYPP2A0.setupTeam.call(addressF6q4WI4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACThitBCPl = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressr2lvHuk = accounts[0]
		const uintZNwvnm = BigInt("761")
		const addressB1CtDGG = "0x0000000000000000000000000000000000000001"
		const addressRU6BCqp = accounts[1]
		const boolPTzvB2S = await PACThitBCPl.setupReserve.call(addressr2lvHuk, {from: accounts[5]});
		const stringo8K7pyJ = await PACThitBCPl.symbol.call({from: accounts[1]});
		const boolJihvsJm = await PACThitBCPl.transfer.call(addressB1CtDGG, uintZNwvnm, {from: accounts[4]});
		const boolpBI25Qb = await PACThitBCPl.setupBasePool.call(addressRU6BCqp, {from: accounts[4]});
		const uint8VWNDqbM = await PACThitBCPl.decimals.call({from: accounts[2]});
	});

	it('test for PACT', async () => {
		const PACTKvLPpR0 = await PACT.new({from: accounts[1]});
		const uintuoJ4b7q = BigInt("1016")
		const addressl8REjRb = accounts[0]
		const addressMxT1jKI = "0x0000000000000000000000000000000000000001"
		const boolnwrgj2I = await PACTKvLPpR0.approve.call(addressl8REjRb, uintuoJ4b7q, {from: accounts[0]});
		const booliLpiG0 = await PACTKvLPpR0.setupFarming.call(addressMxT1jKI, {from: accounts[5]});

		assert.equal(boolnwrgj2I, true)
		await expect(PACTKvLPpR0.setupFarming.call(addressMxT1jKI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})