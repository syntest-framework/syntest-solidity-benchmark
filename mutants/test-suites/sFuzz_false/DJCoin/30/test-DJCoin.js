const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoini5HaPc = await DJCoin.new({from: accounts[1]});
		const addressnQbt5UM = accounts[5]
		const uintTSysk3u = BigInt("1198")
		const addressDbqCMw = accounts[4]
		const uintvuLFWe = BigInt("2036")
		const addressL8o3R5 = accounts[0]
		const uint256cnw9X1R = await DJCoini5HaPc.balanceOf.call(addressnQbt5UM, {from: accounts[3]});
		const boolgKy9e4S = await DJCoini5HaPc.approve.call(addressDbqCMw, uintTSysk3u, {from: accounts[1]});
		const booladrTejQ = await DJCoini5HaPc.transfer.call(addressL8o3R5, uintvuLFWe, {from: accounts[1]});
//		await DJCoini5HaPc.onlyOwner.call({from: accounts[2]});

		assert.equal(booladrTejQ, true)
		assert.equal(boolgKy9e4S, true)
		assert.equal(uint256cnw9X1R, BigInt("0"))
		await expect(DJCoini5HaPc.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhlkV2aK = await DJCoin.new({from: accounts[2]});
		const uintYYo1JV1 = BigInt("646")
		const addressCtbWGJH = accounts[4]
		const uintd8SL5rq = BigInt("597")
		const addressL4U0ISz = accounts[1]
		const addressk4vDTe = accounts[2]
		const boolRm9MOAz = await DJCoinhlkV2aK.increaseAllowance.call(addressCtbWGJH, uintYYo1JV1, {from: accounts[2]});
		const boolXK3naa9 = await DJCoinhlkV2aK.increaseAllowance.call(addressL4U0ISz, uintd8SL5rq, {from: accounts[3]});
//		const addressAFtTISS = await DJCoinhlkV2aK.transferOwnership.call(addressk4vDTe, {from: accounts[5]});

		assert.equal(boolRm9MOAz, true)
		assert.equal(boolXK3naa9, true)
		await expect(DJCoinhlkV2aK.transferOwnership.call(addressk4vDTe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinfZdF7D = await DJCoin.new({from: accounts[1]});
		const uintSsA2tvP = BigInt("1900")
		const uintBEgZshn = BigInt("146")
		const uinteQCQick = BigInt("14")
		const uintBBfGqWB = BigInt("198")
		const addressfQQKaph = accounts[3]
		const boolqcZkUVF = await DJCoinfZdF7D.changetokensPerBlock.call(uintSsA2tvP, {from: accounts[2]});
//		const uint256wmo1qI0 = await DJCoinfZdF7D.burn.call(uinteQCQick, uintBEgZshn, {from: accounts[0]});
//		const boolqUHkAvV = await DJCoinfZdF7D.approve.call(addressfQQKaph, uintBBfGqWB, {from: accounts[5]});
//		await DJCoinfZdF7D.renounceOwnership.call({from: accounts[2]});

		assert.equal(boolqcZkUVF, true)
		await expect(DJCoinfZdF7D.burn.call(uinteQCQick, uintBEgZshn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinpzJCFvi = await DJCoin.new({from: accounts[2]});
		const addressPfMWEm0 = accounts[4]
		const addressR0x0LyC = accounts[1]
		const uintAKCEsdQ = BigInt("391")
		const addressGJy5tjY = accounts[0]
		const addressCS2Lh0 = accounts[4]
		const uintPc59ka2 = BigInt("816")
		const addressCYB2nBc = accounts[4]
		const uint256vI5Zh8D = await DJCoinpzJCFvi.allowance.call(addressR0x0LyC, addressPfMWEm0, {from: accounts[0]});
//		await DJCoinpzJCFvi.renounceOwnership.call({from: accounts[4]});
//		const boolUwTrVYC = await DJCoinpzJCFvi.transferFrom.call(addressCS2Lh0, addressGJy5tjY, uintAKCEsdQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmMChvo = await DJCoinpzJCFvi.decreaseAllowance.call(addressCYB2nBc, uintPc59ka2, {from: accounts[3]});

		assert.equal(uint256vI5Zh8D, BigInt("0"))
		await expect(DJCoinpzJCFvi.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinBo1i5id = await DJCoin.new({from: accounts[1]});
		const uintgxjUlZB = BigInt("1869")
		const uintMC6ECZ4 = BigInt("1064")
		const addressLU0MZYf = accounts[0]
		const addresswzc8A5z = accounts[3]
		const boolhLBE4UY = await DJCoinBo1i5id.changetokensPerBlock.call(uintgxjUlZB, {from: accounts[2]});
		const boolo8VFiq = await DJCoinBo1i5id.approve.call(addressLU0MZYf, uintMC6ECZ4, {from: accounts[2]});
		const addresstgMKeXe = await DJCoinBo1i5id.owner.call({from: accounts[2]});
		const uint256alcIk4Z = await DJCoinBo1i5id.balanceOf.call(addresswzc8A5z, {from: accounts[3]});

		assert.equal(addresstgMKeXe, 0x7e3866f18e6CD2D358eC1d9AE739bbe83Bc01DA8)
		assert.equal(boolhLBE4UY, true)
		assert.equal(boolo8VFiq, true)
		assert.equal(uint256alcIk4Z, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinkNhVz6J = await DJCoin.new({from: accounts[0]});
		const uintdl2s4M1 = BigInt("658")
		const addressnZYYA26 = "0x0000000000000000000000000000000000000001"
		const uintlMKW8Ea = BigInt("446")
		const addressk3yiWjk = accounts[3]
		const uintDHfFsfo = BigInt("1891")
		const addressd2yVdV = accounts[2]
		const boolOVMypUH = await DJCoinkNhVz6J.approve.call(addressnZYYA26, uintdl2s4M1, {from: "0x0000000000000000000000000000000000000001"});
		const boolPGaQ4tm = await DJCoinkNhVz6J.transfer.call(addressk3yiWjk, uintlMKW8Ea, {from: accounts[0]});
//		const boolj2PWc5W = await DJCoinkNhVz6J.transfer.call(addressd2yVdV, uintDHfFsfo, {from: accounts[3]});
//		await DJCoinkNhVz6J.renounceOwnership.call({from: accounts[2]});
//		await DJCoinkNhVz6J.onlyOwner.call({from: accounts[2]});

		assert.equal(boolOVMypUH, true)
		assert.equal(boolPGaQ4tm, true)
		await expect(DJCoinkNhVz6J.transfer.call(addressd2yVdV, uintDHfFsfo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinkNhVz6J = await DJCoin.new({from: accounts[0]});
		const uintoY45Zk5 = BigInt("647")
		const addressXqSJY3O = "0x0000000000000000000000000000000000000001"
		const uintXnfmkvf = BigInt("1371")
		const address6M4skQ = accounts[3]
		const uintIJ96OPz = BigInt("446")
		const addressnLiRmSP = accounts[3]
		const uintyJmYNgS = BigInt("1166")
		const uintd4jrT8 = BigInt("388")
		const boolOVMypUH = await DJCoinkNhVz6J.approve.call(addressXqSJY3O, uintoY45Zk5, {from: "0x0000000000000000000000000000000000000001"});
		const boolymTBEhb = await DJCoinkNhVz6J.decreaseAllowance.call(address6M4skQ, uintXnfmkvf, {from: accounts[2]});
		const boolPGaQ4tm = await DJCoinkNhVz6J.transfer.call(addressnLiRmSP, uintIJ96OPz, {from: accounts[0]});
//		const uint256EH0HQ63 = await DJCoinkNhVz6J.burn.call(uintd4jrT8, uintyJmYNgS, {from: accounts[4]});

		assert.equal(boolOVMypUH, true)
		assert.equal(boolPGaQ4tm, true)
		assert.equal(boolymTBEhb, true)
		await expect(DJCoinkNhVz6J.burn.call(uintd4jrT8, uintyJmYNgS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinkNhVz6J = await DJCoin.new({from: accounts[0]});
		const uintl2JvodJ = BigInt("658")
		const addressKeeamt6 = "0x0000000000000000000000000000000000000002"
		const uintKmrwpo4 = BigInt("446")
		const addresszIyWYXU = accounts[3]
		const boolOVMypUH = await DJCoinkNhVz6J.approve.call(addressKeeamt6, uintl2JvodJ, {from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinkNhVz6J.renounceOwnership.call({from: accounts[0]});
//		const addressKOpdLz = await DJCoinkNhVz6J.owner.call({from: accounts[2]});
//		const boolPGaQ4tm = await DJCoinkNhVz6J.transfer.call(addresszIyWYXU, uintKmrwpo4, {from: accounts[0]});
//		await DJCoinkNhVz6J.renounceOwnership.call({from: accounts[2]});

		assert.equal(boolOVMypUH, true)
		await expect(DJCoinkNhVz6J.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinRiOWUh = await DJCoin.new({from: accounts[3]});
		const addressYBuRyQT = accounts[1]
		const addressNPUg7gI = accounts[5]
		const uintip2iWx3 = BigInt("1771")
		const addresskiEEfic = accounts[0]
		const uinteb06eOL = BigInt("758")
		const addressrlmATx = accounts[1]
		const addressrZUaKfo = accounts[0]
		const uint256yWzJcTP = await DJCoinRiOWUh.allowance.call(addressNPUg7gI, addressYBuRyQT, {from: accounts[1]});
		const boolXdBQKgV = await DJCoinRiOWUh.approve.call(addresskiEEfic, uintip2iWx3, {from: accounts[0]});
		const uint256SBauZuh = await DJCoinRiOWUh.totalSupply.call({from: accounts[4]});
//		const booltWS6lxc = await DJCoinRiOWUh.transferFrom.call(addressrZUaKfo, addressrlmATx, uinteb06eOL, {from: accounts[4]});

		assert.equal(boolXdBQKgV, true)
		assert.equal(uint256SBauZuh, BigInt("2100000000000"))
		assert.equal(uint256yWzJcTP, BigInt("0"))
		await expect(DJCoinRiOWUh.transferFrom.call(addressrZUaKfo, addressrlmATx, uinteb06eOL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinkNhVz6J = await DJCoin.new({from: accounts[0]});
		const addressfIwBr6f = accounts[3]
		const uintluCM7AY = BigInt("446")
		const addressKv6vY6d = accounts[5]
		const addresspuaRyhY = await DJCoinkNhVz6J.transferOwnership.call(addressfIwBr6f, {from: accounts[0]});
		const boolPGaQ4tm = await DJCoinkNhVz6J.transfer.call(addressKv6vY6d, uintluCM7AY, {from: accounts[0]});

		assert.equal(boolPGaQ4tm, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinkNhVz6J = await DJCoin.new({from: accounts[0]});
		const uintVuzj0zL = BigInt("302")
		const addressoPzGpQD = accounts[0]
		const uintjHV8L7q = BigInt("1474")
		const uintLZAxFK0 = BigInt("1148")
		const uintdmgW1ws = BigInt("455")
		const addressZR9lxgf = accounts[4]
		const boolwm2F4kb = await DJCoinkNhVz6J.decreaseAllowance.call(addressoPzGpQD, uintVuzj0zL, {from: accounts[0]});
		const uint256qfjbfH2 = await DJCoinkNhVz6J.burn.call(uintLZAxFK0, uintjHV8L7q, {from: accounts[0]});
		const boolPGaQ4tm = await DJCoinkNhVz6J.transfer.call(addressZR9lxgf, uintdmgW1ws, {from: accounts[0]});

		assert.equal(boolPGaQ4tm, true)
		assert.equal(boolwm2F4kb, true)
		assert.equal(uint256qfjbfH2, BigInt("1790460000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinZKckLqQ = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintO6oRIm = BigInt("714")
		const uintCllvPQ9 = BigInt("721")
		const uintnvVibe = BigInt("203")
		const addressvuFQ4OR = accounts[4]
		const addressVvv4wLd = accounts[3]
		const uint256lBaqUCn = await DJCoinZKckLqQ.burn.call(uintCllvPQ9, uintO6oRIm, {from: accounts[3]});
		const boolAQtgFIV = await DJCoinZKckLqQ.transfer.call(addressvuFQ4OR, uintnvVibe, {from: accounts[1]});
		const addressWupcGro = await DJCoinZKckLqQ.validRecipient.call(addressVvv4wLd, {from: accounts[3]});
	});

	it('test for DJCoin', async () => {
		const DJCoinkNhVz6J = await DJCoin.new({from: accounts[0]});
		const uintQnzRHNm = BigInt("0")
		const addressdbldtqW = accounts[4]
		const boolAVD6yE = await DJCoinkNhVz6J.transfer.call(addressdbldtqW, uintQnzRHNm, {from: accounts[4]});

		assert.equal(boolAVD6yE, true)
	});
})