const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const address9tpIGr = accounts[0]
		const addressF2tcbfd = accounts[0]
		const uint0ovH3l = BigInt("467")
		const uintZPBaas3 = BigInt("260")
		const MisesLegacyPoollgUp119 = await MisesLegacyPool.new(address9tpIGr, addressF2tcbfd, uint0ovH3l, uintZPBaas3, {from: accounts[3]});
		const addressTcg46C2 = accounts[4]
		const uint256kl8Vhrb = await MisesLegacyPoollgUp119.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256ZCbPiMT = await MisesLegacyPoollgUp119.lastTimeRewardApplicable.call({from: accounts[5]});
//		await MisesLegacyPoollgUp119.exit.call({from: accounts[1]});
//		await MisesLegacyPoollgUp119.getReward.call({from: accounts[3]});
//		const uint256khtk5vZ = await MisesLegacyPoollgUp119.earned.call(addressTcg46C2, {from: accounts[2]});

		assert.equal(uint256ZCbPiMT, BigInt("0"))
		assert.equal(uint256kl8Vhrb, BigInt("0"))
		await expect(MisesLegacyPoollgUp119.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressf055weN = accounts[2]
		const addressI6fn5XX = accounts[1]
		const uinttVXmwNy = BigInt("1073")
		const uintujopKoc = BigInt("1340")
		const MisesLegacyPoolTzV7RoN = await MisesLegacyPool.new(addressf055weN, addressI6fn5XX, uinttVXmwNy, uintujopKoc, {from: "0x0000000000000000000000000000000000000001"});
		const addresshGK4HCV = accounts[2]
		const uintoqZJNMt = BigInt("224")
		const uintIuui4BD = BigInt("1661")
		await MisesLegacyPoolTzV7RoN.checkStart.call({from: accounts[0]});
		await MisesLegacyPoolTzV7RoN.getReward.call({from: accounts[4]});
		await MisesLegacyPoolTzV7RoN.exit.call({from: accounts[0]});
		const addressISFWeh = await MisesLegacyPoolTzV7RoN.updateReward.call(addresshGK4HCV, {from: accounts[3]});
		const uint256j1RkB6x = await MisesLegacyPoolTzV7RoN.stake.call(uintoqZJNMt, {from: accounts[5]});
		const uint256zyqiBHp = await MisesLegacyPoolTzV7RoN.stake.call(uintIuui4BD, {from: accounts[2]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressvU6G6Kc = accounts[2]
		const addressmYwD1AW = accounts[4]
		const uintvGcixO3 = BigInt("170")
		const uintdp0u7hx = BigInt("257")
		const MisesLegacyPooluyWta9A = await MisesLegacyPool.new(addressvU6G6Kc, addressmYwD1AW, uintvGcixO3, uintdp0u7hx, {from: accounts[4]});
		const addressmwtpdpy = accounts[2]
//		await MisesLegacyPooluyWta9A.checkStart.call({from: accounts[1]});
//		const uint256ejDC97 = await MisesLegacyPooluyWta9A.rewardPerToken.call({from: accounts[0]});
//		await MisesLegacyPooluyWta9A.getReward.call({from: accounts[3]});
//		await MisesLegacyPooluyWta9A.getReward.call({from: accounts[1]});
//		const addressBwLEeeG = await MisesLegacyPooluyWta9A.updateReward.call(addressmwtpdpy, {from: accounts[5]});
		await MisesLegacyPooluyWta9A.checkStart.call({from: accounts[1]});

		await expect(MisesLegacyPooluyWta9A.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressgMspsvW = accounts[3]
		const addressLIDkXzw = accounts[1]
		const uintgk8lz70 = BigInt("1731")
		const uintOqv83A = BigInt("1717")
		const MisesLegacyPoolKAHCkuH = await MisesLegacyPool.new(addressgMspsvW, addressLIDkXzw, uintgk8lz70, uintOqv83A, {from: accounts[1]});
		const uintpr64do = BigInt("195")
//		await MisesLegacyPoolKAHCkuH.getReward.call({from: accounts[0]});
//		const uint256JsHs56Q = await MisesLegacyPoolKAHCkuH.rewardPerToken.call({from: accounts[5]});
//		await MisesLegacyPoolKAHCkuH.exit.call({from: accounts[2]});
//		const uint256NlZCa8e = await MisesLegacyPoolKAHCkuH.withdraw.call(uintpr64do, {from: accounts[1]});

		await expect(MisesLegacyPoolKAHCkuH.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresslOxalYD = accounts[3]
		const addressDP6gs9C = accounts[1]
		const uintjRXgSk = BigInt("1731")
		const uintUm0KImA = BigInt("1717")
		const MisesLegacyPoolKAHCkuH = await MisesLegacyPool.new(addresslOxalYD, addressDP6gs9C, uintjRXgSk, uintUm0KImA, {from: accounts[1]});
		const uintthRncHu = BigInt("195")
//		await MisesLegacyPoolKAHCkuH.getReward.call({from: accounts[0]});
//		const uint256JsHs56Q = await MisesLegacyPoolKAHCkuH.rewardPerToken.call({from: accounts[5]});
//		const uint256NlZCa8e = await MisesLegacyPoolKAHCkuH.withdraw.call(uintthRncHu, {from: accounts[1]});

		await expect(MisesLegacyPoolKAHCkuH.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressUAwlsU2 = accounts[3]
		const addressqzTgbp5 = accounts[1]
		const uintasv45YW = BigInt("1731")
		const uintF35ytoU = BigInt("1717")
		const MisesLegacyPoolKAHCkuH = await MisesLegacyPool.new(addressUAwlsU2, addressqzTgbp5, uintasv45YW, uintF35ytoU, {from: accounts[1]});
		const addressLbxnOc7 = accounts[2]
		const uintiQplNhI = BigInt("227")
		const uintMuiVLK1 = BigInt("195")
//		await MisesLegacyPoolKAHCkuH.getReward.call({from: accounts[0]});
//		const uint256JsHs56Q = await MisesLegacyPoolKAHCkuH.rewardPerToken.call({from: accounts[5]});
//		const uint256K2K0z64 = await MisesLegacyPoolKAHCkuH.earned.call(addressLbxnOc7, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256qEwSQJA = await MisesLegacyPoolKAHCkuH.notifyRewardAmount.call(uintiQplNhI, {from: accounts[0]});
//		await MisesLegacyPoolKAHCkuH.exit.call({from: accounts[2]});
//		const uint256NlZCa8e = await MisesLegacyPoolKAHCkuH.withdraw.call(uintMuiVLK1, {from: accounts[1]});

		await expect(MisesLegacyPoolKAHCkuH.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressvMXZu91 = accounts[3]
		const addressjbeb2Ma = accounts[1]
		const uintRLXM5vl = BigInt("1731")
		const uintcrkFjlN = BigInt("1717")
		const MisesLegacyPoolKAHCkuH = await MisesLegacyPool.new(addressvMXZu91, addressjbeb2Ma, uintRLXM5vl, uintcrkFjlN, {from: accounts[1]});
		const uintiKfLYiX = BigInt("590")
		const addressWkyKEtX = accounts[5]
		const uintxbIYm2o = BigInt("195")
//		await MisesLegacyPoolKAHCkuH.getReward.call({from: accounts[0]});
//		const uint256JsHs56Q = await MisesLegacyPoolKAHCkuH.rewardPerToken.call({from: accounts[5]});
//		await MisesLegacyPoolKAHCkuH.getReward.call({from: accounts[3]});
//		const uint256fM0P5r1 = await MisesLegacyPoolKAHCkuH.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint2568FvdIS = await MisesLegacyPoolKAHCkuH.stake.call(uintiKfLYiX, {from: accounts[1]});
//		const addressOn2Z4cC = await MisesLegacyPoolKAHCkuH.updateReward.call(addressWkyKEtX, {from: accounts[3]});
//		await MisesLegacyPoolKAHCkuH.exit.call({from: accounts[2]});
//		const uint256NlZCa8e = await MisesLegacyPoolKAHCkuH.withdraw.call(uintxbIYm2o, {from: accounts[1]});

		await expect(MisesLegacyPoolKAHCkuH.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})