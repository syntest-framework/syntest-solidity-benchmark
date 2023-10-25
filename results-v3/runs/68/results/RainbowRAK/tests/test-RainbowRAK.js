const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKPyTXK4D = await RainbowRAK.new({from: accounts[0]});
		const uintXEGPap = BigInt("1845")
		const uint256SgZ1eB8 = await RainbowRAKPyTXK4D.unstake.call(uintXEGPap, {from: accounts[0]});
		const uint256AEL0IKu = await RainbowRAKPyTXK4D.rewardPerToken.call({from: accounts[1]});
		await RainbowRAKPyTXK4D.onlyOwner.call({from: accounts[5]});

		await expect(RainbowRAKPyTXK4D.unstake.call(uintXEGPap, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKtRKEkD = await RainbowRAK.new({from: accounts[3]});
		const uinteymSWbQ = BigInt("1554")
		const addressarrayWwNLLK3 = await RainbowRAKtRKEkD.getCommunity.call({from: accounts[0]});
		const uint256WnzsZAP = await RainbowRAKtRKEkD.stake.call(uinteymSWbQ, {from: accounts[3]});
		const addressarrayLFoaQnI = await RainbowRAKtRKEkD.getCommunity.call({from: accounts[0]});
		await RainbowRAKtRKEkD.renounceOwnership.call({from: accounts[3]});

		assert.equal(addressarrayWwNLLK3, )
		await expect(RainbowRAKtRKEkD.stake.call(uinteymSWbQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKhNsmRen = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFVlLvt5 = "0x0000000000000000000000000000000000000001"
		const addressX9ZKZm5 = accounts[5]
		const addressU021X2V = await RainbowRAKhNsmRen.updateReward.call(addressFVlLvt5, {from: accounts[3]});
		const boolsSKofTy = await RainbowRAKhNsmRen.isOwner.call({from: accounts[2]});
		const uint256dshWpCq = await RainbowRAKhNsmRen.earned.call(addressX9ZKZm5, {from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAKhNsmRen.claimRewards.call({from: accounts[0]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKTCqQGOf = await RainbowRAK.new({from: accounts[2]});
		const uintK2w7C2v = BigInt("1901")
		const uintl8yuf4A = BigInt("1555")
		const uint256GZHZ7lN = await RainbowRAKTCqQGOf.notifyRewardAmount.call(uintK2w7C2v, {from: accounts[4]});
		const uint256QgXHTVr = await RainbowRAKTCqQGOf.getCurrentRewardReserve.call({from: accounts[0]});
		await RainbowRAKTCqQGOf.claimRewards.call({from: accounts[4]});
		const uint256e8nRShL = await RainbowRAKTCqQGOf.unstake.call(uintl8yuf4A, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKTCqQGOf.notifyRewardAmount.call(uintK2w7C2v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKJXkqpML = await RainbowRAK.new({from: accounts[0]});
		const addresslakvjiO = accounts[4]
		const uintQ5uMy8g = BigInt("1961")
		const addresszzBGrsT = accounts[4]
		const uint256Pc7Am9U = await RainbowRAKJXkqpML.earned.call(addresslakvjiO, {from: accounts[0]});
		const uint256ortKHpu = await RainbowRAKJXkqpML.getCurrentRewardReserve.call({from: accounts[1]});
		const uint256P650IwE = await RainbowRAKJXkqpML.stake.call(uintQ5uMy8g, {from: accounts[3]});
		const uint256MTltgbJ = await RainbowRAKJXkqpML.getCurrentRewardReserve.call({from: accounts[4]});
		const uint256bQzx2d1 = await RainbowRAKJXkqpML.earned.call(addresszzBGrsT, {from: accounts[2]});

		assert.equal(uint256Pc7Am9U, BigInt("0"))
		assert.equal(uint256ortKHpu, BigInt("0"))
		await expect(RainbowRAKJXkqpML.stake.call(uintQ5uMy8g, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKPyTXK4D = await RainbowRAK.new({from: accounts[0]});
		const uintkNuGerh = BigInt("1231")
		const uintE2bIpih = BigInt("1845")
		const uintoREdE8Z = BigInt("402")
		const addressu6E0CPh = await RainbowRAKPyTXK4D.owner.call({from: accounts[1]});
		const uint256DnChMv4 = await RainbowRAKPyTXK4D.unstake.call(uintkNuGerh, {from: accounts[2]});
		const uint256SgZ1eB8 = await RainbowRAKPyTXK4D.unstake.call(uintE2bIpih, {from: accounts[0]});
		const uint256AEL0IKu = await RainbowRAKPyTXK4D.rewardPerToken.call({from: accounts[1]});
		const uint2569xrnwY = await RainbowRAKPyTXK4D.unstake.call(uintoREdE8Z, {from: accounts[4]});
		await RainbowRAKPyTXK4D.onlyOwner.call({from: accounts[5]});

		assert.equal(addressu6E0CPh, 0xc01285e926d4c9a67acd45911eDF2D2E6EB860a7)
		await expect(RainbowRAKPyTXK4D.unstake.call(uintkNuGerh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKPw7aLm9 = await RainbowRAK.new({from: accounts[0]});
		const addressarraynZnykG = await RainbowRAKPw7aLm9.getCommunity.call({from: accounts[3]});
		await RainbowRAKPw7aLm9.claimRewards.call({from: accounts[4]});

		assert.equal(addressarraynZnykG, )
		await expect(RainbowRAKPw7aLm9.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKahCYhTn = await RainbowRAK.new({from: accounts[4]});
		const uintQIUJUt9 = BigInt("119")
		const uintUFarASI = BigInt("41")
		const uint256s5lXce = await RainbowRAKahCYhTn.lastTimeRewardApplicable.call({from: accounts[0]});
		await RainbowRAKahCYhTn.onlyOwner.call({from: accounts[0]});
		const uint256ogFoo9d = await RainbowRAKahCYhTn.unstake.call(uintQIUJUt9, {from: accounts[2]});
		const uint256HSl6pk = await RainbowRAKahCYhTn.stake.call(uintUFarASI, {from: accounts[3]});
		await RainbowRAKahCYhTn.claimRewards.call({from: accounts[4]});
		await RainbowRAKahCYhTn.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256s5lXce, BigInt("0"))
		await expect(RainbowRAKahCYhTn.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKhQrUaJA = await RainbowRAK.new({from: accounts[3]});
		const addressVX6rAaz = accounts[3]
		const uintAleb61i = BigInt("738")
		const addressl4XJzTx = accounts[4]
		await RainbowRAKhQrUaJA.renounceOwnership.call({from: accounts[3]});
		const addressw3Zc7wV = await RainbowRAKhQrUaJA.transferOwnership.call(addressVX6rAaz, {from: accounts[2]});
		const uint256AJWumEz = await RainbowRAKhQrUaJA.notifyRewardAmount.call(uintAleb61i, {from: accounts[1]});
		const uint256MO7S21C = await RainbowRAKhQrUaJA.earned.call(addressl4XJzTx, {from: accounts[4]});
		await RainbowRAKhQrUaJA.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKhQrUaJA.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKyfndfvu = await RainbowRAK.new({from: accounts[4]});
		const uintrMRXFzY = BigInt("392")
		const booltUSAIel = await RainbowRAKyfndfvu.isOwner.call({from: accounts[3]});
		await RainbowRAKyfndfvu.exit.call({from: accounts[3]});
		const uint2561WLn29 = await RainbowRAKyfndfvu.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256w2Oi47P = await RainbowRAKyfndfvu.stake.call(uintrMRXFzY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booltUSAIel, false)
		await expect(RainbowRAKyfndfvu.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKttGrrQ8 = await RainbowRAK.new({from: accounts[2]});
		const uinthIhRuO = BigInt("1374")
		const uint256lpj3uxg = await RainbowRAKttGrrQ8.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256jfvqNA4 = await RainbowRAKttGrrQ8.rewardPerToken.call({from: accounts[1]});
		await RainbowRAKttGrrQ8.renounceOwnership.call({from: accounts[2]});
		const uint256pIv1EVm = await RainbowRAKttGrrQ8.notifyRewardAmount.call(uinthIhRuO, {from: accounts[2]});

		assert.equal(uint256jfvqNA4, BigInt("0"))
		assert.equal(uint256lpj3uxg, BigInt("0"))
		await expect(RainbowRAKttGrrQ8.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKPw7aLm9 = await RainbowRAK.new({from: accounts[0]});
		const addressyNPOXHx = accounts[1]
		const addressOccc4ar = await RainbowRAKPw7aLm9.transferOwnership.call(addressyNPOXHx, {from: accounts[0]});
		await RainbowRAKPw7aLm9.claimRewards.call({from: accounts[4]});

		await expect(RainbowRAKPw7aLm9.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})