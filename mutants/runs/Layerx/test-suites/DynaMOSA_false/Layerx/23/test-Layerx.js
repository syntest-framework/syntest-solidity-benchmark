const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressegufGY = accounts[2]
		const LayerxuoEm5Kz = await Layerx.new(addressegufGY, {from: accounts[4]});
		const uintLgvM3bG = BigInt("1705")
		const addressDC9DeIi = accounts[4]
		const addressdPnGW4X = accounts[2]
		const addressRMJqo9g = accounts[0]
		const boolVw0bIWo = await LayerxuoEm5Kz.approve.call(addressDC9DeIi, uintLgvM3bG, {from: accounts[5]});
		const uintDHqcLnW = await LayerxuoEm5Kz.allowance.call(addressRMJqo9g, addressdPnGW4X, {from: accounts[0]});
		await LayerxuoEm5Kz.paused.call({from: accounts[2]});
		await LayerxuoEm5Kz.f.call({from: accounts[1]});

		assert.equal(boolVw0bIWo, true)
		assert.equal(uintDHqcLnW, BigInt("0"))
		await expect(LayerxuoEm5Kz.paused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressDLQChDG = accounts[2]
		const LayerxxmTbjK = await Layerx.new(addressDLQChDG, {from: accounts[1]});
		const address3X988M = accounts[2]
		const addressnhPwqW9 = accounts[1]
		const uintB1obx4q = BigInt("961")
		const addressDcp4wdk = accounts[4]
		await LayerxxmTbjK.unlock.call({from: accounts[0]});
		const uintVSHOEJ7 = await LayerxxmTbjK.balanceOf.call(address3X988M, {from: accounts[4]});
		const addressvhGy9Qv = await LayerxxmTbjK.setNewStakeCreator.call(addressnhPwqW9, {from: accounts[3]});
		const boolJ8GLpGg = await LayerxxmTbjK.transfer.call(addressDcp4wdk, uintB1obx4q, {from: accounts[4]});

		await expect(LayerxxmTbjK.unlock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressbfWrAiC = accounts[3]
		const Layerxdr01Lf = await Layerx.new(addressbfWrAiC, {from: accounts[3]});
		const uintkE5x0uT = BigInt("200")
		const addressZahm0HG = accounts[0]
		const booltFvbRjy = false
		const uintskTXWDD = BigInt("24")
		const uintjeCsnBe = await Layerxdr01Lf.withdraw.call(uintkE5x0uT, {from: accounts[5]});
		const addressPLs9Yo5 = await Layerxdr01Lf.transferOwnership.call(addressZahm0HG, {from: accounts[4]});
		const uintMoKVx4g = await Layerxdr01Lf.totalSupply.call({from: accounts[4]});
		const boolZxaCinH = await Layerxdr01Lf.setIsPaused.call(booltFvbRjy, {from: accounts[2]});
		const uintHNp2ZWG = await Layerxdr01Lf.withdraw.call(uintskTXWDD, {from: accounts[1]});

		await expect(Layerxdr01Lf.withdraw.call(uintkE5x0uT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressLnOrRZd = accounts[0]
		const LayerxcYq9jFi = await Layerx.new(addressLnOrRZd, {from: accounts[3]});
		const uintTm7shWK = BigInt("1278")
		const uints9BEUHx = BigInt("1109")
		const uintNv58hni = BigInt("1711")
		const uint256pNWX6D5 = await LayerxcYq9jFi.burn.call(uintTm7shWK, {from: accounts[0]});
		const uintd07aQRH = await LayerxcYq9jFi.lock.call(uints9BEUHx, {from: accounts[3]});
		const uintQu4spS1 = await LayerxcYq9jFi.exist.call(uintNv58hni, {from: accounts[2]});

		await expect(LayerxcYq9jFi.lock.call(uints9BEUHx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressgztfbbF = accounts[2]
		const LayerxXyGyrar = await Layerx.new(addressgztfbbF, {from: accounts[0]});
		const byteERxGEW7 = "0x1020132018091b031c0d0a14"
		const uintm0NDYzh = BigInt("604")
		const addressZ0VWhSW = accounts[1]
		const addressATLOUeu = "0x0000000000000000000000000000000000000001"
		const bytembuTwCj = "0x12"
		const uintJmYKaQi = BigInt("399")
		const addressP8dpW1R = accounts[4]
		const addressJyZwKi8 = "0x0000000000000000000000000000000000000001"
		const uinteDpKj6N = BigInt("1836")
		const booluJmwrOv = await LayerxXyGyrar.approveAndCall.call(addressZ0VWhSW, uintm0NDYzh, byteERxGEW7, {from: accounts[3]});
		const uintf08qSC = await LayerxXyGyrar.getStakesNum.call({from: accounts[2]});
		const addressqhtnz7S = await LayerxXyGyrar.setNewStakeCreator.call(addressATLOUeu, {from: accounts[3]});
		const boolrd1IU1G = await LayerxXyGyrar.approveAndCall.call(addressP8dpW1R, uintJmYKaQi, bytembuTwCj, {from: accounts[5]});
		const addressnX6ZGSk = await LayerxXyGyrar.transferOwnership.call(addressJyZwKi8, {from: accounts[0]});
		const uintW3w6r1 = await LayerxXyGyrar.exist.call(uinteDpKj6N, {from: accounts[4]});

		await expect(LayerxXyGyrar.approveAndCall.call(addressZ0VWhSW, uintm0NDYzh, byteERxGEW7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressl6QdyqW = accounts[2]
		const LayerxojRwR7 = await Layerx.new(addressl6QdyqW, {from: accounts[4]});
		const uintYevJ03N = BigInt("1189")
		const addressRSFi0Dp = accounts[3]
		const boolcEhwaBz = true
		const uintjdHoWPg = BigInt("533")
		const bool11DKDl = await LayerxojRwR7.transfer.call(addressRSFi0Dp, uintYevJ03N, {from: accounts[3]});
		const boolecbTaqp = await LayerxojRwR7.setIsPaused.call(boolcEhwaBz, {from: accounts[0]});
		await LayerxojRwR7.addStakePayment.call({from: accounts[4]});
		await LayerxojRwR7.paused.call({from: accounts[4]});
		const uintaqtj8HF = await LayerxojRwR7.lock.call(uintjdHoWPg, {from: accounts[5]});

		await expect(LayerxojRwR7.transfer.call(addressRSFi0Dp, uintYevJ03N, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressNQPj389 = accounts[0]
		const Layerxt1S91D3 = await Layerx.new(addressNQPj389, {from: accounts[0]});
		const addressu6YYbpY = accounts[2]
		const uintQQTQ1ax = await Layerxt1S91D3.balanceOf.call(addressu6YYbpY, {from: accounts[5]});
		await Layerxt1S91D3.unlock.call({from: accounts[0]});

		assert.equal(uintQQTQ1ax, BigInt("0"))
		await expect(Layerxt1S91D3.unlock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressGMqtDZ0 = accounts[0]
		const Layerxt1S91D3 = await Layerx.new(addressGMqtDZ0, {from: accounts[0]});
		const uintCJUHYra = BigInt("907")
		const addressKXLFmiv = accounts[4]
		const uintaD6d08o = BigInt("1396")
		const uintzx8ByQo = await Layerxt1S91D3.getStakesNum.call({from: accounts[4]});
		const boolG65xeOa = await Layerxt1S91D3.transfer.call(addressKXLFmiv, uintCJUHYra, {from: accounts[2]});
		const uintpdsXPLD = await Layerxt1S91D3.exist.call(uintaD6d08o, {from: accounts[2]});

		assert.equal(uintzx8ByQo, BigInt("1"))
		await expect(Layerxt1S91D3.transfer.call(addressKXLFmiv, uintCJUHYra, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressa8D2yzA = accounts[4]
		const LayerxUomBZBW = await Layerx.new(addressa8D2yzA, {from: accounts[5]});
		const addressc6IZ7Xy = accounts[0]
		const addressFQy2jcf = accounts[2]
		const uintsXFejB4 = BigInt("837")
		const addressAiwRWmJ = accounts[5]
		const uintA58H4Fc = await LayerxUomBZBW.totalSupply.call({from: accounts[3]});
		const addressYgPpGN = await LayerxUomBZBW.setNewStakeCreator.call(addressc6IZ7Xy, {from: accounts[1]});
		const addressr7OOZXF = await LayerxUomBZBW.setNewStakeCreator.call(addressFQy2jcf, {from: accounts[4]});
		const uintODQBwfu = await LayerxUomBZBW.exist.call(uintsXFejB4, {from: accounts[5]});
		await LayerxUomBZBW.addStakePayment.call({from: accounts[1]});
		const addressJggIX3M = await LayerxUomBZBW.setNewStakeCreator.call(addressAiwRWmJ, {from: accounts[1]});

		assert.equal(uintA58H4Fc, BigInt("40000000000000000000000"))
		await expect(LayerxUomBZBW.setNewStakeCreator.call(addressc6IZ7Xy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressyTgOiSl = accounts[0]
		const Layerxt1S91D3 = await Layerx.new(addressyTgOiSl, {from: accounts[0]});
		const addresscQCovrL = accounts[3]
		await Layerxt1S91D3.addStakePayment.call({from: accounts[5]});
		const addresskeQZPzO = await Layerxt1S91D3.transferOwnership.call(addresscQCovrL, {from: accounts[2]});
		await Layerxt1S91D3.unlock.call({from: accounts[0]});

		await expect(Layerxt1S91D3.addStakePayment.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressGEsuHC = accounts[3]
		const Layerx98Oxjw = await Layerx.new(addressGEsuHC, {from: accounts[2]});
		const addressFj1J083 = accounts[3]
		await Layerx98Oxjw.addStakePayment.call({from: accounts[3]});
		const addresstJfNJLo = await Layerx98Oxjw.setNewStakeCreator.call(addressFj1J083, {from: accounts[4]});

		await expect(Layerx98Oxjw.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressNFbhze = accounts[0]
		const LayerxcYq9jFi = await Layerx.new(addressNFbhze, {from: accounts[3]});
		const uintzCRbiwa = BigInt("489")
		const addressvCU2UJo = accounts[0]
		const addressRjoFqoj = accounts[1]
		const uintaFNzIGO = BigInt("247")
		const uintM0BJMxZ = BigInt("1109")
		const uintQi832IS = BigInt("1711")
		const boolZykX94Q = await LayerxcYq9jFi.transferFrom.call(addressRjoFqoj, addressvCU2UJo, uintzCRbiwa, {from: accounts[1]});
		const uintJ63LqcB = await LayerxcYq9jFi.getStakesNum.call({from: accounts[5]});
		const uintXoUHO1x = await LayerxcYq9jFi.lock.call(uintaFNzIGO, {from: accounts[4]});
		const uintd07aQRH = await LayerxcYq9jFi.lock.call(uintM0BJMxZ, {from: accounts[3]});
		const uintQu4spS1 = await LayerxcYq9jFi.exist.call(uintQi832IS, {from: accounts[2]});

		await expect(LayerxcYq9jFi.transferFrom.call(addressRjoFqoj, addressvCU2UJo, uintzCRbiwa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressV0nzsxS = accounts[3]
		const Layerx98Oxjw = await Layerx.new(addressV0nzsxS, {from: accounts[2]});
		const boolzMKSVc3 = true
		await Layerx98Oxjw.addStakePayment.call({from: accounts[3]});
		const booltkv87T = await Layerx98Oxjw.setIsPaused.call(boolzMKSVc3, {from: accounts[3]});
		const uintdhhG2lR = await Layerx98Oxjw.totalSupply.call({from: accounts[3]});

		await expect(Layerx98Oxjw.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address9mQpeK = accounts[2]
		const LayerxQPZvJw = await Layerx.new(address9mQpeK, {from: accounts[0]});
		const addressQP3bAMa = accounts[2]
		const addressilb035H = accounts[0]
		const uinte5A9Rz = BigInt("1199")
		const uintEJLnme = await LayerxQPZvJw.allowance.call(addressilb035H, addressQP3bAMa, {from: accounts[5]});
		const uintWUZmbE8 = await LayerxQPZvJw.totalSupply.call({from: accounts[2]});
		const uintrW8cPIu = await LayerxQPZvJw.totalSupply.call({from: accounts[2]});
		await LayerxQPZvJw.f.call({from: accounts[1]});
		const uintPu7jSkl = await LayerxQPZvJw.lock.call(uinte5A9Rz, {from: accounts[4]});

		assert.equal(uintEJLnme, BigInt("0"))
		assert.equal(uintWUZmbE8, BigInt("40000000000000000000000"))
		assert.equal(uintrW8cPIu, BigInt("40000000000000000000000"))
		await expect(LayerxQPZvJw.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressqGSbTjk = accounts[0]
		const LayerxcYq9jFi = await Layerx.new(addressqGSbTjk, {from: accounts[3]});
		const uintau6okQg = BigInt("0")
		const uintXoUHO1x = await LayerxcYq9jFi.lock.call(uintau6okQg, {from: accounts[4]});

		await expect(LayerxcYq9jFi.lock.call(uintau6okQg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresscW6acE = accounts[0]
		const LayerxcYq9jFi = await Layerx.new(addresscW6acE, {from: accounts[3]});
		const addressVru315Z = accounts[2]
		const uintf2xkJIk = BigInt("673")
		const uintXGOw2P2 = BigInt("153")
		const uint3dOFFq = BigInt("403")
		const addressRInSNoS = await LayerxcYq9jFi.transferOwnership.call(addressVru315Z, {from: accounts[0]});
		const uintHTKQGM = await LayerxcYq9jFi.exist.call(uintf2xkJIk, {from: accounts[1]});
		const uintXoUHO1x = await LayerxcYq9jFi.lock.call(uintXGOw2P2, {from: accounts[4]});
		const uintEKHDk59 = await LayerxcYq9jFi.withdraw.call(uint3dOFFq, {from: accounts[5]});

		await expect(LayerxcYq9jFi.exist.call(uintf2xkJIk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressk7Ek5pq = accounts[0]
		const Layerxt1S91D3 = await Layerx.new(addressk7Ek5pq, {from: accounts[0]});
		const addressrKK4Asg = "0x0000000000000000000000000000000000000001"
		const addressjzAi8w = accounts[3]
		const addressUtqURSM = await Layerxt1S91D3.setNewStakeCreator.call(addressrKK4Asg, {from: accounts[0]});
		await Layerxt1S91D3.addStakePayment.call({from: accounts[0]});
		const uinta6f7u81 = await Layerxt1S91D3.balanceOf.call(addressjzAi8w, {from: accounts[0]});
		await Layerxt1S91D3.unlock.call({from: accounts[0]});

		await expect(Layerxt1S91D3.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressu0MWC01 = accounts[3]
		const LayerxNm1Gt4 = await Layerx.new(addressu0MWC01, {from: "0x0000000000000000000000000000000000000001"});
		const addressg6bzzHF = accounts[3]
		const addressgn7zg2q = accounts[1]
		const uintL0i8WwC = BigInt("909")
		const addresshAwy39R = accounts[3]
		const uintrijKzTV = BigInt("1393")
		const uintZFmXPgT = await LayerxNm1Gt4.allowance.call(addressgn7zg2q, addressg6bzzHF, {from: "0x0000000000000000000000000000000000000001"});
		const uintxP20xI3 = await LayerxNm1Gt4.getStakesNum.call({from: accounts[4]});
		const boolZDCXJca = await LayerxNm1Gt4.transfer.call(addresshAwy39R, uintL0i8WwC, {from: accounts[0]});
		const uintyOnRtoV = await LayerxNm1Gt4.totalSupply.call({from: accounts[4]});
		const uintv2AfKnj = await LayerxNm1Gt4.exist.call(uintrijKzTV, {from: accounts[2]});
		await LayerxNm1Gt4.unlock.call({from: accounts[4]});
	});
})