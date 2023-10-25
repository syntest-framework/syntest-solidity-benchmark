const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingOTiLIFC = await LpStaking.new({from: accounts[5]});
		const uintQ8v1S1 = BigInt("286")
		const uint256YcIMTc5 = await LpStakingOTiLIFC.getCurIncomeRate.call({from: accounts[3]});
		const uint256yACa6NF = await LpStakingOTiLIFC.weiToSatoshi.call(uintQ8v1S1, {from: accounts[4]});
		await LpStakingOTiLIFC.exit.call({from: accounts[4]});
		const uint256Pq5x4QY = await LpStakingOTiLIFC.getCurIncomeRate.call({from: accounts[4]});
		await LpStakingOTiLIFC.lpIncomeRateChanged.call({from: accounts[5]});

		await expect(LpStakingOTiLIFC.getCurIncomeRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStaking00pMOl = await LpStaking.new({from: accounts[2]});
		const addressRE0tQpe = accounts[4]
		const byteFjSlrAx = "0x1219141d121d180c010e1b0b1301161d0d1b191d0d141b140310110e1d0f1a0c"
		const byteW9xhvVf = "0x180b13140c0a1c1d0c1e1e151b0c010315171f000115070f040c0719040a0a0a"
		const uintBi8INZ6 = BigInt("21")
		const uintSnseV12 = BigInt("3")
		const uintE91O87P = BigInt("550")
		const addressgwyuWyk = accounts[1]
		const uint256vWim4m8 = await LpStaking00pMOl.rewardPerToken.call({from: accounts[0]});
		const addressV1Jz8X = await LpStaking00pMOl.updateIncome.call(addressRE0tQpe, {from: accounts[0]});
		const uint256NxYJL6h = await LpStaking00pMOl.stakeWithPermit.call(uintE91O87P, uintSnseV12, uintBi8INZ6, byteW9xhvVf, byteFjSlrAx, {from: accounts[3]});
		const addressr0gjkht = await LpStaking00pMOl.updateIncome.call(addressgwyuWyk, {from: accounts[5]});

		assert.equal(uint256vWim4m8, BigInt("0"))
		await expect(LpStaking00pMOl.updateIncome.call(addressRE0tQpe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingo58NrJ3 = await LpStaking.new({from: accounts[1]});
		const address6K1VXZ = accounts[4]
		const uintHha1VtJ = BigInt("1056")
		const addressUyNeKFk = accounts[1]
		const uintpJk9ypS = BigInt("245")
		const addressDYMZvKz = await LpStakingo58NrJ3.transferOwnership.call(address6K1VXZ, {from: accounts[0]});
		const uint256d2bB9re = await LpStakingo58NrJ3.lastTimeRewardApplicable.call({from: accounts[1]});
		await LpStakingo58NrJ3.lpRewardRateChanged.call({from: accounts[1]});
		const address1uQpRu = await LpStakingo58NrJ3.inCaseTokensGetStuck.call(addressUyNeKFk, uintHha1VtJ, {from: accounts[3]});
		const uint256xiqxmKZ = await LpStakingo58NrJ3.weiToSatoshi.call(uintpJk9ypS, {from: accounts[2]});
		const uint256Th7TwMS = await LpStakingo58NrJ3.rewardPerToken.call({from: accounts[2]});

		await expect(LpStakingo58NrJ3.transferOwnership.call(address6K1VXZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingH8pKXee = await LpStaking.new({from: accounts[1]});
		const addressgLSqZ0x = accounts[2]
		const uint256DGDUeBp = await LpStakingH8pKXee.incomeEarned.call(addressgLSqZ0x, {from: accounts[4]});
		const uint256CP4kl5J = await LpStakingH8pKXee.rewardPerToken.call({from: accounts[0]});

		await expect(LpStakingH8pKXee.incomeEarned.call(addressgLSqZ0x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingfHxbilm = await LpStaking.new({from: accounts[2]});
		const uintA1M24w = BigInt("489")
		const bytefcZpYgg = "0x1e10150b1201030a120b1c1e19191813020d1d0a071a07031018030716050b18"
		const byteRTe1amQ = "0x0c04070d0504130e191d01081b11121316070a1b070c17010d0804100016160b"
		const uintwpIN2c = BigInt("220")
		const uintrr7FOQF = BigInt("231")
		const uintCdGodr = BigInt("454")
		const uint256FozcFVQ = await LpStakingfHxbilm.withdraw.call(uintA1M24w, {from: accounts[0]});
		const uint256SlRd1z = await LpStakingfHxbilm.stakeWithPermit.call(uintCdGodr, uintrr7FOQF, uintwpIN2c, byteRTe1amQ, bytefcZpYgg, {from: accounts[2]});

		await expect(LpStakingfHxbilm.withdraw.call(uintA1M24w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingO9WOdSX = await LpStaking.new({from: accounts[1]});
		const addressHQ4HBpa = accounts[0]
		const addresskfXVlRJ = accounts[4]
		const addressSRQuqc = accounts[0]
		const addressz2l9LvU = accounts[0]
		const addressMNnNwP = "0x0000000000000000000000000000000000000001"
		const addressAiebaG1 = await LpStakingO9WOdSX.initialize.call(addressz2l9LvU, addressSRQuqc, addresskfXVlRJ, addressHQ4HBpa, {from: "0x0000000000000000000000000000000000000001"});
		const uint256R1EFwAM = await LpStakingO9WOdSX.rewardPerToken.call({from: accounts[4]});
		const addressckRjfeb = await LpStakingO9WOdSX.updateIncome.call(addressMNnNwP, {from: accounts[4]});
		await LpStakingO9WOdSX.exit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256R1EFwAM, BigInt("0"))
		await expect(LpStakingO9WOdSX.updateIncome.call(addressMNnNwP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStaking00pMOl = await LpStaking.new({from: accounts[2]});
		const addressOU5FyVA = accounts[4]
		const addressMMFdfSA = accounts[4]
		const bytej6ku95F = "0x1219141d121d180c010e1b0b1301161d0d1b191d0d141b140310110e1d0f1a0c"
		const byteh0QuHT3 = "0x180b13140c0a1c1d0c1e1e151b0c010315171f000115070f040c0719040a0a0a"
		const uintOKqsJq4 = BigInt("21")
		const uintgRradLP = BigInt("3")
		const uintDzpFLFU = BigInt("550")
		const addressW5tQnjW = accounts[2]
		const uint256vWim4m8 = await LpStaking00pMOl.rewardPerToken.call({from: accounts[0]});
		const uint256NTHTUe7 = await LpStaking00pMOl.getUserAccumulatedWithdrawIncome.call(addressOU5FyVA, {from: accounts[0]});
		const addressV1Jz8X = await LpStaking00pMOl.updateIncome.call(addressMMFdfSA, {from: accounts[0]});
		const uint256NxYJL6h = await LpStaking00pMOl.stakeWithPermit.call(uintDzpFLFU, uintgRradLP, uintOKqsJq4, byteh0QuHT3, bytej6ku95F, {from: accounts[3]});
		const addressr0gjkht = await LpStaking00pMOl.updateIncome.call(addressW5tQnjW, {from: accounts[5]});

		assert.equal(uint256NTHTUe7, BigInt("0"))
		assert.equal(uint256vWim4m8, BigInt("0"))
		await expect(LpStaking00pMOl.updateIncome.call(addressMMFdfSA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingH8pKXee = await LpStaking.new({from: accounts[1]});
		const addresssQscgcU = accounts[2]
		await LpStakingH8pKXee.lpRewardRateChanged.call({from: accounts[2]});
		const uint256DGDUeBp = await LpStakingH8pKXee.incomeEarned.call(addresssQscgcU, {from: accounts[4]});

		await expect(LpStakingH8pKXee.lpRewardRateChanged.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingH8pKXee = await LpStaking.new({from: accounts[1]});
		const addressi1eP0w1 = accounts[5]
		const addressTG39c3e = accounts[4]
		const addressmX4FRjD = accounts[3]
		await LpStakingH8pKXee.exit.call({from: accounts[1]});
		const uint256fvJOlc7 = await LpStakingH8pKXee.getUserAccumulatedWithdrawIncome.call(addressi1eP0w1, {from: accounts[2]});
		const addresstlH63D4 = await LpStakingH8pKXee.updateIncome.call(addressTG39c3e, {from: accounts[4]});
		const uint256DGDUeBp = await LpStakingH8pKXee.incomeEarned.call(addressmX4FRjD, {from: accounts[4]});

		await expect(LpStakingH8pKXee.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingH8pKXee = await LpStaking.new({from: accounts[1]});
		const addressbJpc59z = accounts[2]
		const addressH0SstwF = accounts[3]
		const uint256QlMg9hg = await LpStakingH8pKXee.rewardEarned.call(addressbJpc59z, {from: accounts[0]});
		const uint256DGDUeBp = await LpStakingH8pKXee.incomeEarned.call(addressH0SstwF, {from: accounts[4]});
		await LpStakingH8pKXee.getReward.call({from: accounts[4]});

		assert.equal(uint256QlMg9hg, BigInt("0"))
		await expect(LpStakingH8pKXee.incomeEarned.call(addressH0SstwF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingyhv8TYC = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfnZ6uh = accounts[2]
		const addressjP6N9VR = accounts[3]
		const uint256QMdJmUV = await LpStakingyhv8TYC.rewardEarned.call(addressfnZ6uh, {from: accounts[4]});
		const addressSctoClZ = await LpStakingyhv8TYC.transferOwnership.call(addressjP6N9VR, {from: accounts[2]});
	});
})