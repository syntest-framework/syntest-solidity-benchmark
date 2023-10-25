const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinjuzVPo = await DJCoin.new({from: accounts[1]});
		const uintJ9Ee068 = BigInt("1673")
		const addressXJeMXdi = accounts[0]
//		await DJCoinjuzVPo.onlyOwner.call({from: accounts[3]});
//		const boolKHGa4oY = await DJCoinjuzVPo.increaseAllowance.call(addressXJeMXdi, uintJ9Ee068, {from: accounts[0]});

		await expect(DJCoinjuzVPo.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinmsPFXd0 = await DJCoin.new({from: accounts[2]});
		const uintzVE4F3 = BigInt("111")
		const addressl7vdUtk = accounts[2]
		const addressUfgfwQ = accounts[4]
		const addressk33DVAT = accounts[0]
		const boolnhzQ7h = await DJCoinmsPFXd0.approve.call(addressl7vdUtk, uintzVE4F3, {from: accounts[1]});
		const addressWXEWpsr = await DJCoinmsPFXd0.owner.call({from: accounts[4]});
		const addressAIYCcDb = await DJCoinmsPFXd0.transferOwnership.call(addressUfgfwQ, {from: accounts[2]});
//		const addressRkNs6Dd = await DJCoinmsPFXd0.validRecipient.call(addressk33DVAT, {from: accounts[3]});
//		await DJCoinmsPFXd0.onlyOwner.call({from: accounts[2]});

		assert.equal(addressWXEWpsr, 0xDFe82703C9ae3Fcf4a2d0E1c579D531b6C82Bd4A)
		assert.equal(boolnhzQ7h, true)
		await expect(DJCoinmsPFXd0.validRecipient.call(addressk33DVAT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinjEewsfH = await DJCoin.new({from: accounts[3]});
		const uintB2rfdW = BigInt("1194")
		const address0WVecK = "0x0000000000000000000000000000000000000001"
		const uintImtAJfy = BigInt("177")
		const addressexSbM91 = accounts[4]
		const addressW9md8vA = accounts[4]
		const addressZFgg5Pm = accounts[2]
		const boolhRkmhiH = await DJCoinjEewsfH.decreaseAllowance.call(address0WVecK, uintB2rfdW, {from: accounts[3]});
		const boolCiBAar = await DJCoinjEewsfH.decreaseAllowance.call(addressexSbM91, uintImtAJfy, {from: accounts[3]});
		const uint256cfurWVI = await DJCoinjEewsfH.allowance.call(addressZFgg5Pm, addressW9md8vA, {from: accounts[1]});

		assert.equal(boolCiBAar, true)
		assert.equal(boolhRkmhiH, true)
		assert.equal(uint256cfurWVI, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinpAYFN8 = await DJCoin.new({from: accounts[4]});
		const addressVS3nPHg = accounts[2]
		const uintl6yb8YM = BigInt("1398")
		const addressfKMqq6E = accounts[3]
		const uintzbvsWmd = BigInt("1562")
		const addressa6yDiWM = accounts[5]
		const uint256VhqtolV = await DJCoinpAYFN8.balanceOf.call(addressVS3nPHg, {from: accounts[5]});
		const boolU4tFhsq = await DJCoinpAYFN8.approve.call(addressfKMqq6E, uintl6yb8YM, {from: accounts[4]});
		const boolDbwZSdD = await DJCoinpAYFN8.increaseAllowance.call(addressa6yDiWM, uintzbvsWmd, {from: accounts[3]});

		assert.equal(boolDbwZSdD, true)
		assert.equal(boolU4tFhsq, true)
		assert.equal(uint256VhqtolV, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinP5bGpI9 = await DJCoin.new({from: accounts[4]});
		const uintztedVbO = BigInt("700")
		const addressgUCaAvN = accounts[3]
		const addressODpaxoD = accounts[3]
		const uintTpOIhtO = BigInt("1445")
		const addressmJNFPFt = accounts[4]
		const uintHIZa9h = BigInt("828")
		const addressn2WanS1 = accounts[1]
		const uint256F9dkjm = await DJCoinP5bGpI9.totalSupply.call({from: accounts[2]});
		const boolCHbKDz1 = await DJCoinP5bGpI9.decreaseAllowance.call(addressgUCaAvN, uintztedVbO, {from: accounts[1]});
//		const addressOZnkGhg = await DJCoinP5bGpI9.validRecipient.call(addressODpaxoD, {from: accounts[2]});
//		await DJCoinP5bGpI9.renounceOwnership.call({from: accounts[1]});
//		const booloJW33T = await DJCoinP5bGpI9.approve.call(addressmJNFPFt, uintTpOIhtO, {from: accounts[4]});
//		const boolfVOJnpZ = await DJCoinP5bGpI9.approve.call(addressn2WanS1, uintHIZa9h, {from: accounts[4]});

		assert.equal(boolCHbKDz1, true)
		assert.equal(uint256F9dkjm, BigInt("2100000000000"))
		await expect(DJCoinP5bGpI9.validRecipient.call(addressODpaxoD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinByE0NB = await DJCoin.new({from: accounts[4]});
		const uintUigm340 = BigInt("813")
		const uintqlqyTqN = BigInt("1588")
		const addressd8ZBH8d = accounts[0]
		const addressyjzdp62 = accounts[2]
		const addressMgqfMGv = accounts[2]
		const uintgJu8HBi = BigInt("1399")
		const addressOYox4Om = accounts[2]
		const addressptwYvdh = accounts[1]
//		const uint256yS1NJ5T = await DJCoinByE0NB.burn.call(uintqlqyTqN, uintUigm340, {from: accounts[0]});
//		const uint256AO6SAot = await DJCoinByE0NB.allowance.call(addressyjzdp62, addressd8ZBH8d, {from: accounts[2]});
//		await DJCoinByE0NB.onlyOwner.call({from: accounts[2]});
//		const uint256npgVLKq = await DJCoinByE0NB.balanceOf.call(addressMgqfMGv, {from: accounts[5]});
//		const boolGFPyFfw = await DJCoinByE0NB.approve.call(addressOYox4Om, uintgJu8HBi, {from: accounts[1]});
//		const addressQqA4rK = await DJCoinByE0NB.transferOwnership.call(addressptwYvdh, {from: accounts[2]});

		await expect(DJCoinByE0NB.burn.call(uintqlqyTqN, uintUigm340, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinIfDUsu0 = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGi9IAZq = accounts[1]
		const uintOwaZZsV = BigInt("1587")
		const uintGGz7oo = BigInt("1749")
		const addresszGtP5A = accounts[1]
		const addressX6i3IkZ = await DJCoinIfDUsu0.transferOwnership.call(addressGi9IAZq, {from: accounts[5]});
		const uint256hiqDPfz = await DJCoinIfDUsu0.burn.call(uintGGz7oo, uintOwaZZsV, {from: accounts[3]});
		const addresseemC8ae = await DJCoinIfDUsu0.validRecipient.call(addresszGtP5A, {from: accounts[3]});
	});

	it('test for DJCoin', async () => {
		const DJCoinjuzVPo = await DJCoin.new({from: accounts[1]});
		const uintc70m4MU = BigInt("1503")
		const addressIgCGMG0 = accounts[2]
		const addressbwC3VGZ = accounts[3]
		const uintIa0CVZP = BigInt("138")
		const addressjm77y95 = "0x0000000000000000000000000000000000000001"
//		const boolo8fDssk = await DJCoinjuzVPo.transferFrom.call(addressbwC3VGZ, addressIgCGMG0, uintc70m4MU, {from: accounts[4]});
//		await DJCoinjuzVPo.onlyOwner.call({from: accounts[3]});
//		const boolHgH2v0D = await DJCoinjuzVPo.increaseAllowance.call(addressjm77y95, uintIa0CVZP, {from: accounts[1]});

		await expect(DJCoinjuzVPo.transferFrom.call(addressbwC3VGZ, addressIgCGMG0, uintc70m4MU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinjuzVPo = await DJCoin.new({from: accounts[1]});
		const uintKrTeGcR = BigInt("236")
		const uintqzXwTMf = BigInt("609")
		const uint256T0kSYf3 = await DJCoinjuzVPo.totalSupply.call({from: accounts[4]});
		const uint256wi2Ls6f = await DJCoinjuzVPo.burn.call(uintqzXwTMf, uintKrTeGcR, {from: accounts[1]});
//		await DJCoinjuzVPo.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256T0kSYf3, BigInt("2100000000000"))
		assert.equal(uint256wi2Ls6f, BigInt("2050440000000"))
		await expect(DJCoinjuzVPo.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinjuzVPo = await DJCoin.new({from: accounts[1]});
		const addressJKUrblT = accounts[2]
		const addressedoJ8wS = accounts[0]
		const uintFVbXf2t = BigInt("994")
		const addresszVIm1K = accounts[3]
		const uintsLfV9Si = BigInt("37")
		const addressc9V83aY = accounts[5]
		const addressOJCKmBp = accounts[1]
		const uint256OMOMjdc = await DJCoinjuzVPo.allowance.call(addressedoJ8wS, addressJKUrblT, {from: accounts[2]});
//		const boolksRjZkd = await DJCoinjuzVPo.transfer.call(addresszVIm1K, uintFVbXf2t, {from: accounts[0]});
//		const boolqY5dGpY = await DJCoinjuzVPo.transferFrom.call(addressOJCKmBp, addressc9V83aY, uintsLfV9Si, {from: accounts[1]});
//		await DJCoinjuzVPo.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256OMOMjdc, BigInt("0"))
		await expect(DJCoinjuzVPo.transfer.call(addresszVIm1K, uintFVbXf2t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinlCjUWzS = await DJCoin.new({from: accounts[5]});
		const uintABQz5mc = BigInt("1430")
		const addressSz3Dmoe = accounts[5]
		const uintJgGHTs9 = BigInt("1789")
		const addressCEpGk1h = accounts[3]
		const uintwgqjplz = BigInt("1360")
		const addressGiwT2X8 = accounts[2]
		const boolmLEkIqH = await DJCoinlCjUWzS.decreaseAllowance.call(addressSz3Dmoe, uintABQz5mc, {from: accounts[2]});
		const boolrWHm9Bj = await DJCoinlCjUWzS.increaseAllowance.call(addressCEpGk1h, uintJgGHTs9, {from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinlCjUWzS.renounceOwnership.call({from: accounts[5]});
//		const boolJAGx940 = await DJCoinlCjUWzS.transfer.call(addressGiwT2X8, uintwgqjplz, {from: accounts[3]});
//		await DJCoinlCjUWzS.renounceOwnership.call({from: accounts[0]});

		assert.equal(boolmLEkIqH, true)
		assert.equal(boolrWHm9Bj, true)
		await expect(DJCoinlCjUWzS.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinjuzVPo = await DJCoin.new({from: accounts[1]});
		const addressygkZdUk = accounts[3]
		const uintz4NjGFX = BigInt("1962")
		const uint256JSlV0Sp = await DJCoinjuzVPo.balanceOf.call(addressygkZdUk, {from: accounts[4]});
		const booljWE8FKf = await DJCoinjuzVPo.changetokensPerBlock.call(uintz4NjGFX, {from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinjuzVPo.onlyOwner.call({from: accounts[3]});

		assert.equal(booljWE8FKf, true)
		assert.equal(uint256JSlV0Sp, BigInt("0"))
		await expect(DJCoinjuzVPo.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinjuzVPo = await DJCoin.new({from: accounts[1]});
		const uintbZxHtKd = BigInt("593")
		const addressZ1ipNtg = accounts[0]
		const uintXCmXXQv = BigInt("0")
		const addressfMZqaF2 = accounts[6]
		const boolW11FoR4 = await DJCoinjuzVPo.decreaseAllowance.call(addressZ1ipNtg, uintbZxHtKd, {from: accounts[2]});
		const boolLOaxRJE = await DJCoinjuzVPo.transfer.call(addressfMZqaF2, uintXCmXXQv, {from: accounts[1]});

		assert.equal(boolLOaxRJE, true)
		assert.equal(boolW11FoR4, true)
	});
})