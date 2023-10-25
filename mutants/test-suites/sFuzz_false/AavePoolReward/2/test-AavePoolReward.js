const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardi5nhfgd = await AavePoolReward.new({from: accounts[4]});
		const uintQMjOGRy = BigInt("806")
		const uintTTnRg2F = BigInt("1429")
		const uintelDppGr = BigInt("38")
		const addressgm8Eox7 = accounts[2]
		const uint256IW4x8rh = await AavePoolRewardi5nhfgd.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256nk3KjIF = await AavePoolRewardi5nhfgd.withdraw.call(uintQMjOGRy, {from: accounts[2]});
//		const uint256gzNoNMS = await AavePoolRewardi5nhfgd.withdraw.call(uintTTnRg2F, {from: accounts[5]});
//		const uint256L0ZQmGp = await AavePoolRewardi5nhfgd.withdraw.call(uintelDppGr, {from: accounts[2]});
//		const uint256zsvzCws = await AavePoolRewardi5nhfgd.earned.call(addressgm8Eox7, {from: accounts[3]});

		assert.equal(uint256IW4x8rh, BigInt("0"))
		await expect(AavePoolRewardi5nhfgd.withdraw.call(uintQMjOGRy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardzY0viFY = await AavePoolReward.new({from: accounts[5]});
		const uintaCILJsf = BigInt("84")
//		await AavePoolRewardzY0viFY.exit.call({from: accounts[4]});
//		const uint256d8XMYAw = await AavePoolRewardzY0viFY.notifyRewardAmount.call(uintaCILJsf, {from: accounts[2]});
//		const uint256YGCHI6e = await AavePoolRewardzY0viFY.lastTimeRewardApplicable.call({from: accounts[0]});
//		await AavePoolRewardzY0viFY.getReward.call({from: accounts[2]});

		await expect(AavePoolRewardzY0viFY.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardIDcNviz = await AavePoolReward.new({from: accounts[5]});
		const uint3HHdxX = BigInt("1421")
		const uintM9tjU6 = BigInt("1610")
		const uinth446a9c = BigInt("73")
//		const uint256rx4V3w = await AavePoolRewardIDcNviz.stake.call(uint3HHdxX, {from: accounts[4]});
//		const uint256EbFUKi = await AavePoolRewardIDcNviz.withdraw.call(uintM9tjU6, {from: accounts[1]});
//		const uint256cgRWhFW = await AavePoolRewardIDcNviz.withdraw.call(uinth446a9c, {from: accounts[2]});

		await expect(AavePoolRewardIDcNviz.stake.call(uint3HHdxX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardnHEHCn = await AavePoolReward.new({from: accounts[0]});
		const addressa46JpXE = accounts[0]
		const uintlUDiT7l = BigInt("503")
		const addressabGGIEH = accounts[4]
		const uintXOtTVK = BigInt("970")
//		const addressOqG25D5 = await AavePoolRewardnHEHCn.updateReward.call(addressa46JpXE, {from: accounts[1]});
//		const uint256BJjYjMf = await AavePoolRewardnHEHCn.stake.call(uintlUDiT7l, {from: accounts[3]});
//		await AavePoolRewardnHEHCn.getReward.call({from: accounts[1]});
//		const uint256zTRXGOn = await AavePoolRewardnHEHCn.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256tOTG01d = await AavePoolRewardnHEHCn.earned.call(addressabGGIEH, {from: accounts[0]});
//		const uint256tZmgg5h = await AavePoolRewardnHEHCn.notifyRewardAmount.call(uintXOtTVK, {from: accounts[2]});

		await expect(AavePoolRewardnHEHCn.updateReward.call(addressa46JpXE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardZQhKufy = await AavePoolReward.new({from: accounts[4]});
		const uintf1sjRjG = BigInt("1306")
		const uint256t6HBzrT = await AavePoolRewardZQhKufy.notifyRewardAmount.call(uintf1sjRjG, {from: accounts[4]});
//		await AavePoolRewardZQhKufy.getReward.call({from: accounts[4]});

		await expect(AavePoolRewardZQhKufy.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardZQhKufy = await AavePoolReward.new({from: accounts[4]});
		const uinttFHbfOc = BigInt("1288")
		const uintEPUh1UB = BigInt("1306")
//		const uint256mjhxevJ = await AavePoolRewardZQhKufy.notifyRewardAmount.call(uinttFHbfOc, {from: accounts[2]});
//		const uint256t6HBzrT = await AavePoolRewardZQhKufy.notifyRewardAmount.call(uintEPUh1UB, {from: accounts[4]});
//		await AavePoolRewardZQhKufy.getReward.call({from: accounts[4]});

		await expect(AavePoolRewardZQhKufy.notifyRewardAmount.call(uinttFHbfOc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardC5ADGmV = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addresszQyteJ2 = accounts[1]
		const addressMhoTa7 = accounts[1]
		const uintOzaVxUF = BigInt("1249")
		const uintMsMlIE8 = BigInt("942")
		const uint256Mv4z4Vz = await AavePoolRewardC5ADGmV.earned.call(addresszQyteJ2, {from: accounts[4]});
		const addressKb6HIt = await AavePoolRewardC5ADGmV.updateReward.call(addressMhoTa7, {from: accounts[3]});
		const uint256wgEWIov = await AavePoolRewardC5ADGmV.rewardPerToken.call({from: accounts[2]});
		const uint256v1LRguD = await AavePoolRewardC5ADGmV.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256RdLSWiE = await AavePoolRewardC5ADGmV.stake.call(uintOzaVxUF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fXdEA60 = await AavePoolRewardC5ADGmV.stake.call(uintMsMlIE8, {from: accounts[3]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardeWnqphp = await AavePoolReward.new({from: accounts[2]});
		const addressjNoBUL5 = accounts[2]
		const addresstgsuse6 = accounts[0]
		const uintSYQP9dU = BigInt("1181")
		const uintThEtNaC = BigInt("1609")
//		const addressapgO9E = await AavePoolRewardeWnqphp.dev.call(addressjNoBUL5, {from: accounts[0]});
//		await AavePoolRewardeWnqphp.exit.call({from: accounts[2]});
//		const addressZfqGqD3 = await AavePoolRewardeWnqphp.updateReward.call(addresstgsuse6, {from: accounts[0]});
//		const uint256h008FbH = await AavePoolRewardeWnqphp.withdraw.call(uintSYQP9dU, {from: accounts[0]});
//		const uint256yszOffi = await AavePoolRewardeWnqphp.stake.call(uintThEtNaC, {from: accounts[3]});

		await expect(AavePoolRewardeWnqphp.dev.call(addressjNoBUL5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})