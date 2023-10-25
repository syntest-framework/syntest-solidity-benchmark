const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressM8pH8BD = accounts[2]
		const addressOD3BvNO = accounts[5]
		const addressWFaRpV2 = accounts[0]
		const WolfStakingRewardszpUbq6b = await WolfStakingRewards.new(addressM8pH8BD, addressOD3BvNO, addressWFaRpV2, {from: accounts[3]});
		const uintqqhfNRD = BigInt("1968")
		const uintQAk7SHL = BigInt("549")
		const uintuThUrnE = BigInt("587")
		const addressHCaiNdr = accounts[1]
		const uintOMbYGKZ = BigInt("394")
		const uintRIWVLO = BigInt("1186")
		const uint256u2qVJxR = await WolfStakingRewardszpUbq6b.rewardPerToken.call(uintqqhfNRD, {from: accounts[3]});
//		const stringf89jtue = await WolfStakingRewardszpUbq6b.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ptdKTH9 = await WolfStakingRewardszpUbq6b.exit.call(uintQAk7SHL, {from: accounts[5]});
//		const uint256hPhkOO7 = await WolfStakingRewardszpUbq6b.balanceOfPerPool.call(addressHCaiNdr, uintuThUrnE, {from: accounts[0]});
//		const uint256cvH6Hc = await WolfStakingRewardszpUbq6b.stake.call(uintRIWVLO, uintOMbYGKZ, {from: accounts[4]});

		assert.equal(uint256u2qVJxR, BigInt("0"))
		await expect(WolfStakingRewardszpUbq6b.symbol.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringIs2PEnK = "6NBMdjFvHxPI3iXqGJmJdjMcOy9Hvg2lyGp2XSb3PT9IyTtTnGD9Dg1oq6cYcoaT33l"
		const stringmGBYbg2 = "DaAuydUITMyAbgjqUi9iVsuEcISJtT4eUSWtTmSBwEC4zd3TdMhqABAWyE6X9"
		const uintWn6f1uD = BigInt("20")
		const WolfStakingRewardsvTZ4RC0 = await WolfStakingRewards.new(stringIs2PEnK, stringmGBYbg2, uintWn6f1uD, {from: "0x0000000000000000000000000000000000000001"});
		const uintlbT3SvO = BigInt("1796")
		const addressK8DZ0ng = accounts[3]
		const uintMEkVlXq = BigInt("354")
		const uintslIi2r = BigInt("1192")
		const uintGsl8Y8s = BigInt("765")
		await WolfStakingRewardsvTZ4RC0.nonReentrant.call({from: accounts[1]});
		const uint256bcjJlrQ = await WolfStakingRewardsvTZ4RC0.earned.call(addressK8DZ0ng, uintlbT3SvO, {from: accounts[2]});
		await WolfStakingRewardsvTZ4RC0.onlyOwner.call({from: accounts[1]});
		const uint256tnicTGI = await WolfStakingRewardsvTZ4RC0.stake.call(uintslIi2r, uintMEkVlXq, {from: accounts[3]});
		await WolfStakingRewardsvTZ4RC0.nonReentrant.call({from: accounts[1]});
		const uintib7voCb = await WolfStakingRewardsvTZ4RC0.getReward.call(uintGsl8Y8s, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresswpH1hR = accounts[5]
		const addressTggjVl = accounts[0]
		const addressZr6aax = accounts[5]
		const WolfStakingRewardsbcYrH2L = await WolfStakingRewards.new(addresswpH1hR, addressTggjVl, addressZr6aax, {from: accounts[1]});
		const uintFANP9mm = BigInt("1231")
		const uintM7TkM0H = BigInt("1458")
		const uintbFffHFs = BigInt("692")
		const addressGQ8Naq6 = accounts[1]
//		const uint256C3vmutp = await WolfStakingRewardsbcYrH2L.withdraw.call(uintM7TkM0H, uintFANP9mm, {from: accounts[3]});
//		const uint256zsLou70 = await WolfStakingRewardsbcYrH2L.earned.call(addressGQ8Naq6, uintbFffHFs, {from: accounts[2]});

		await expect(WolfStakingRewardsbcYrH2L.withdraw.call(uintM7TkM0H, uintFANP9mm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressaKQvKLE = accounts[0]
		const addressPN8LFhm = accounts[2]
		const addresspGtmCNU = accounts[3]
		const WolfStakingRewardsrDSbr1r = await WolfStakingRewards.new(addressaKQvKLE, addressPN8LFhm, addresspGtmCNU, {from: accounts[0]});
		const uintvlXZNL1 = BigInt("1668")
		const uintIFGioYp = BigInt("1232")
		const uintjwSisNS = BigInt("1758")
		const uint0xrAMg = BigInt("466")
		const uintLfBYJ0a = BigInt("1241")
//		const uint256y45KLx4 = await WolfStakingRewardsrDSbr1r.withdrawRemainingBalance.call(uintIFGioYp, uintvlXZNL1, {from: accounts[1]});
//		const uint256wtOygBW = await WolfStakingRewardsrDSbr1r.exit.call(uintjwSisNS, {from: accounts[2]});
//		const uint256IPTiwed = await WolfStakingRewardsrDSbr1r.exit.call(uint0xrAMg, {from: "0x0000000000000000000000000000000000000001"});
//		const stringFAJJvYQ = await WolfStakingRewardsrDSbr1r.symbol.call({from: accounts[3]});
//		const uintc6FMkUL = await WolfStakingRewardsrDSbr1r.getReward.call(uintLfBYJ0a, {from: accounts[3]});

		await expect(WolfStakingRewardsrDSbr1r.withdrawRemainingBalance.call(uintIFGioYp, uintvlXZNL1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringueSKaHb = "g3eIUfHrshj1jPJuwcCQPZeJoqOBCYvM7g6nzMOUqo"
		const stringK4ttmjc = "TZZhqOBQLNoaYLAYi8UGbGDILakLtIXw"
		const uintdTy6KY = BigInt("77")
		const WolfStakingRewardsX6OwgqR = await WolfStakingRewards.new(stringueSKaHb, stringK4ttmjc, uintdTy6KY, {from: accounts[5]});
		const uintZw3UhOS = BigInt("249")
		const uintD6k9laJ = BigInt("233")
		const uintrWfIM5o = BigInt("1341")
		const uintfQRqOF = BigInt("1787")
		const uintk11QEhg = BigInt("540")
		const addressG69jGZ9 = accounts[5]
		const uintszkboZ2 = BigInt("711")
		const addressfO0FZ4E = accounts[1]
		const uint256QSglYk9 = await WolfStakingRewardsX6OwgqR.getRewardForDuration.call(uintZw3UhOS, {from: accounts[3]});
		const uint256rZ9wOC9 = await WolfStakingRewardsX6OwgqR.totalSupplyPerPool.call(uintD6k9laJ, {from: accounts[4]});
		const uint256mOdVx6L = await WolfStakingRewardsX6OwgqR.withdrawRemainingBalance.call(uintfQRqOF, uintrWfIM5o, {from: accounts[0]});
		const uint256Yte2Dax = await WolfStakingRewardsX6OwgqR.earned.call(addressG69jGZ9, uintk11QEhg, {from: accounts[3]});
		const addressbg3zIen = await WolfStakingRewardsX6OwgqR.updateReward.call(addressfO0FZ4E, uintszkboZ2, {from: accounts[2]});
		await WolfStakingRewardsX6OwgqR.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressEhmgdFi = accounts[3]
		const addressveUCSrk = accounts[0]
		const addressmwPmqdA = accounts[0]
		const WolfStakingRewardsogW2JHd = await WolfStakingRewards.new(addressEhmgdFi, addressveUCSrk, addressmwPmqdA, {from: accounts[3]});
		const uintaoWu7o2 = BigInt("1695")
		const uintnqCJh7O = BigInt("796")
		const uintDC0NHio = BigInt("1062")
		const addressffCCQts = accounts[1]
		const uintwu8jBuT = BigInt("122")
		const uint256rVHH6n = await WolfStakingRewardsogW2JHd.totalSupplyPerPool.call(uintaoWu7o2, {from: accounts[3]});
		const uinteVpTIub = await WolfStakingRewardsogW2JHd.getReward.call(uintnqCJh7O, {from: accounts[1]});
		const uint256zW8ne6M = await WolfStakingRewardsogW2JHd.balanceOfPerPool.call(addressffCCQts, uintDC0NHio, {from: accounts[2]});
		const uintj0cMohc = await WolfStakingRewardsogW2JHd.getReward.call(uintwu8jBuT, {from: accounts[5]});

		assert.equal(uint256rVHH6n, BigInt("0"))
		assert.equal(uint256zW8ne6M, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const stringPnwvdu = "FaYidO6kPzw31ti"
		const stringxmfUOI = "r9j6XahyBRmzbfwSRlrrHuJ5h34w0G8l"
		const uintWLQbo40 = BigInt("79")
		const WolfStakingRewardsR7sPhS = await WolfStakingRewards.new(stringPnwvdu, stringxmfUOI, uintWLQbo40, {from: accounts[3]});
		const uintAEUNV5u = BigInt("1129")
		const addressROREADd = "0x0000000000000000000000000000000000000001"
		const uintmdRTyBd = BigInt("1554")
		const uint256IhQbm2i = await WolfStakingRewardsR7sPhS.earned.call(addressROREADd, uintAEUNV5u, {from: accounts[2]});
		const uint256arraylrvMwdW = await WolfStakingRewardsR7sPhS.updateNotifyRewardAmount.call(uintmdRTyBd, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressU1snBP = accounts[5]
		const addressXT4EIIV = accounts[0]
		const addresszSCt7KL = accounts[5]
		const WolfStakingRewardsbcYrH2L = await WolfStakingRewards.new(addressU1snBP, addressXT4EIIV, addresszSCt7KL, {from: accounts[1]});
		const uintq3lz1h0 = BigInt("1223")
		const uintRe6ltYk = BigInt("1231")
		const uintpa0ucFw = BigInt("1458")
		const uintfLPRUh6 = BigInt("686")
		const addressbeikaYs = accounts[1]
		const uint256ltY4gEA = await WolfStakingRewardsbcYrH2L.lastTimeRewardApplicable.call(uintq3lz1h0, {from: accounts[2]});
//		const uint256C3vmutp = await WolfStakingRewardsbcYrH2L.withdraw.call(uintpa0ucFw, uintRe6ltYk, {from: accounts[3]});
//		const uint256zsLou70 = await WolfStakingRewardsbcYrH2L.earned.call(addressbeikaYs, uintfLPRUh6, {from: accounts[2]});

		assert.equal(uint256ltY4gEA, BigInt("0"))
		await expect(WolfStakingRewardsbcYrH2L.withdraw.call(uintpa0ucFw, uintRe6ltYk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressOWQrZAA = accounts[2]
		const addressT5wzbCO = accounts[5]
		const addresst52rFJm = accounts[0]
		const WolfStakingRewardszpUbq6b = await WolfStakingRewards.new(addressOWQrZAA, addressT5wzbCO, addresst52rFJm, {from: accounts[3]});
		const uintUesCqCf = BigInt("1968")
		const uintg3L4Hf0 = BigInt("1354")
		const addressrtEcnE = accounts[2]
		const uintOy7e066 = BigInt("1752")
		const uintIjCp8B = BigInt("736")
		const addressKg9zFi9 = accounts[2]
		const uintXihcoa9 = BigInt("549")
		const uintaPiaVFv = BigInt("599")
		const addressOxpc3I = accounts[0]
		const uintoPrhZko = BigInt("394")
		const uintpUAlYOC = BigInt("1186")
		const uint256u2qVJxR = await WolfStakingRewardszpUbq6b.rewardPerToken.call(uintUesCqCf, {from: accounts[3]});
		const uint256QzeitxT = await WolfStakingRewardszpUbq6b.balanceOfPerPool.call(addressrtEcnE, uintg3L4Hf0, {from: accounts[1]});
//		const uint256ZrCcxGw = await WolfStakingRewardszpUbq6b.exit.call(uintOy7e066, {from: accounts[1]});
//		const stringf89jtue = await WolfStakingRewardszpUbq6b.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256gigT7ys = await WolfStakingRewardszpUbq6b.earned.call(addressKg9zFi9, uintIjCp8B, {from: accounts[0]});
//		const uint256ptdKTH9 = await WolfStakingRewardszpUbq6b.exit.call(uintXihcoa9, {from: accounts[5]});
//		const uint256hPhkOO7 = await WolfStakingRewardszpUbq6b.balanceOfPerPool.call(addressOxpc3I, uintaPiaVFv, {from: accounts[0]});
//		const uint256cvH6Hc = await WolfStakingRewardszpUbq6b.stake.call(uintpUAlYOC, uintoPrhZko, {from: accounts[4]});

		assert.equal(uint256QzeitxT, BigInt("0"))
		assert.equal(uint256u2qVJxR, BigInt("0"))
		await expect(WolfStakingRewardszpUbq6b.exit.call(uintOy7e066, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressha4aQ3S = accounts[3]
		const addressqJkpnAr = accounts[0]
		const addressZMDtpwA = accounts[0]
		const WolfStakingRewardsogW2JHd = await WolfStakingRewards.new(addressha4aQ3S, addressqJkpnAr, addressZMDtpwA, {from: accounts[3]});
		const uintvkz0ne1 = BigInt("796")
		const uintgUUP1sQ = BigInt("1866")
		const uintgEJoW9N = BigInt("980")
		const addressKeFA0RQ = accounts[1]
		const uinthf4HfFH = BigInt("122")
		const uintR8khqI1 = BigInt("1571")
		const uinteVpTIub = await WolfStakingRewardsogW2JHd.getReward.call(uintvkz0ne1, {from: accounts[1]});
//		const uint256arraydaos2XJ = await WolfStakingRewardsogW2JHd.updateNotifyRewardAmount.call(uintgUUP1sQ, {from: accounts[5]});
//		const uint256zW8ne6M = await WolfStakingRewardsogW2JHd.balanceOfPerPool.call(addressKeFA0RQ, uintgEJoW9N, {from: accounts[2]});
//		const uintj0cMohc = await WolfStakingRewardsogW2JHd.getReward.call(uinthf4HfFH, {from: accounts[5]});
//		const uint256um4oxX3 = await WolfStakingRewardsogW2JHd.exit.call(uintR8khqI1, {from: accounts[4]});

		await expect(WolfStakingRewardsogW2JHd.updateNotifyRewardAmount.call(uintgUUP1sQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringa4dooV = "N2KWbqAj7EqyomsYOBqtkTLKXH37LJKC7XlkVNbgub1VM7qGNVQfdYfKlgloBnRpPF"
		const stringG9hPaJo = "egXelCsQ6Fb9jCNVaT87HuhEKDh8ki6fFQ2WwCUJ9wMrUwDi8LXJYTNA8TtJbDicDazqTvg2jAni0rAflIugaSArY"
		const uintmwtY5o = BigInt("105")
		const WolfStakingRewardsWL95B50 = await WolfStakingRewards.new(stringa4dooV, stringG9hPaJo, uintmwtY5o, {from: accounts[2]});
		const uintJgMnmfj = BigInt("1717")
		const uintnE98HCw = BigInt("2018")
		const addresstCSV1PX = accounts[3]
		const uintNGDT82 = BigInt("353")
		const uintuF4pRDe = BigInt("966")
		const addressnbVzLY = accounts[1]
		const uint256EAFsxYc = await WolfStakingRewardsWL95B50.totalSupplyPerPool.call(uintJgMnmfj, {from: accounts[1]});
		const uint256Q9GDryi = await WolfStakingRewardsWL95B50.earned.call(addresstCSV1PX, uintnE98HCw, {from: accounts[4]});
		const uint256arrayX62mbZl = await WolfStakingRewardsWL95B50.updateNotifyRewardAmount.call(uintNGDT82, {from: accounts[0]});
		const uint256WW3u1nH = await WolfStakingRewardsWL95B50.earned.call(addressnbVzLY, uintuF4pRDe, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressCjNpYy0 = accounts[3]
		const addresse7xAqDE = accounts[0]
		const addressh6bDgIJ = accounts[0]
		const WolfStakingRewardsogW2JHd = await WolfStakingRewards.new(addressCjNpYy0, addresse7xAqDE, addressh6bDgIJ, {from: accounts[3]});
		const uint5hut4Q = BigInt("1673")
		const uintLj37MR8 = BigInt("1471")
		const uintE0zthS0 = BigInt("1695")
		const uinto619Z8B = BigInt("649")
		const uintG9eCiG7 = BigInt("809")
		const uintTqpCjV = BigInt("122")
//		const uint256AOr6Hm3 = await WolfStakingRewardsogW2JHd.stake.call(uintLj37MR8, uint5hut4Q, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256rVHH6n = await WolfStakingRewardsogW2JHd.totalSupplyPerPool.call(uintE0zthS0, {from: accounts[3]});
//		const uint256HSqiebw = await WolfStakingRewardsogW2JHd.totalSupplyPerPool.call(uinto619Z8B, {from: accounts[1]});
//		const uinteVpTIub = await WolfStakingRewardsogW2JHd.getReward.call(uintG9eCiG7, {from: accounts[1]});
//		const uintj0cMohc = await WolfStakingRewardsogW2JHd.getReward.call(uintTqpCjV, {from: accounts[5]});

		await expect(WolfStakingRewardsogW2JHd.stake.call(uintLj37MR8, uint5hut4Q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresszB5hzhx = accounts[3]
		const addressQDpDJIK = accounts[0]
		const addressJFjF494 = accounts[0]
		const WolfStakingRewardsogW2JHd = await WolfStakingRewards.new(addresszB5hzhx, addressQDpDJIK, addressJFjF494, {from: accounts[3]});
		const uintqhg4FUK = BigInt("796")
		const uintlcWCBCT = BigInt("693")
		const uintZb08M7 = BigInt("1866")
		const uintd4cCQeD = BigInt("980")
		const addressHmmJsk = accounts[1]
		const uintH5wXP2g = BigInt("93")
		const uintyFI981 = BigInt("1571")
		const uinteVpTIub = await WolfStakingRewardsogW2JHd.getReward.call(uintqhg4FUK, {from: accounts[1]});
//		const uint256pPfKmN9 = await WolfStakingRewardsogW2JHd.getRewardForDuration.call(uintlcWCBCT, {from: accounts[2]});
//		const uint256arraydaos2XJ = await WolfStakingRewardsogW2JHd.updateNotifyRewardAmount.call(uintZb08M7, {from: accounts[5]});
//		const uint256zW8ne6M = await WolfStakingRewardsogW2JHd.balanceOfPerPool.call(addressHmmJsk, uintd4cCQeD, {from: accounts[2]});
//		const uintj0cMohc = await WolfStakingRewardsogW2JHd.getReward.call(uintH5wXP2g, {from: accounts[5]});
//		const uint256um4oxX3 = await WolfStakingRewardsogW2JHd.exit.call(uintyFI981, {from: accounts[4]});

		await expect(WolfStakingRewardsogW2JHd.getRewardForDuration.call(uintlcWCBCT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressIsp0lOe = accounts[3]
		const addressvBtax2b = accounts[0]
		const addressPWyL2TG = accounts[0]
		const WolfStakingRewardsogW2JHd = await WolfStakingRewards.new(addressIsp0lOe, addressvBtax2b, addressPWyL2TG, {from: accounts[3]});
		const uintydEQz0 = BigInt("1673")
		const uintZgflAPk = BigInt("1471")
		const uintjU9aS4K = BigInt("1708")
		const uintAWfSjrP = BigInt("649")
		const uintrfnxJlT = BigInt("1607")
		const addresslM6qGd = accounts[2]
		const uintN1EJphM = BigInt("809")
		const uintcI7aSik = BigInt("122")
//		const uint256AOr6Hm3 = await WolfStakingRewardsogW2JHd.stake.call(uintZgflAPk, uintydEQz0, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256rVHH6n = await WolfStakingRewardsogW2JHd.totalSupplyPerPool.call(uintjU9aS4K, {from: accounts[3]});
//		const uint256HSqiebw = await WolfStakingRewardsogW2JHd.totalSupplyPerPool.call(uintAWfSjrP, {from: accounts[1]});
//		const addresszVbpxmT = await WolfStakingRewardsogW2JHd.updateReward.call(addresslM6qGd, uintrfnxJlT, {from: accounts[3]});
//		const uinteVpTIub = await WolfStakingRewardsogW2JHd.getReward.call(uintN1EJphM, {from: accounts[1]});
//		const uintj0cMohc = await WolfStakingRewardsogW2JHd.getReward.call(uintcI7aSik, {from: accounts[5]});
//		await WolfStakingRewardsogW2JHd.nonReentrant.call({from: accounts[2]});

		await expect(WolfStakingRewardsogW2JHd.stake.call(uintZgflAPk, uintydEQz0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringx6alcQv = "B"
		const stringNhEcKY7 = "TCmufzY73B6gcefvFSJw3K6e6nd34kplg7J79JvETy7lotX29wI3Vhm4fScXYNWUA7qKSWGF"
		const uintAeTx02j = BigInt("184")
		const WolfStakingRewardsUvMxf7J = await WolfStakingRewards.new(stringx6alcQv, stringNhEcKY7, uintAeTx02j, {from: accounts[2]});
		const uintqN1JPfw = BigInt("1377")
		const addressprayIle = accounts[5]
		const uintTVkvOhy = BigInt("1654")
		const uintvzGCxZq = BigInt("555")
		const uinte7GiSqL = BigInt("364")
		const addressXdnJqgw = accounts[0]
		const uintXfULLW = BigInt("30")
		const uint256d06Crb9 = await WolfStakingRewardsUvMxf7J.earned.call(addressprayIle, uintqN1JPfw, {from: accounts[5]});
		const uint256kR2ifAN = await WolfStakingRewardsUvMxf7J.lastTimeRewardApplicable.call(uintTVkvOhy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256aixHHnE = await WolfStakingRewardsUvMxf7J.lastTimeRewardApplicable.call(uintvzGCxZq, {from: accounts[3]});
		const uint256WyO3cOZ = await WolfStakingRewardsUvMxf7J.earned.call(addressXdnJqgw, uinte7GiSqL, {from: accounts[0]});
		const uint256dVNENOi = await WolfStakingRewardsUvMxf7J.totalSupplyPerPool.call(uintXfULLW, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZ0dwr6 = "caojDQZV1wqi2JU89EfGVEgKQvO5bywK74tTQBFg9mewyKGniQTDa0sQVXOGgXS1chNwpESDBnCahp"
		const stringNCyrmKn = "EUfhddr0a64I4zykLdx8NN2mhtM2AXkqmFMTsU6NEfVR9snWriCjoNhPrRLf2622bJbhBVCUSUF"
		const uintvicP16G = BigInt("131")
		const WolfStakingRewardsyKSXtfw = await WolfStakingRewards.new(stringZ0dwr6, stringNCyrmKn, uintvicP16G, {from: accounts[2]});
		const uintuf5Gc3x = BigInt("1600")
		const uintRLksZM = BigInt("1865")
		const uint256h2UGpDe = await WolfStakingRewardsyKSXtfw.rewardPerToken.call(uintuf5Gc3x, {from: accounts[1]});
		await WolfStakingRewardsyKSXtfw.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256JKhiwZq = await WolfStakingRewardsyKSXtfw.lastTimeRewardApplicable.call(uintRLksZM, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcmEby2K = "RpuipQUwS4T5chCE166tRgxHOpO5z5myUXemgEGlugN"
		const stringvk7gzHR = "UiXZ2SQyr21HgpwKS9vXzTbgC8mDGHNxk5psl9RyTQXmJfPFcDVg9p9IK2GQrHmOk"
		const uintlY7u2x9 = BigInt("111")
		const WolfStakingRewardsmeASyO = await WolfStakingRewards.new(stringcmEby2K, stringvk7gzHR, uintlY7u2x9, {from: accounts[5]});
		const uintEhZjRbt = BigInt("827")
		const uintZG9fUzR = BigInt("1206")
		const uinthXpQqnf = BigInt("328")
		const uintDkqSUuB = BigInt("1303")
		const uint256M6wWXMA = await WolfStakingRewardsmeASyO.withdrawRemainingBalance.call(uintZG9fUzR, uintEhZjRbt, {from: accounts[3]});
		const uint256b93NE4e = await WolfStakingRewardsmeASyO.withdrawRemainingBalance.call(uintDkqSUuB, uinthXpQqnf, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressGVRuTTA = accounts[2]
		const addressnwtXvnW = accounts[5]
		const addresssy2TGTY = accounts[0]
		const WolfStakingRewardszpUbq6b = await WolfStakingRewards.new(addressGVRuTTA, addressnwtXvnW, addresssy2TGTY, {from: accounts[3]});
		const uintJsZVgNP = BigInt("1968")
		const uintWjzvzzW = BigInt("850")
		const uintkgqHYNj = BigInt("1969")
		const uintbwRkWkE = BigInt("363")
		const uintbhlxZbA = BigInt("1068")
		const addressFSJRJ80 = accounts[3]
		const uintdBGdE8v = BigInt("1752")
		const uintRkPA2Te = BigInt("487")
		const uintC3qLSH7 = BigInt("736")
		const addressUtbBwkI = accounts[1]
		const uintn9KKRRw = BigInt("599")
		const addressaw6kLlP = accounts[0]
		const uintC1SElNs = BigInt("394")
		const uintOvGyVHY = BigInt("1186")
		const uint256u2qVJxR = await WolfStakingRewardszpUbq6b.rewardPerToken.call(uintJsZVgNP, {from: accounts[3]});
		const uinttPoak4h = await WolfStakingRewardszpUbq6b.getReward.call(uintWjzvzzW, {from: accounts[0]});
//		const uint256zw9PTne = await WolfStakingRewardszpUbq6b.withdrawRemainingBalance.call(uintbwRkWkE, uintkgqHYNj, {from: accounts[3]});
//		const uint256SJeHoT = await WolfStakingRewardszpUbq6b.earned.call(addressFSJRJ80, uintbhlxZbA, {from: accounts[1]});
//		const uint256ZrCcxGw = await WolfStakingRewardszpUbq6b.exit.call(uintdBGdE8v, {from: accounts[1]});
//		const uint256sqj4zHx = await WolfStakingRewardszpUbq6b.exit.call(uintRkPA2Te, {from: accounts[0]});
//		const stringf89jtue = await WolfStakingRewardszpUbq6b.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256gigT7ys = await WolfStakingRewardszpUbq6b.earned.call(addressUtbBwkI, uintC3qLSH7, {from: accounts[0]});
//		const uint256hPhkOO7 = await WolfStakingRewardszpUbq6b.balanceOfPerPool.call(addressaw6kLlP, uintn9KKRRw, {from: accounts[0]});
//		const uint256cvH6Hc = await WolfStakingRewardszpUbq6b.stake.call(uintOvGyVHY, uintC1SElNs, {from: accounts[4]});

		assert.equal(uint256u2qVJxR, BigInt("0"))
		await expect(WolfStakingRewardszpUbq6b.withdrawRemainingBalance.call(uintbwRkWkE, uintkgqHYNj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringFGQjiO3 = "guAMw2T2Yoxzhxnb3PqGOY3nHezY4lPMCq8eeAqHmKe4kg8iGmN7fqjwCLb2d8pdi"
		const stringB8oj6XS = "ocZ4eoxChGsryM5qp9"
		const uintlbAWWIS = BigInt("217")
		const WolfStakingRewardsUOqykkw = await WolfStakingRewards.new(stringFGQjiO3, stringB8oj6XS, uintlbAWWIS, {from: accounts[5]});
		const uintmn42QFP = BigInt("1964")
		const addressE4pqCAH = accounts[2]
		const uintqB7blL4 = BigInt("846")
		const uintMJ1kk5 = BigInt("819")
		const uint256YsdG0m8 = await WolfStakingRewardsUOqykkw.earned.call(addressE4pqCAH, uintmn42QFP, {from: accounts[2]});
		const uintrE15IB8 = await WolfStakingRewardsUOqykkw.getReward.call(uintqB7blL4, {from: accounts[1]});
		const uintr3HUU1V = await WolfStakingRewardsUOqykkw.getReward.call(uintMJ1kk5, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUMQJnx8 = "jGwSHbc"
		const stringQyTKXgL = "TBDVzbxXR"
		const uintEr8a2oB = BigInt("17")
		const WolfStakingRewardsebluAYA = await WolfStakingRewards.new(stringUMQJnx8, stringQyTKXgL, uintEr8a2oB, {from: accounts[0]});
		const uintnuvwCBS = BigInt("1911")
		const addresszzIGaIG = accounts[4]
		const uintCkbH30u = BigInt("768")
		const addresswAyGIdD = accounts[2]
		const uintatwmJq2 = BigInt("744")
		const addressaGB2Li = await WolfStakingRewardsebluAYA.updateReward.call(addresszzIGaIG, uintnuvwCBS, {from: accounts[1]});
		const uint256xLvLwSX = await WolfStakingRewardsebluAYA.earned.call(addresswAyGIdD, uintCkbH30u, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsebluAYA.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256nhdGgRI = await WolfStakingRewardsebluAYA.totalSupplyPerPool.call(uintatwmJq2, {from: accounts[1]});
		const uint8Pp7d9lp = await WolfStakingRewardsebluAYA.decimals.call({from: accounts[1]});
		await WolfStakingRewardsebluAYA.nonReentrant.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvasaLVn = "atZSkWtl9KlxF"
		const stringKcQVI6s = "Pqd6"
		const uintt6IjN2z = BigInt("175")
		const WolfStakingRewardsV97z9s3 = await WolfStakingRewards.new(stringvasaLVn, stringKcQVI6s, uintt6IjN2z, {from: accounts[1]});
		const uintAUY8UH0 = BigInt("476")
		const addresshYzfEDj = accounts[4]
		const uintdS84iJb = BigInt("338")
		const uintMktGw7q = BigInt("1392")
		const uintRMClDQN = BigInt("939")
		const uintsjIPDv7 = BigInt("2037")
		const uintIRl37w9 = BigInt("1364")
		const uint256Z4cgcyl = await WolfStakingRewardsV97z9s3.earned.call(addresshYzfEDj, uintAUY8UH0, {from: accounts[2]});
		const uintW4YFGW = await WolfStakingRewardsV97z9s3.getReward.call(uintdS84iJb, {from: accounts[4]});
		const uint256wkGlPuC = await WolfStakingRewardsV97z9s3.stake.call(uintRMClDQN, uintMktGw7q, {from: accounts[4]});
		const uint256mHGGr1Y = await WolfStakingRewardsV97z9s3.stake.call(uintIRl37w9, uintsjIPDv7, {from: accounts[3]});
		const uint8GkppLJo = await WolfStakingRewardsV97z9s3.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgsjAXc = "g3veBwvnoXv1GiYFZ86iNzwpdEiwPYF78Djy8fniqvDr2cQw6FkRnMWB2krR7fPzzMO"
		const stringLbisURa = "blbq8fm4PdySWKoiMMIbw7LUGzZp6HAsVTz56Le"
		const uintnnvsiZa = BigInt("197")
		const WolfStakingRewardsx9CYRs7 = await WolfStakingRewards.new(stringgsjAXc, stringLbisURa, uintnnvsiZa, {from: accounts[3]});
		const uinttYNda9Z = BigInt("988")
		const uintfQ4gVS7 = BigInt("1817")
		const uintf50KYx7 = BigInt("515")
		const addresszLIisaz = accounts[3]
		const uintoNb59C = BigInt("1804")
		const uintyouMmv3 = BigInt("703")
		const uintuioCCA = BigInt("797")
		const uint256KhT7NcL = await WolfStakingRewardsx9CYRs7.withdraw.call(uintfQ4gVS7, uinttYNda9Z, {from: accounts[3]});
		const addressmTnbEHZ = await WolfStakingRewardsx9CYRs7.updateReward.call(addresszLIisaz, uintf50KYx7, {from: accounts[0]});
		await WolfStakingRewardsx9CYRs7.nonReentrant.call({from: accounts[3]});
		const uint256Gg121rR = await WolfStakingRewardsx9CYRs7.rewardPerToken.call(uintoNb59C, {from: "0x0000000000000000000000000000000000000001"});
		const uint256noIboOh = await WolfStakingRewardsx9CYRs7.withdrawRemainingBalance.call(uintuioCCA, uintyouMmv3, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressaqmYqK9 = accounts[2]
		const address0uBeEo = "0x0000000000000000000000000000000000000001"
		const addressNYq6XAs = accounts[1]
		const WolfStakingRewardsSUEs4FH = await WolfStakingRewards.new(addressaqmYqK9, address0uBeEo, addressNYq6XAs, {from: "0x0000000000000000000000000000000000000001"});
		const uintoZxWDBe = BigInt("332")
		const uintCRdWO0l = BigInt("880")
		const uintGq0S5rO = await WolfStakingRewardsSUEs4FH.getReward.call(uintoZxWDBe, {from: accounts[1]});
		const uint256iX7y3uB = await WolfStakingRewardsSUEs4FH.getRewardForDuration.call(uintCRdWO0l, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvShmofo = "6It2YUVZ"
		const stringRvYxn1P = "pLPN16jxyrD7rpvb6u"
		const uintCiylAi0 = BigInt("250")
		const WolfStakingRewardstKoLd8o = await WolfStakingRewards.new(stringvShmofo, stringRvYxn1P, uintCiylAi0, {from: accounts[3]});
		const uinttzCjA84 = BigInt("1860")
		const uintIKAxer9 = BigInt("1180")
		const uint256jpMNJ0N = await WolfStakingRewardstKoLd8o.totalSupplyPerPool.call(uinttzCjA84, {from: accounts[3]});
		const uint256xnZG7Se = await WolfStakingRewardstKoLd8o.totalSupplyPerPool.call(uintIKAxer9, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGWRotjW = "lhUkgSMu6Kqfts5HvRL381QkqjK7WBz8NwBkMef7ukdC2h"
		const stringmuANCAp = "GNthT7N4kyEVPn7gH5ktUT7P8LItWMiutvPbmjlFRPwQVV9IIOD5mlAnQvrHlDreGsHHrO8gKgkUhrEoGWjjafCuGWQ2XuXhl"
		const uinttfyRTTF = BigInt("105")
		const WolfStakingRewardsNt57WE = await WolfStakingRewards.new(stringGWRotjW, stringmuANCAp, uinttfyRTTF, {from: accounts[1]});
		const uintUBUvH1d = BigInt("1085")
		const uintphyIPRc = BigInt("1748")
		const uintzLj3A8c = BigInt("1729")
		const uint6Hdr4M = BigInt("30")
		const addressnDIK2a4 = accounts[5]
		const uint9SfUkc = BigInt("156")
		const uinten8AeJc = BigInt("1784")
		const uintk7hhYz = BigInt("1674")
		const addressNgKqkFF = accounts[0]
		const uint256K6z03E7 = await WolfStakingRewardsNt57WE.stake.call(uintphyIPRc, uintUBUvH1d, {from: accounts[1]});
		const uint256TM0No8j = await WolfStakingRewardsNt57WE.exit.call(uintzLj3A8c, {from: accounts[1]});
		const addressgeQ0y5e = await WolfStakingRewardsNt57WE.updateReward.call(addressnDIK2a4, uint6Hdr4M, {from: accounts[1]});
		const uint256EJqOLBB = await WolfStakingRewardsNt57WE.withdraw.call(uinten8AeJc, uint9SfUkc, {from: accounts[4]});
		await WolfStakingRewardsNt57WE.onlyRewardsDistribution.call({from: accounts[4]});
		const addressgYWQcgK = await WolfStakingRewardsNt57WE.updateReward.call(addressNgKqkFF, uintk7hhYz, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringim39f2 = "KGMu1Mhh7n1UlXumRq0c88MbJQO2k6gRhk5GAkYPYUgemn"
		const stringbQSe1ij = "vVG"
		const uintU1P0RgL = BigInt("232")
		const WolfStakingRewardsTZXIm8 = await WolfStakingRewards.new(stringim39f2, stringbQSe1ij, uintU1P0RgL, {from: accounts[3]});
		const uintPhKTNUU = BigInt("1930")
		const uintlfCAlST = BigInt("1995")
		await WolfStakingRewardsTZXIm8.onlyOwner.call({from: accounts[4]});
		await WolfStakingRewardsTZXIm8.nonReentrant.call({from: accounts[0]});
		const uint256ADeGp9a = await WolfStakingRewardsTZXIm8.stake.call(uintlfCAlST, uintPhKTNUU, {from: accounts[2]});
		const uint8TIb5qfo = await WolfStakingRewardsTZXIm8.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMW2vpkO = "XcpMpYnYODiEHH2S6m56az79jBRjRov2FaG3gXWnPk3y4JtlfxnzJeEUbp7mWq39Je6EWFQ6fKhEft4YY2z"
		const stringYKeNRAu = "oaDAad4O9LHk7eag6anhcHAkG893kKTv3auHkUAl7XGptId0hXf5lfwe"
		const uintEPFZjJ5 = BigInt("239")
		const WolfStakingRewardsGjIobKU = await WolfStakingRewards.new(stringMW2vpkO, stringYKeNRAu, uintEPFZjJ5, {from: "0x0000000000000000000000000000000000000001"});
		const uintf3Us4u1 = BigInt("451")
		const uintbSy8VsV = BigInt("917")
		const uintBsGP906 = BigInt("147")
		const addressWbPfUBW = accounts[1]
		const uintPBKd9de = BigInt("392")
		const uint8g9kUEME = await WolfStakingRewardsGjIobKU.decimals.call({from: accounts[1]});
		const uint256Bo5QRxd = await WolfStakingRewardsGjIobKU.getRewardForDuration.call(uintf3Us4u1, {from: accounts[3]});
		const uint256XZZ4aX5 = await WolfStakingRewardsGjIobKU.totalSupplyPerPool.call(uintbSy8VsV, {from: accounts[0]});
		const addressJa68YHM = await WolfStakingRewardsGjIobKU.updateReward.call(addressWbPfUBW, uintBsGP906, {from: accounts[0]});
		const stringWJLHqc = await WolfStakingRewardsGjIobKU.name.call({from: accounts[3]});
		const uintq17SbVf = await WolfStakingRewardsGjIobKU.getReward.call(uintPBKd9de, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLCLS6xh = "HgLl0XHcsY6k4bqvjYe7QOzeQeDkyWc"
		const stringKsiIDbs = "yMF83tbyoGwDkAb1ePwmwaabBwUaovTOtNVmXiG"
		const uintPLetkU5 = BigInt("124")
		const WolfStakingRewardsyygBTyw = await WolfStakingRewards.new(stringLCLS6xh, stringKsiIDbs, uintPLetkU5, {from: accounts[2]});
		const uintoIPUy1l = BigInt("954")
		const address554DY5 = "0x0000000000000000000000000000000000000001"
		const uintCFg5Tpj = BigInt("511")
		await WolfStakingRewardsyygBTyw.onlyRewardsDistribution.call({from: accounts[1]});
		const addressss7WkeQ = await WolfStakingRewardsyygBTyw.updateReward.call(address554DY5, uintoIPUy1l, {from: accounts[5]});
		const uint256gbRpZhw = await WolfStakingRewardsyygBTyw.exit.call(uintCFg5Tpj, {from: accounts[3]});
		await WolfStakingRewardsyygBTyw.nonReentrant.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringr2qtFr = "df3p3"
		const stringcuQ9etj = "WPGSVunzYRS4zR8LDrOgFW8h8VUJN"
		const uinte2QeFfe = BigInt("98")
		const WolfStakingRewardsf4wCcWV = await WolfStakingRewards.new(stringr2qtFr, stringcuQ9etj, uinte2QeFfe, {from: accounts[2]});
		const uinttsWdICD = BigInt("1140")
		const addressiBsp63 = accounts[0]
		const uintZL0cVZg = BigInt("236")
		const uintwaqXaAd = BigInt("1015")
		const uintSL0B7yK = BigInt("1515")
		const addressLDXkZFo = accounts[3]
		const addressZLwHrUv = await WolfStakingRewardsf4wCcWV.updateReward.call(addressiBsp63, uinttsWdICD, {from: accounts[3]});
		const uint256ICkNRgO = await WolfStakingRewardsf4wCcWV.rewardPerToken.call(uintZL0cVZg, {from: accounts[0]});
		const uint256A3ngiKy = await WolfStakingRewardsf4wCcWV.rewardPerToken.call(uintwaqXaAd, {from: accounts[2]});
		const uint256kyGfvU = await WolfStakingRewardsf4wCcWV.balanceOfPerPool.call(addressLDXkZFo, uintSL0B7yK, {from: accounts[2]});
		await WolfStakingRewardsf4wCcWV.onlyRewardsDistribution.call({from: accounts[0]});
		const uint8IjaapOd = await WolfStakingRewardsf4wCcWV.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqtDaFYS = "DJzffG9WWTkPlQalbV1cwWuAvpjKH0SsvQR9f0oadVox9XpbmOh6KMYQU3JeDwDOHHvMDyzPoZV5o0pulfPm4O"
		const stringpOyaM7Y = "1mGmzVEtZ2qFCFF7UExeYqbyq38W3k6vn0djCEXIBdrXfeaOZOhoLN5AwshQf"
		const uintN7jHUBI = BigInt("130")
		const WolfStakingRewardsy4tRRxS = await WolfStakingRewards.new(stringqtDaFYS, stringpOyaM7Y, uintN7jHUBI, {from: accounts[1]});
		const uintktW0l7O = BigInt("707")
		const uintA0uY4X8 = BigInt("1755")
		const uinthrjjQFE = BigInt("1852")
		await WolfStakingRewardsy4tRRxS.onlyOwner.call({from: accounts[1]});
		const uint256hu8OOWD = await WolfStakingRewardsy4tRRxS.rewardPerToken.call(uintktW0l7O, {from: accounts[4]});
		const uint256gX4aZht = await WolfStakingRewardsy4tRRxS.getRewardForDuration.call(uintA0uY4X8, {from: accounts[1]});
		const uint256eGuzEuT = await WolfStakingRewardsy4tRRxS.rewardPerToken.call(uinthrjjQFE, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpGgAUzj = "EfIyNbRYIFcxf5w3yfVUMDhAjw5eBXBWWoYBRFk"
		const stringhUMsAe3 = "LsXBcAc6WALjebsSltUDAERc"
		const uintsUUx1qw = BigInt("118")
		const WolfStakingRewardsCNzI3HO = await WolfStakingRewards.new(stringpGgAUzj, stringhUMsAe3, uintsUUx1qw, {from: accounts[5]});
		const uintL9vVytD = BigInt("1197")
		const uintzqCUgKB = BigInt("589")
		const uint5KFLDf = BigInt("16")
		const uint256dePGn75 = await WolfStakingRewardsCNzI3HO.rewardPerToken.call(uintL9vVytD, {from: accounts[0]});
		const stringWuLkAL = await WolfStakingRewardsCNzI3HO.symbol.call({from: accounts[4]});
		const uint256sEM9ZZC = await WolfStakingRewardsCNzI3HO.exit.call(uintzqCUgKB, {from: accounts[0]});
		const stringp5jKhZn = await WolfStakingRewardsCNzI3HO.name.call({from: accounts[4]});
		await WolfStakingRewardsCNzI3HO.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256PipL6NT = await WolfStakingRewardsCNzI3HO.rewardPerToken.call(uint5KFLDf, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwBj2XNe = "QYMUreuHcIWyMBu41KR5ZWu6CoV3P2"
		const stringZ8RwJL9 = "sUKPp3TFlD6HYcOrlpwEeeW0kYiunZlFsMRCiJeAidAt3VqypXKP4GrJLMitlQEtPnv7dUgXNu54Ysfa7bjOsvMpZP7LKSc"
		const uintydbJRY = BigInt("72")
		const WolfStakingRewards8GRuaK = await WolfStakingRewards.new(stringwBj2XNe, stringZ8RwJL9, uintydbJRY, {from: accounts[0]});
		const uintHNn77tO = BigInt("152")
		const uintS1yVUFQ = BigInt("112")
		const uintF5zkXcU = BigInt("947")
		const uintbr9SmO = BigInt("434")
		const uint256uxlCT6z = await WolfStakingRewards8GRuaK.withdraw.call(uintS1yVUFQ, uintHNn77tO, {from: accounts[3]});
		const stringavOxgYs = await WolfStakingRewards8GRuaK.symbol.call({from: accounts[1]});
		const uint256bdgnu3g = await WolfStakingRewards8GRuaK.withdraw.call(uintbr9SmO, uintF5zkXcU, {from: accounts[2]});
		const stringgghK6Mv = await WolfStakingRewards8GRuaK.symbol.call({from: accounts[1]});
		await WolfStakingRewards8GRuaK.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQzpzuww = "Lz4YbyoroitNMpWuAmey3moUdCvm7VWy9TFzAB6VvDxRqOaJUWJiNavUi43yfqo3k6cgyUCpjvpF00u9eYE0U8EfsFKG9VE9"
		const stringhvAuNSK = "yu"
		const uintynfqTRx = BigInt("32")
		const WolfStakingRewardsIDHMiPi = await WolfStakingRewards.new(stringQzpzuww, stringhvAuNSK, uintynfqTRx, {from: accounts[3]});
		const uintDcYKTWJ = BigInt("1867")
		const uintmqyuOPK = BigInt("134")
		const addressEBcUHWW = accounts[1]
		const stringSGprYAz = await WolfStakingRewardsIDHMiPi.name.call({from: accounts[3]});
		const uint256KRJCfKD = await WolfStakingRewardsIDHMiPi.exit.call(uintDcYKTWJ, {from: accounts[2]});
		const addressezdPp0W = await WolfStakingRewardsIDHMiPi.updateReward.call(addressEBcUHWW, uintmqyuOPK, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnAUX6RF = "mv"
		const stringE4c0Fj8 = "ceNlJV07"
		const uintGPHMDAI = BigInt("55")
		const WolfStakingRewardsiF49QN = await WolfStakingRewards.new(stringnAUX6RF, stringE4c0Fj8, uintGPHMDAI, {from: accounts[0]});
		const uinthta6psw = BigInt("1174")
		const uintY3JKpX = BigInt("273")
		const addressWjQWbTh = accounts[2]
		const uintHnRgHD9 = BigInt("1970")
		const addressvFmWe9v = accounts[4]
		const uintrLrB8HO = BigInt("1163")
		const stringZbA7IL7 = await WolfStakingRewardsiF49QN.symbol.call({from: accounts[1]});
		const uint256arrayz5l75p4 = await WolfStakingRewardsiF49QN.updateNotifyRewardAmount.call(uinthta6psw, {from: "0x0000000000000000000000000000000000000001"});
		const addressGUTFHE = await WolfStakingRewardsiF49QN.updateReward.call(addressWjQWbTh, uintY3JKpX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wmoydUE = await WolfStakingRewardsiF49QN.balanceOfPerPool.call(addressvFmWe9v, uintHnRgHD9, {from: "0x0000000000000000000000000000000000000001"});
		const uintnPnWywD = await WolfStakingRewardsiF49QN.getReward.call(uintrLrB8HO, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlLrYi9 = "JJpavdbbrsA9jCSaG3PSKdRqd"
		const stringqgL6JzG = "vyiLcpxGEQtXEgEs3VUQ1FlaOXTL8tMsKbSdyUyfwnUGbzONJqIsuYcjffqHOLR4I5o118oYkp"
		const uintOaFZ4rk = BigInt("218")
		const WolfStakingRewardsNa7OYg = await WolfStakingRewards.new(stringlLrYi9, stringqgL6JzG, uintOaFZ4rk, {from: accounts[5]});
		const uintS5cs5sh = BigInt("1306")
		const uintYswSk9L = BigInt("972")
		const uintpJm3mHd = BigInt("907")
		const uintYmgo7IH = BigInt("1767")
		const uintt6DZuP7 = BigInt("167")
		const addressr30xrOT = "0x0000000000000000000000000000000000000001"
		const stringsk1nb4 = await WolfStakingRewardsNa7OYg.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256UodByjA = await WolfStakingRewardsNa7OYg.withdrawRemainingBalance.call(uintYswSk9L, uintS5cs5sh, {from: accounts[1]});
		const stringvbug73c = await WolfStakingRewardsNa7OYg.symbol.call({from: accounts[0]});
		const uint256x8G3xJY = await WolfStakingRewardsNa7OYg.withdraw.call(uintYmgo7IH, uintpJm3mHd, {from: accounts[2]});
		const uint256W6nFakj = await WolfStakingRewardsNa7OYg.earned.call(addressr30xrOT, uintt6DZuP7, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcQaDlyH = "NBAzpEZ6eFGmW3URm3IxLVwVI6CnsskwQWTYporX2MbqNIJolJx2g5bDRr"
		const stringQI8G409 = "2Q8t4b"
		const uintyzLFUC1 = BigInt("122")
		const WolfStakingRewardsSSqdvnp = await WolfStakingRewards.new(stringcQaDlyH, stringQI8G409, uintyzLFUC1, {from: accounts[4]});
		const uintIyIqn68 = BigInt("1071")
		const uintXwokfoB = BigInt("1475")
		const addressHMlL1T = accounts[3]
		const uintisRGNqc = BigInt("1608")
		const uinttSVPwYG = BigInt("1872")
		const uintiT3DDsu = BigInt("1705")
		const uinteGTvCyG = BigInt("417")
		const uint256mSLd6Bl = await WolfStakingRewardsSSqdvnp.exit.call(uintIyIqn68, {from: accounts[2]});
		const addressQFXcMnr = await WolfStakingRewardsSSqdvnp.updateReward.call(addressHMlL1T, uintXwokfoB, {from: accounts[1]});
		const uint256xW4W7R = await WolfStakingRewardsSSqdvnp.withdrawRemainingBalance.call(uinttSVPwYG, uintisRGNqc, {from: accounts[1]});
		const uint256J7pCrgV = await WolfStakingRewardsSSqdvnp.withdraw.call(uinteGTvCyG, uintiT3DDsu, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringusxMhkG = "AA5eWqeTJtQ2lR7SmsCd8IlUxwDtICLfIvEgCpjSKyTNlqajwZbgToxvCJN1TnPifqQK4lxf2DMK123wvln5HiafNO9Kpp"
		const stringmMraBRP = "KtBcOyb52HrGyKIGMeMQipEkF53cS2HgEHP9txKGd3SdJOo9AAloIYyq2tA89Xw8N6Z77efVA8lS"
		const uintrIzdLWg = BigInt("165")
		const WolfStakingRewardscgGH70Z = await WolfStakingRewards.new(stringusxMhkG, stringmMraBRP, uintrIzdLWg, {from: accounts[1]});
		const uintlq8Rc1g = BigInt("1399")
		const addresszbmIaoJ = accounts[1]
		const uintIPi7FDq = BigInt("957")
		const uintsMCv2z7 = BigInt("367")
		const uintYFgGh4Q = BigInt("1260")
		const uinth9JZRZI = BigInt("1845")
		const uintKoZ3AJJ = BigInt("292")
		const uintQGYWk2s = BigInt("469")
		const uintsrFXf9X = BigInt("1072")
		const addressFuo9iyi = await WolfStakingRewardscgGH70Z.updateReward.call(addresszbmIaoJ, uintlq8Rc1g, {from: accounts[0]});
		const uint256ySWpSMD = await WolfStakingRewardscgGH70Z.stake.call(uintsMCv2z7, uintIPi7FDq, {from: accounts[2]});
		const uint256EUDJdh8 = await WolfStakingRewardscgGH70Z.exit.call(uintYFgGh4Q, {from: accounts[0]});
		const uint256P0sUMJ9 = await WolfStakingRewardscgGH70Z.getRewardForDuration.call(uinth9JZRZI, {from: accounts[0]});
		const uint256VOYSOVD = await WolfStakingRewardscgGH70Z.withdrawRemainingBalance.call(uintQGYWk2s, uintKoZ3AJJ, {from: accounts[4]});
		const uint256MAzHGf = await WolfStakingRewardscgGH70Z.exit.call(uintsrFXf9X, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUxWeBeS = "NfSmdIKfnvEVJc7PLlgeyPSpwFlIeaH8WtLKkOUvp"
		const stringVxFUIFZ = "NYV9g1Ds9LXiH7kb9Lo8G6Jwlb0hePrDru1QvK7607wMKm3BvUhNgcxOdbvGhQVb"
		const uint87WfJt = BigInt("114")
		const WolfStakingRewardsrdZImdh = await WolfStakingRewards.new(stringUxWeBeS, stringVxFUIFZ, uint87WfJt, {from: accounts[4]});
		const uintUqrd7HE = BigInt("1995")
		const uintPBqxPXl = BigInt("954")
		const uintIkvNjtL = BigInt("66")
		const uint256arrayVXGIlPj = await WolfStakingRewardsrdZImdh.updateNotifyRewardAmount.call(uintUqrd7HE, {from: accounts[4]});
		const uint256kzqGDS9 = await WolfStakingRewardsrdZImdh.getRewardForDuration.call(uintPBqxPXl, {from: accounts[5]});
		await WolfStakingRewardsrdZImdh.onlyRewardsDistribution.call({from: accounts[0]});
		const stringcf2BkT = await WolfStakingRewardsrdZImdh.symbol.call({from: accounts[0]});
		const uint256EVEq5a5 = await WolfStakingRewardsrdZImdh.totalSupplyPerPool.call(uintIkvNjtL, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKZnu7YX = "PEkq0fXyHUYOBclHJuzlBPdW3PdSeX7triZqUFmT"
		const stringHNNNaYz = "sLmEzxpedVF55QZFz2dkViSbU4YRNX64znCbw5oysYoQ7KMl7IBIec8OednsyqLsmww6fCFwl"
		const uintNPTSK1c = BigInt("22")
		const WolfStakingRewardsO7lPQP8 = await WolfStakingRewards.new(stringKZnu7YX, stringHNNNaYz, uintNPTSK1c, {from: accounts[4]});
		const uintTA1A4ee = BigInt("1400")
		const addressXun9vaf = accounts[3]
		const uinttDnvep2 = BigInt("1510")
		const addresskyZ4Shf = await WolfStakingRewardsO7lPQP8.updateReward.call(addressXun9vaf, uintTA1A4ee, {from: accounts[0]});
		const stringbh7hu30 = await WolfStakingRewardsO7lPQP8.symbol.call({from: accounts[1]});
		const uint256FSHI0q0 = await WolfStakingRewardsO7lPQP8.lastTimeRewardApplicable.call(uinttDnvep2, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQJSJbUg = "yhPAxcPIFPI1OT2fqBckjVGU3XNVLq7lXTDSKxyeYKUGpfFskK4RvKQCtVFThlz1REi59X2PbJ7C4mx6RJXEPwLx0iKPqrXc"
		const stringVlcMN0C = "MViX2WEJVHIQXHRoI7p3uUpKU83zwy58R6iyAavZmEY10axSfMx49K3nLij"
		const uintkGE1YtP = BigInt("234")
		const WolfStakingRewardstwidO3a = await WolfStakingRewards.new(stringQJSJbUg, stringVlcMN0C, uintkGE1YtP, {from: accounts[3]});
		const uinthWYfPGe = BigInt("1968")
		const uintBhpN7rh = BigInt("1124")
		const addressRQYJ7z0 = accounts[5]
		const uintbx9d6EG = BigInt("1327")
		const uint256BxmVjy = await WolfStakingRewardstwidO3a.rewardPerToken.call(uinthWYfPGe, {from: accounts[1]});
		const uint2565vUoV8 = await WolfStakingRewardstwidO3a.earned.call(addressRQYJ7z0, uintBhpN7rh, {from: accounts[2]});
		const uint256arrayjCSaD2z = await WolfStakingRewardstwidO3a.updateNotifyRewardAmount.call(uintbx9d6EG, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYCTgAbY = "I7qe0Hc4XccWE2jbykBlftRMG1JuYOkX4AXNCqcYWGs28ridD5iMMeJmgYMashbLfoFHDFyPfh85E77z1EQuPRZAj43QWzu0"
		const stringRA93fp = "SIISQ67vjKfYvTTFCgDGWq"
		const uintOpVsb60 = BigInt("145")
		const WolfStakingRewardscHyliqc = await WolfStakingRewards.new(stringYCTgAbY, stringRA93fp, uintOpVsb60, {from: accounts[3]});
		const uintscd3O9 = BigInt("1410")
		const uintzjicTF1 = BigInt("1936")
		const uintdanCd8s = BigInt("538")
		const addressd0wdWm6 = accounts[1]
		const uintltLXiu = BigInt("1440")
		const uint8QzwQTot = await WolfStakingRewardscHyliqc.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256o0PuXpm = await WolfStakingRewardscHyliqc.withdraw.call(uintzjicTF1, uintscd3O9, {from: accounts[1]});
		await WolfStakingRewardscHyliqc.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256EfOt6CR = await WolfStakingRewardscHyliqc.balanceOfPerPool.call(addressd0wdWm6, uintdanCd8s, {from: accounts[4]});
		const uint256NHRldGv = await WolfStakingRewardscHyliqc.exit.call(uintltLXiu, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyw7jSTF = "Q2ESwjUUxHTGgejANOyM4D7L3OBI89geX7g0GQj4txcsM79fRKGjOHQdAF"
		const stringxJhOxZo = "6yHCrr9SMIb0dTpGk8rPpYWEhl3W1SOtsc8aXu8HDUb6IrWSNGWes3avIIXptSxUv5R4TBo15NLpJv2X"
		const uintPWQVeaQ = BigInt("182")
		const WolfStakingRewardsUaf8pI = await WolfStakingRewards.new(stringyw7jSTF, stringxJhOxZo, uintPWQVeaQ, {from: accounts[3]});
		const uintO2BvHt1 = BigInt("1918")
		const uintLRIZQb = BigInt("1708")
		const uintP1vf28u = BigInt("1068")
		const uintCEapK9G = BigInt("1884")
		const uintcY9pomG = BigInt("1839")
		const uint256S2j744 = await WolfStakingRewardsUaf8pI.exit.call(uintO2BvHt1, {from: accounts[0]});
		const uint256Mt6eNoy = await WolfStakingRewardsUaf8pI.totalSupplyPerPool.call(uintLRIZQb, {from: accounts[3]});
		const uint256arraycDbjUlm = await WolfStakingRewardsUaf8pI.updateNotifyRewardAmount.call(uintP1vf28u, {from: accounts[1]});
		const uint256OazgV8 = await WolfStakingRewardsUaf8pI.stake.call(uintcY9pomG, uintCEapK9G, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtf6iycW = "QlIjmI0Z8JEtg9NpuVvrTUJ18vcgpkcXa89s1PLKri4sgw"
		const stringef1ovM3 = "WHgGuQF96l4nXQHPMwjbuIv9cNxf8NXFzitoQKqsQTMbLMWL1RIjmzHeu7oUR9FhbIqzD4cXqCcF6YRRXoK5mB"
		const uintldzALpt = BigInt("81")
		const WolfStakingRewardsaIUuEW = await WolfStakingRewards.new(stringtf6iycW, stringef1ovM3, uintldzALpt, {from: accounts[0]});
		const uintDSxW9MX = BigInt("53")
		const uintYt8ed1t = BigInt("38")
		const uintIrUChH3 = BigInt("1268")
		const uint256XqHDU3I = await WolfStakingRewardsaIUuEW.withdrawRemainingBalance.call(uintYt8ed1t, uintDSxW9MX, {from: accounts[4]});
		await WolfStakingRewardsaIUuEW.nonReentrant.call({from: accounts[0]});
		const uint256nEVNrEx = await WolfStakingRewardsaIUuEW.lastTimeRewardApplicable.call(uintIrUChH3, {from: accounts[1]});
		await WolfStakingRewardsaIUuEW.onlyRewardsDistribution.call({from: accounts[2]});
	});
})