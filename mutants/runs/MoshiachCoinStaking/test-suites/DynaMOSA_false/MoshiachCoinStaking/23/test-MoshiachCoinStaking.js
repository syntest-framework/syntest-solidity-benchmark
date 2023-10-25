const MoshiachCoinStaking = artifacts.require("MoshiachCoinStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MoshiachCoinStaking', (accounts) => {
	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingNp2fHmq = await MoshiachCoinStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmmQfKHP = BigInt("1567")
		const uintZtEOtU5 = BigInt("211")
		await MoshiachCoinStakingNp2fHmq.claimDivs.call({from: accounts[3]});
		const uintorYsCOR = await MoshiachCoinStakingNp2fHmq.withdraw.call(uintmmQfKHP, {from: accounts[4]});
		const uintNdnUdn = await MoshiachCoinStakingNp2fHmq.withdraw.call(uintZtEOtU5, {from: accounts[3]});
		const uintUVWwGvW = await MoshiachCoinStakingNp2fHmq.getNumberOfHolders.call({from: accounts[1]});
		const uintBmj0t7W = await MoshiachCoinStakingNp2fHmq.getStakingAndDaoAmount.call({from: accounts[4]});
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingvwv2CSt = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressVrD9ZVl = accounts[1]
		const uintWmv4QzP = BigInt("1580")
		const addressewD5EWM = "0x0000000000000000000000000000000000000001"
		const uintSsMQpeN = BigInt("1319")
		const uintQqB0Hjg = await MoshiachCoinStakingvwv2CSt.getPendingDivs.call(addressVrD9ZVl, {from: accounts[0]});
		await MoshiachCoinStakingvwv2CSt.onlyOwner.call({from: accounts[4]});
		const uintCBlZv74 = await MoshiachCoinStakingvwv2CSt.withdraw.call(uintWmv4QzP, {from: accounts[2]});
		const addressHe0T1ew = await MoshiachCoinStakingvwv2CSt.transferOwnership.call(addressewD5EWM, {from: accounts[0]});
		const uintBfXX2b = await MoshiachCoinStakingvwv2CSt.deposit.call(uintSsMQpeN, {from: accounts[2]});
		await MoshiachCoinStakingvwv2CSt.claimDivs.call({from: accounts[2]});

		assert.equal(uintQqB0Hjg, BigInt("0"))
		await expect(MoshiachCoinStakingvwv2CSt.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingjluPGF2 = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintIldgIf7 = BigInt("683")
		const uinte9N5FGr = BigInt("219")
		const uintRFKCsRw = await MoshiachCoinStakingjluPGF2.getNumberOfHolders.call({from: accounts[1]});
		const uintwF8gAC1 = await MoshiachCoinStakingjluPGF2.deposit.call(uintIldgIf7, {from: accounts[4]});
		const uintypAVNYB = await MoshiachCoinStakingjluPGF2.withdraw.call(uinte9N5FGr, {from: accounts[0]});

		assert.equal(uintRFKCsRw, BigInt("0"))
		await expect(MoshiachCoinStakingjluPGF2.deposit.call(uintIldgIf7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingcs1oiaH = await MoshiachCoinStaking.new({from: accounts[1]});
		const addressO8ShKw1 = accounts[3]
		const addressRCSF8g1 = accounts[3]
		await MoshiachCoinStakingcs1oiaH.claimDivs.call({from: accounts[1]});
		const uinthzXmGn = await MoshiachCoinStakingcs1oiaH.getNumberOfHolders.call({from: accounts[2]});
		const uintn7NLM0P = await MoshiachCoinStakingcs1oiaH.getPendingDivs.call(addressO8ShKw1, {from: accounts[3]});
		const uintI0EMDyl = await MoshiachCoinStakingcs1oiaH.getPendingDivs.call(addressRCSF8g1, {from: accounts[4]});

		await expect(MoshiachCoinStakingcs1oiaH.claimDivs.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingH9yDz9 = await MoshiachCoinStaking.new({from: accounts[1]});
		const uintjVIHVRu = BigInt("62")
		const uintm3ympsw = BigInt("1580")
		const addressESflhx = accounts[2]
		const addressLcZgu7y = accounts[4]
		const uintPo2Frjd = BigInt("1053")
		const addressn0bXP3z = accounts[3]
		const addressPTf8IWt = "0x0000000000000000000000000000000000000001"
		const uinteA3jxa = await MoshiachCoinStakingH9yDz9.withdraw.call(uintjVIHVRu, {from: accounts[1]});
		const uintSWyPHJt = await MoshiachCoinStakingH9yDz9.deposit.call(uintm3ympsw, {from: accounts[2]});
		await MoshiachCoinStakingH9yDz9.claimDivs.call({from: accounts[4]});
		const uintrD6nx9a = await MoshiachCoinStakingH9yDz9.getPendingDivs.call(addressESflhx, {from: accounts[3]});
		const uintJzVb1hf = await MoshiachCoinStakingH9yDz9.getPendingDivs.call(addressLcZgu7y, {from: accounts[1]});
		const addresscaXA2Gb = await MoshiachCoinStakingH9yDz9.transferAnyERC20Tokens.call(addressPTf8IWt, addressn0bXP3z, uintPo2Frjd, {from: accounts[4]});

		await expect(MoshiachCoinStakingH9yDz9.withdraw.call(uintjVIHVRu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingpQMpYJw = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintGI6iM5c = await MoshiachCoinStakingpQMpYJw.getStakingAndDaoAmount.call({from: accounts[2]});
		const uintHOfOzf0 = await MoshiachCoinStakingpQMpYJw.getNumberOfHolders.call({from: accounts[4]});
		const uintUhMWUcy = await MoshiachCoinStakingpQMpYJw.getNumberOfHolders.call({from: accounts[1]});
		const uintOIqwGTO = await MoshiachCoinStakingpQMpYJw.getStakingAndDaoAmount.call({from: accounts[2]});

		assert.equal(uintGI6iM5c, BigInt("60000000000000000000000000"))
		assert.equal(uintHOfOzf0, BigInt("0"))
		assert.equal(uintOIqwGTO, BigInt("60000000000000000000000000"))
		assert.equal(uintUhMWUcy, BigInt("0"))
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingF0SmnaI = await MoshiachCoinStaking.new({from: accounts[2]});
		const uinti8UTn8c = BigInt("1419")
		const addressnMaRhLz = "0x0000000000000000000000000000000000000001"
		const addressbK8wWMZ = accounts[2]
		const addressEPB4WkU = accounts[4]
		const uintzV4cWRd = await MoshiachCoinStakingF0SmnaI.getStakingAndDaoAmount.call({from: accounts[2]});
		const addressgvPX2qr = await MoshiachCoinStakingF0SmnaI.transferAnyERC20Tokens.call(addressbK8wWMZ, addressnMaRhLz, uinti8UTn8c, {from: accounts[2]});
		const uintPn7brsF = await MoshiachCoinStakingF0SmnaI.getPendingDivs.call(addressEPB4WkU, {from: accounts[1]});

		assert.equal(uintzV4cWRd, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingF0SmnaI.transferAnyERC20Tokens.call(addressbK8wWMZ, addressnMaRhLz, uinti8UTn8c, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingDGWRuQ7 = await MoshiachCoinStaking.new({from: accounts[4]});
		const addresseJg1i63 = accounts[3]
		const addressKIkknGx = accounts[1]
		await MoshiachCoinStakingDGWRuQ7.claimDivs.call({from: accounts[2]});
		const addressY0Cl8kT = await MoshiachCoinStakingDGWRuQ7.transferOwnership.call(addresseJg1i63, {from: accounts[4]});
		const uintcRKWpwn = await MoshiachCoinStakingDGWRuQ7.getPendingDivs.call(addressKIkknGx, {from: accounts[4]});
		const uintOW49LxF = await MoshiachCoinStakingDGWRuQ7.getStakingAndDaoAmount.call({from: accounts[3]});

		await expect(MoshiachCoinStakingDGWRuQ7.claimDivs.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingaTA12uo = await MoshiachCoinStaking.new({from: accounts[4]});
		const addressILNTG16 = accounts[2]
		const uintLPY1FCd = BigInt("0")
		const addressonarKo = accounts[3]
		const addresskyttDRr = accounts[1]
		const uintpzvz5vA = await MoshiachCoinStakingaTA12uo.getStakingAndDaoAmount.call({from: accounts[4]});
		const uintkrRRQey = await MoshiachCoinStakingaTA12uo.getPendingDivs.call(addressILNTG16, {from: accounts[0]});
		const uintgoUWk2F = await MoshiachCoinStakingaTA12uo.getNumberOfHolders.call({from: accounts[1]});
		const uintNp2oeif = await MoshiachCoinStakingaTA12uo.deposit.call(uintLPY1FCd, {from: accounts[1]});
		const uintszWMthS = await MoshiachCoinStakingaTA12uo.getPendingDivs.call(addressonarKo, {from: accounts[5]});
		const addressGrpM3zd = await MoshiachCoinStakingaTA12uo.transferOwnership.call(addresskyttDRr, {from: accounts[0]});

		assert.equal(uintgoUWk2F, BigInt("0"))
		assert.equal(uintkrRRQey, BigInt("0"))
		assert.equal(uintpzvz5vA, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingaTA12uo.deposit.call(uintLPY1FCd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MoshiachCoinStaking', async () => {
		const MoshiachCoinStakingF0SmnaI = await MoshiachCoinStaking.new({from: accounts[2]});
		const uintLOnsXU = BigInt("1405")
		const addressxNBkjhP = "0x00000000000000000000000000000000000000-1"
		const addressAnlkPyI = accounts[2]
		const uintvD6OPWH = BigInt("1259")
		const addressBArc6sq = accounts[2]
		const addressTWoUfdp = accounts[3]
		const uintdDvEqF7 = BigInt("193")
		const addressurGmrqf = accounts[5]
		const uintgrWFzVX = await MoshiachCoinStakingF0SmnaI.getStakingAndDaoAmount.call({from: accounts[5]});
		const addressgvPX2qr = await MoshiachCoinStakingF0SmnaI.transferAnyERC20Tokens.call(addressAnlkPyI, addressxNBkjhP, uintLOnsXU, {from: accounts[2]});
		const uintsMULDXv = await MoshiachCoinStakingF0SmnaI.deposit.call(uintvD6OPWH, {from: accounts[4]});
		const uintx5MSQ7O = await MoshiachCoinStakingF0SmnaI.getStakingAndDaoAmount.call({from: accounts[3]});
		const uintafxlz2I = await MoshiachCoinStakingF0SmnaI.getPendingDivs.call(addressBArc6sq, {from: accounts[4]});
		const addressJfwkUx = await MoshiachCoinStakingF0SmnaI.transferOwnership.call(addressTWoUfdp, {from: accounts[3]});
		const uintgAbZmgm = await MoshiachCoinStakingF0SmnaI.withdraw.call(uintdDvEqF7, {from: accounts[4]});
		const addressHFbbMtW = await MoshiachCoinStakingF0SmnaI.transferOwnership.call(addressurGmrqf, {from: accounts[0]});

		assert.equal(uintgrWFzVX, BigInt("60000000000000000000000000"))
		await expect(MoshiachCoinStakingF0SmnaI.transferAnyERC20Tokens.call(addressAnlkPyI, addressxNBkjhP, uintLOnsXU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})