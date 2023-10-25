const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressDpCKj2g = accounts[1]
		const FrogDAOGovernanceRewards4hPsZl = await FrogDAOGovernanceRewards.new(addressDpCKj2g, {from: accounts[4]});
		const uintB6vi3Vh = BigInt("990")
		const addressrrZM4A3 = accounts[0]
		const uint256xWTtdb1 = await FrogDAOGovernanceRewards4hPsZl.notifyRewardAmount.call(uintB6vi3Vh, {from: accounts[0]});
		const addressNlkWXO = await FrogDAOGovernanceRewards4hPsZl.transferDevAddr.call(addressrrZM4A3, {from: accounts[1]});
		const uint256PHk6vB = await FrogDAOGovernanceRewards4hPsZl.rewardPerToken.call({from: accounts[1]});
		await FrogDAOGovernanceRewards4hPsZl.renounceDevAddr.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewards4hPsZl.notifyRewardAmount.call(uintB6vi3Vh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressYUs3Dp = accounts[1]
		const FrogDAOGovernanceRewardsakPiiW = await FrogDAOGovernanceRewards.new(addressYUs3Dp, {from: accounts[5]});
		const addressqz7Fc26 = accounts[3]
		const addressGQImvio = accounts[3]
		const uint256a240n8y = await FrogDAOGovernanceRewardsakPiiW.earned.call(addressqz7Fc26, {from: accounts[1]});
		const uint256sXDXlar = await FrogDAOGovernanceRewardsakPiiW.rewardPerToken.call({from: accounts[3]});
		const uint256JPF6MS5 = await FrogDAOGovernanceRewardsakPiiW.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256dhxtOmg = await FrogDAOGovernanceRewardsakPiiW.earned.call(addressGQImvio, {from: accounts[1]});

		assert.equal(uint256JPF6MS5, BigInt("0"))
		assert.equal(uint256a240n8y, BigInt("0"))
		assert.equal(uint256dhxtOmg, BigInt("0"))
		assert.equal(uint256sXDXlar, BigInt("0"))
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressEGEdvh7 = accounts[0]
		const FrogDAOGovernanceRewardsR7POpZS = await FrogDAOGovernanceRewards.new(addressEGEdvh7, {from: accounts[3]});
		const uintcZuusKd = BigInt("282")
		const addressX87xAaw = accounts[4]
		const uintSdMfwrn = BigInt("1305")
		const uintEiMnATW = BigInt("558")
		const uint256gs6rMY8 = await FrogDAOGovernanceRewardsR7POpZS.stake.call(uintcZuusKd, {from: accounts[1]});
		const addresszotki7I = await FrogDAOGovernanceRewardsR7POpZS.updateReward.call(addressX87xAaw, {from: accounts[2]});
		const uint256LPEiMIP = await FrogDAOGovernanceRewardsR7POpZS.withdraw.call(uintSdMfwrn, {from: accounts[2]});
		const uint256Zvhsspq = await FrogDAOGovernanceRewardsR7POpZS.stake.call(uintEiMnATW, {from: accounts[5]});

		await expect(FrogDAOGovernanceRewardsR7POpZS.stake.call(uintcZuusKd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressaFtQ7SH = accounts[3]
		const FrogDAOGovernanceRewardsoR40Lz5 = await FrogDAOGovernanceRewards.new(addressaFtQ7SH, {from: accounts[3]});
		const uintTDJ16Kt = BigInt("1480")
		const addressSswFdRX = accounts[1]
		const addressQyOOztw = accounts[5]
		const uint256phD3rc = await FrogDAOGovernanceRewardsoR40Lz5.withdrawDevFund.call(uintTDJ16Kt, {from: accounts[3]});
		const uint256nw6pw8y = await FrogDAOGovernanceRewardsoR40Lz5.earned.call(addressSswFdRX, {from: accounts[1]});
		const addresswz32ztH = await FrogDAOGovernanceRewardsoR40Lz5.updateReward.call(addressQyOOztw, {from: accounts[2]});
		await FrogDAOGovernanceRewardsoR40Lz5.renounceDevAddr.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsoR40Lz5.checkStart.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsoR40Lz5.withdrawDevFund.call(uintTDJ16Kt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressB4npkd5 = accounts[5]
		const FrogDAOGovernanceRewardsFOuWA8W = await FrogDAOGovernanceRewards.new(addressB4npkd5, {from: accounts[0]});
		const uinttw5QKrL = BigInt("2034")
		const uintDaqtkJ = BigInt("1837")
		const uinth74s42w = BigInt("1595")
		const uint256Yb9FWAy = await FrogDAOGovernanceRewardsFOuWA8W.withdraw.call(uinttw5QKrL, {from: accounts[3]});
		const uint256kdbjVCV = await FrogDAOGovernanceRewardsFOuWA8W.notifyRewardAmount.call(uintDaqtkJ, {from: accounts[2]});
		await FrogDAOGovernanceRewardsFOuWA8W.getReward.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsFOuWA8W.checkhalve.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256IvpArK2 = await FrogDAOGovernanceRewardsFOuWA8W.withdraw.call(uinth74s42w, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsFOuWA8W.withdraw.call(uinttw5QKrL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressota2Aap = accounts[4]
		const FrogDAOGovernanceRewardsj0bhhy6 = await FrogDAOGovernanceRewards.new(addressota2Aap, {from: accounts[3]});
		const addressTWD4aMo = accounts[1]
		const addresscOWUGQm = accounts[4]
		const uint256qJHtFkB = await FrogDAOGovernanceRewardsj0bhhy6.earned.call(addressTWD4aMo, {from: accounts[0]});
		await FrogDAOGovernanceRewardsj0bhhy6.exit.call({from: accounts[2]});
		const uint256DoPVD61 = await FrogDAOGovernanceRewardsj0bhhy6.rewardPerToken.call({from: accounts[2]});
		const addressSEw6WAf = await FrogDAOGovernanceRewardsj0bhhy6.updateReward.call(addresscOWUGQm, {from: accounts[1]});

		assert.equal(uint256qJHtFkB, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsj0bhhy6.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressEEjDMrG = accounts[1]
		const FrogDAOGovernanceRewardsk27F4xf = await FrogDAOGovernanceRewards.new(addressEEjDMrG, {from: "0x0000000000000000000000000000000000000001"});
		const addressEBrg3sN = accounts[2]
		const uintqLyULrW = BigInt("2006")
		await FrogDAOGovernanceRewardsk27F4xf.getReward.call({from: accounts[4]});
		const addressmxle6Ov = await FrogDAOGovernanceRewardsk27F4xf.updateReward.call(addressEBrg3sN, {from: accounts[5]});
		const uint256xiun1WP = await FrogDAOGovernanceRewardsk27F4xf.notifyRewardAmount.call(uintqLyULrW, {from: accounts[1]});
		const uint256UTv6B9l = await FrogDAOGovernanceRewardsk27F4xf.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressblRYI9H = accounts[1]
		const FrogDAOGovernanceRewardsakPiiW = await FrogDAOGovernanceRewards.new(addressblRYI9H, {from: accounts[5]});
		const addressNomuFyG = accounts[3]
		const addresstiMTx5 = accounts[3]
		await FrogDAOGovernanceRewardsakPiiW.checkStart.call({from: accounts[1]});
		const uint256a240n8y = await FrogDAOGovernanceRewardsakPiiW.earned.call(addressNomuFyG, {from: accounts[1]});
		const uint256sXDXlar = await FrogDAOGovernanceRewardsakPiiW.rewardPerToken.call({from: accounts[3]});
		const uint256JPF6MS5 = await FrogDAOGovernanceRewardsakPiiW.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256dhxtOmg = await FrogDAOGovernanceRewardsakPiiW.earned.call(addresstiMTx5, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsakPiiW.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressJPoBEOm = accounts[1]
		const FrogDAOGovernanceRewardsakPiiW = await FrogDAOGovernanceRewards.new(addressJPoBEOm, {from: accounts[5]});
		const addressFWl3K7 = accounts[2]
		const uint256a240n8y = await FrogDAOGovernanceRewardsakPiiW.earned.call(addressFWl3K7, {from: accounts[1]});
		const uint256sXDXlar = await FrogDAOGovernanceRewardsakPiiW.rewardPerToken.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsakPiiW.renounceDevAddr.call({from: accounts[2]});
		const uint2567JCG37 = await FrogDAOGovernanceRewardsakPiiW.devFundAvailable.call({from: accounts[4]});
		const uint256JPF6MS5 = await FrogDAOGovernanceRewardsakPiiW.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256a240n8y, BigInt("0"))
		assert.equal(uint256sXDXlar, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsakPiiW.renounceDevAddr.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressYOKG4P1 = accounts[1]
		const FrogDAOGovernanceRewardsakPiiW = await FrogDAOGovernanceRewards.new(addressYOKG4P1, {from: accounts[5]});
		const addressVKidMXy = accounts[3]
		const addressgjWMK4 = accounts[2]
		const addresspVNC0AX = await FrogDAOGovernanceRewardsakPiiW.transferDevAddr.call(addressVKidMXy, {from: accounts[5]});
		const uint256a240n8y = await FrogDAOGovernanceRewardsakPiiW.earned.call(addressgjWMK4, {from: accounts[1]});
		const uint256JPF6MS5 = await FrogDAOGovernanceRewardsakPiiW.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsakPiiW.transferDevAddr.call(addressVKidMXy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressjrWxcju = accounts[3]
		const FrogDAOGovernanceRewardsoR40Lz5 = await FrogDAOGovernanceRewards.new(addressjrWxcju, {from: accounts[3]});
		const addressjMacgv0 = accounts[3]
		const uintiFZQ4VT = BigInt("1511")
		const addressFjCnaCQ = await FrogDAOGovernanceRewardsoR40Lz5.transferDevAddr.call(addressjMacgv0, {from: accounts[3]});
		const uint256phD3rc = await FrogDAOGovernanceRewardsoR40Lz5.withdrawDevFund.call(uintiFZQ4VT, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsoR40Lz5.withdrawDevFund.call(uintiFZQ4VT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressDsN3MSL = accounts[3]
		const FrogDAOGovernanceRewardsoR40Lz5 = await FrogDAOGovernanceRewards.new(addressDsN3MSL, {from: accounts[3]});
		const uintDsQOuPC = BigInt("200")
		const uintNoAWSgL = BigInt("1481")
		const uint256SJzNPvo = await FrogDAOGovernanceRewardsoR40Lz5.notifyRewardAmount.call(uintDsQOuPC, {from: accounts[3]});
		const uint256phD3rc = await FrogDAOGovernanceRewardsoR40Lz5.withdrawDevFund.call(uintNoAWSgL, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsoR40Lz5.notifyRewardAmount.call(uintDsQOuPC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})