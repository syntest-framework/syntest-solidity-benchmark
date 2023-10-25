const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringp9lBup5 = "HTyRN8dqK"
		const stringw1LdrS = "XASLnbj5WEaj8pGNyuuwDSMydDHqRLaoQDcxzryPCcM2Nbq1vKpp6xJLTx56TxGGo9lJRqqhA1NgG3d8"
		const uintmB0O5X0 = BigInt("247")
		const WolfStakingRewardsPTubvl6 = await WolfStakingRewards.new(stringp9lBup5, stringw1LdrS, uintmB0O5X0, {from: accounts[5]});
		const uintYPnyc5 = BigInt("1068")
		const uintWZWwhX4 = BigInt("704")
		const uintTiGasgB = BigInt("1843")
		await WolfStakingRewardsPTubvl6.onlyOwner.call({from: accounts[0]});
		const uint256ZSWUgbs = await WolfStakingRewardsPTubvl6.rewardPerToken.call(uintYPnyc5, {from: accounts[1]});
		const uint256lhql3bD = await WolfStakingRewardsPTubvl6.stake.call(uintTiGasgB, uintWZWwhX4, {from: accounts[4]});
		const uint8vA18IOp = await WolfStakingRewardsPTubvl6.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqPJwewI = "I4A1pWB61LbtkC1GDW51DFD7w5F7fGqFVS8WcZIAr1hFAaLjAMU"
		const stringjz1wmIN = "qg6pAIfoDU9bWX53"
		const uintXRvgf7F = BigInt("95")
		const WolfStakingRewardsXvUMKoM = await WolfStakingRewards.new(stringqPJwewI, stringjz1wmIN, uintXRvgf7F, {from: accounts[2]});
		const uintnbiI4b4 = BigInt("1988")
		const addressIcEzCH = accounts[4]
		const uintcJIswFk = BigInt("925")
		const addressMo5Oskf = accounts[1]
		const uintDEypLz = BigInt("1487")
		const uintZLhk8Iu = BigInt("269")
		await WolfStakingRewardsXvUMKoM.onlyOwner.call({from: accounts[5]});
		const uint256CGFRHC0 = await WolfStakingRewardsXvUMKoM.balanceOfPerPool.call(addressIcEzCH, uintnbiI4b4, {from: accounts[3]});
		const addressaQX0Sxt = await WolfStakingRewardsXvUMKoM.updateReward.call(addressMo5Oskf, uintcJIswFk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayaPv5XTt = await WolfStakingRewardsXvUMKoM.updateNotifyRewardAmount.call(uintDEypLz, {from: accounts[3]});
		const uint256mMo6i4z = await WolfStakingRewardsXvUMKoM.rewardPerToken.call(uintZLhk8Iu, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxKJ8jFK = "DZNpSd7I1zOiFXUlymxKe5NLHJ1vOiqKuuDklGfL1ZzhS0Rp5YBM4eyX2AKpBlZrhJUNM8oBKs77MSYbS3ixpDEzJeQn6lFrj"
		const stringzTfc1ZK = "pqGnrRSTACDlYFVvYDfKXfehpYmJU95w4A576Ujyb"
		const uintsPon3oD = BigInt("52")
		const WolfStakingRewardsTjTsUtH = await WolfStakingRewards.new(stringxKJ8jFK, stringzTfc1ZK, uintsPon3oD, {from: accounts[2]});
		const uintiFSL560 = BigInt("1412")
		const addresstRTAn2H = accounts[0]
		const uintXbefa8 = BigInt("185")
		const addressbQm60bp = accounts[4]
		const uintDdAAzz4 = BigInt("200")
		const uintwM85C40 = BigInt("2023")
		const uintFU1OFTZ = BigInt("662")
		const addressNFiPXMt = await WolfStakingRewardsTjTsUtH.updateReward.call(addresstRTAn2H, uintiFSL560, {from: accounts[1]});
		await WolfStakingRewardsTjTsUtH.nonReentrant.call({from: accounts[1]});
		const uint256dNW42My = await WolfStakingRewardsTjTsUtH.balanceOfPerPool.call(addressbQm60bp, uintXbefa8, {from: accounts[1]});
		const uint256arrayFTpyzOK = await WolfStakingRewardsTjTsUtH.updateNotifyRewardAmount.call(uintDdAAzz4, {from: accounts[5]});
		const uint256kb2iNYf = await WolfStakingRewardsTjTsUtH.withdraw.call(uintFU1OFTZ, uintwM85C40, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTl9ck6t = "99dOue6Xqjvi4toy32nJeMuixDFfmK"
		const stringySPSIjr = "BSD9eQOTEXhlanOFqgt6Y8gYFSoYkbCxJgttId23Wc5NiOfRVWVehHYmm5fcHiG3vnlsAbF96xkJPorr"
		const uint67jWaI = BigInt("235")
		const WolfStakingRewardsOb0OSV = await WolfStakingRewards.new(stringTl9ck6t, stringySPSIjr, uint67jWaI, {from: accounts[2]});
		const uintKJLEhoO = BigInt("382")
		const uintavtWfNm = BigInt("139")
		const uintGyEjFXM = BigInt("1341")
		const uintHxas22u = BigInt("1651")
		const uintKQnAcoQ = BigInt("1055")
		const uintAJZlGc5 = BigInt("54")
		const uint256dZn07bq = await WolfStakingRewardsOb0OSV.withdraw.call(uintavtWfNm, uintKJLEhoO, {from: accounts[2]});
		const uint256arrayUGL327l = await WolfStakingRewardsOb0OSV.updateNotifyRewardAmount.call(uintGyEjFXM, {from: accounts[0]});
		const uint256qNpSKSC = await WolfStakingRewardsOb0OSV.exit.call(uintHxas22u, {from: accounts[0]});
		const uint256xd5O4s7 = await WolfStakingRewardsOb0OSV.stake.call(uintAJZlGc5, uintKQnAcoQ, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCwgmPkA = "98bWMwtCSNUB0vIMPnOMTpLnGXqB3fLmCnb89KfIOaiKbsG3NGTjA8AdMGHpIT35lOwV3mSdfkJquIqLbHSLcOrrd5M"
		const stringlOwsUWy = "AzmH6ubOP4Pna6C7SPo810P2clIgzcS1kMrLa5FXj5Tk1"
		const uintNDg1Amg = BigInt("127")
		const WolfStakingRewardsdMkKs1f = await WolfStakingRewards.new(stringCwgmPkA, stringlOwsUWy, uintNDg1Amg, {from: accounts[4]});
		const uintE2y9nk6 = BigInt("483")
		const uintRS3tcQs = BigInt("1930")
		const uintG3ieURw = BigInt("700")
		const uintfXVdOr5 = BigInt("809")
		const addressqZ36iNH = accounts[1]
		const uintICdFgoc = await WolfStakingRewardsdMkKs1f.getReward.call(uintE2y9nk6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayJVpkEhL = await WolfStakingRewardsdMkKs1f.updateNotifyRewardAmount.call(uintRS3tcQs, {from: accounts[1]});
		const uint256wIK0eDS = await WolfStakingRewardsdMkKs1f.lastTimeRewardApplicable.call(uintG3ieURw, {from: accounts[2]});
		const uint8XJSQvSb = await WolfStakingRewardsdMkKs1f.decimals.call({from: accounts[4]});
		const addressOI801x3 = await WolfStakingRewardsdMkKs1f.updateReward.call(addressqZ36iNH, uintfXVdOr5, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwRBTN0B = "ABtOquSGXD3FiZTJwQS3z2cAhItXdNEQR9cR874MoFLzN3oH"
		const stringtpiicDi = "S4uF4GyBkTfHng8YalOhYsksqAAgDSNEPdIyci2l9Oudn2d98NrZWMWjcECuq4Q"
		const uintnG3GYZw = BigInt("14")
		const WolfStakingRewardsOUcE2ok = await WolfStakingRewards.new(stringwRBTN0B, stringtpiicDi, uintnG3GYZw, {from: accounts[1]});
		const uinteS7m21g = BigInt("296")
		const addressjXYQas0 = accounts[0]
		const uinteiYbFmH = BigInt("1012")
		const addresspF3sK5 = accounts[2]
		const uintvh6hSud = BigInt("1982")
		const addressqxaM7Hu = accounts[5]
		const addressD3XHRo1 = await WolfStakingRewardsOUcE2ok.updateReward.call(addressjXYQas0, uinteS7m21g, {from: accounts[2]});
		const uint256pVyNSt = await WolfStakingRewardsOUcE2ok.earned.call(addresspF3sK5, uinteiYbFmH, {from: "0x0000000000000000000000000000000000000001"});
		const stringwWPCaSR = await WolfStakingRewardsOUcE2ok.symbol.call({from: accounts[2]});
		const addressNyvnBpA = await WolfStakingRewardsOUcE2ok.updateReward.call(addressqxaM7Hu, uintvh6hSud, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsKkCT3z = "4BsSHpTRnazdlOUsy7DCwrjHsv6D0Xr63XtFd7RrWT3N5vgSKh0"
		const stringnRuhI9 = "fmvXYh866JxMlofVmTzU9uvYWXhlmr3SjWfO2yeg6tXtNHsnKl"
		const uintm2bAYOl = BigInt("76")
		const WolfStakingRewardsYZGhtl = await WolfStakingRewards.new(stringsKkCT3z, stringnRuhI9, uintm2bAYOl, {from: accounts[5]});
		const uintPS4tU6r = BigInt("1272")
		const uintBxRSvPn = BigInt("867")
		const addressV2DlEv9 = accounts[4]
		await WolfStakingRewardsYZGhtl.onlyOwner.call({from: accounts[4]});
		const uint256array39fjco = await WolfStakingRewardsYZGhtl.updateNotifyRewardAmount.call(uintPS4tU6r, {from: accounts[2]});
		const uint256NDY5RzJ = await WolfStakingRewardsYZGhtl.earned.call(addressV2DlEv9, uintBxRSvPn, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressf3U3Dh1 = accounts[4]
		const addressTvbb0Mk = accounts[0]
		const addressqpEzO4R = accounts[0]
		const WolfStakingRewardsbV1fs05 = await WolfStakingRewards.new(addressf3U3Dh1, addressTvbb0Mk, addressqpEzO4R, {from: accounts[5]});
		const uintOymAhBE = BigInt("226")
		const uintiO0nb7a = BigInt("1099")
		const uintAxBzmVO = BigInt("568")
		const uintwhxlV4c = await WolfStakingRewardsbV1fs05.getReward.call(uintOymAhBE, {from: accounts[4]});
//		const uint256Mv40bGY = await WolfStakingRewardsbV1fs05.withdraw.call(uintAxBzmVO, uintiO0nb7a, {from: accounts[1]});

		await expect(WolfStakingRewardsbV1fs05.withdraw.call(uintAxBzmVO, uintiO0nb7a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringoU4dmXB = "gYDg3AZZK4IsGjjQxR6Xsgjh2NBw5q4HkXkr6S95La0Q0ZIULoHXcGaZUHFGARj9ifgiaV5OEebglmx4q4ILKC9MAb1v"
		const stringeuriIS0 = "tgptio72GnoFNytiry67jnF4SwmOYZRRlRWh1D5dFFLDvKiBeliG1SAeH2yRrAANvyxfOwpaFxtym97S6vnF4bEVdUssHXNUTx"
		const uintX214PTZ = BigInt("92")
		const WolfStakingRewardscmpeINN = await WolfStakingRewards.new(stringoU4dmXB, stringeuriIS0, uintX214PTZ, {from: accounts[2]});
		const uintNDqWdJC = BigInt("414")
		const uintDS97TU8 = BigInt("1266")
		const uintLeCO8e3 = BigInt("232")
		await WolfStakingRewardscmpeINN.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256YIyqnYQ = await WolfStakingRewardscmpeINN.rewardPerToken.call(uintNDqWdJC, {from: accounts[1]});
		const uint256Qnsz0kA = await WolfStakingRewardscmpeINN.totalSupplyPerPool.call(uintDS97TU8, {from: accounts[5]});
		const uint256reDnoy = await WolfStakingRewardscmpeINN.totalSupplyPerPool.call(uintLeCO8e3, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcLGmm6h = "E3hvM9sXwvS7QT2fJrziTdwkjg6DhEgOFusVtL2I7H69S1zMIwVpbbebfc9ESzYtjk7j"
		const stringTzQJbIC = "nudFJSosl1hgRsaDPFNcxSkvFZCsJY2D9sLdNkMUtEjd3wb"
		const uintJWrjBns = BigInt("196")
		const WolfStakingRewardsm3CAb4h = await WolfStakingRewards.new(stringcLGmm6h, stringTzQJbIC, uintJWrjBns, {from: accounts[2]});
		const uintiF5msfw = BigInt("1277")
		const uintQsAWANo = BigInt("1121")
		await WolfStakingRewardsm3CAb4h.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256kQCX1Qz = await WolfStakingRewardsm3CAb4h.withdraw.call(uintQsAWANo, uintiF5msfw, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresstWP21SG = accounts[4]
		const addressTa1XQO9 = accounts[0]
		const addresskp2l9M6 = accounts[0]
		const WolfStakingRewardsbV1fs05 = await WolfStakingRewards.new(addresstWP21SG, addressTa1XQO9, addresskp2l9M6, {from: accounts[5]});
		const uintdVee1Nu = BigInt("226")
		const uintcObp0xZ = BigInt("1099")
		const uintFHMqyHp = BigInt("568")
//		await WolfStakingRewardsbV1fs05.nonReentrant.call({from: accounts[3]});
//		const uintwhxlV4c = await WolfStakingRewardsbV1fs05.getReward.call(uintdVee1Nu, {from: accounts[4]});
//		const uint256Mv40bGY = await WolfStakingRewardsbV1fs05.withdraw.call(uintFHMqyHp, uintcObp0xZ, {from: accounts[1]});
//		await WolfStakingRewardsbV1fs05.onlyRewardsDistribution.call({from: accounts[1]});

		await expect(WolfStakingRewardsbV1fs05.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringWwNzvop = "ZeVLTfqQJS6Ysmq7k22kcrDPU4Eqjs6Eyrt8EqEmuJbAMBwHll3dkzsRknyKcOL1gBOksd"
		const stringxDFkih = "NTRSgCQbAN9MKotdpEObk9T8X1EouWRCwpNqO0wlhtCqG"
		const uintL8QcWc = BigInt("195")
		const WolfStakingRewardsdolZ4Fy = await WolfStakingRewards.new(stringWwNzvop, stringxDFkih, uintL8QcWc, {from: accounts[4]});
		const uintNqeF5N = BigInt("1144")
		const uintJjmhhNR = BigInt("1892")
		await WolfStakingRewardsdolZ4Fy.onlyOwner.call({from: accounts[3]});
		const uint256Z9RYZzg = await WolfStakingRewardsdolZ4Fy.exit.call(uintNqeF5N, {from: accounts[1]});
		const uint256hSqJihn = await WolfStakingRewardsdolZ4Fy.rewardPerToken.call(uintJjmhhNR, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressXQOYnxz = accounts[4]
		const addressYHAiffv = accounts[0]
		const addressflNIXSg = accounts[0]
		const WolfStakingRewardsbV1fs05 = await WolfStakingRewards.new(addressXQOYnxz, addressYHAiffv, addressflNIXSg, {from: accounts[5]});
		const uintEIAotNH = BigInt("556")
		const uintWLHz691 = BigInt("249")
		const uintynDP9jt = BigInt("437")
		const uintri76h0A = BigInt("1099")
		const uintDR2WeE9 = BigInt("568")
		const uintAnVg2yL = BigInt("366")
//		const uint256Tc43uRE = await WolfStakingRewardsbV1fs05.getRewardForDuration.call(uintEIAotNH, {from: accounts[3]});
//		const uintwhxlV4c = await WolfStakingRewardsbV1fs05.getReward.call(uintWLHz691, {from: accounts[4]});
//		const uint256OGCVKLU = await WolfStakingRewardsbV1fs05.rewardPerToken.call(uintynDP9jt, {from: accounts[3]});
//		const uint256Mv40bGY = await WolfStakingRewardsbV1fs05.withdraw.call(uintDR2WeE9, uintri76h0A, {from: accounts[1]});
//		const uint256arrayjSJTGb = await WolfStakingRewardsbV1fs05.updateNotifyRewardAmount.call(uintAnVg2yL, {from: accounts[4]});

		await expect(WolfStakingRewardsbV1fs05.getRewardForDuration.call(uintEIAotNH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressmAboWka = accounts[3]
		const addressLiKV2w2 = accounts[4]
		const addressOksgAsn = accounts[4]
		const WolfStakingRewardsMdDe53m = await WolfStakingRewards.new(addressmAboWka, addressLiKV2w2, addressOksgAsn, {from: accounts[2]});
		const uintvKnq0fG = BigInt("1861")
		const uintSrU1vhF = BigInt("1248")
		const uintzj2KZ9h = BigInt("1142")
		const addressLdYAK8n = accounts[0]
		const uintmIDNOam = BigInt("1757")
		const uintPNMHirC = BigInt("174")
		const addresszgOjyIs = accounts[2]
//		const uint256arTTa84 = await WolfStakingRewardsMdDe53m.stake.call(uintSrU1vhF, uintvKnq0fG, {from: accounts[2]});
//		const uint256PaqNgct = await WolfStakingRewardsMdDe53m.balanceOfPerPool.call(addressLdYAK8n, uintzj2KZ9h, {from: accounts[0]});
//		const uint256arraypFilswj = await WolfStakingRewardsMdDe53m.updateNotifyRewardAmount.call(uintmIDNOam, {from: accounts[2]});
//		const addressyf6GNOi = await WolfStakingRewardsMdDe53m.updateReward.call(addresszgOjyIs, uintPNMHirC, {from: accounts[3]});

		await expect(WolfStakingRewardsMdDe53m.stake.call(uintSrU1vhF, uintvKnq0fG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressHwSXfYD = accounts[4]
		const addressfCqzBSB = accounts[0]
		const addressHAeuULS = accounts[0]
		const WolfStakingRewardsbV1fs05 = await WolfStakingRewards.new(addressHwSXfYD, addressfCqzBSB, addressHAeuULS, {from: accounts[5]});
		const uintWZHCgD4 = BigInt("1104")
		const uinth2d9JY = BigInt("1219")
		const uintjZap5pG = BigInt("1099")
		const uintk0FTDoh = BigInt("568")
//		const uint256arrayrgDMvXc = await WolfStakingRewardsbV1fs05.updateNotifyRewardAmount.call(uintWZHCgD4, {from: accounts[1]});
//		const uint256K6qy8Lg = await WolfStakingRewardsbV1fs05.lastTimeRewardApplicable.call(uinth2d9JY, {from: accounts[4]});
//		const uint256Mv40bGY = await WolfStakingRewardsbV1fs05.withdraw.call(uintk0FTDoh, uintjZap5pG, {from: accounts[1]});

		await expect(WolfStakingRewardsbV1fs05.updateNotifyRewardAmount.call(uintWZHCgD4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringH1tKNBh = "6CgxFeyhcmbHNcVt0FYVK8RACl"
		const stringEtqn7Tr = "G4SRoTetSWstOJq5sYd4X5YH6whETID17gPx1XbJKPhpK6XZEOVq0RlXMwQP9QV4rknuK9b8byxJChqJnjeU4PI0fzMVxd3Wi"
		const uintJEbpEO0 = BigInt("93")
		const WolfStakingRewardsnhh6ORF = await WolfStakingRewards.new(stringH1tKNBh, stringEtqn7Tr, uintJEbpEO0, {from: accounts[2]});
		const uintT4j1ipm = BigInt("497")
		const uintg5aov8G = BigInt("967")
		const uintjkARtT = BigInt("947")
		const uintaeSvnrZ = BigInt("246")
		const addressaSe2hgY = accounts[3]
		const uint256Bp7XxZU = await WolfStakingRewardsnhh6ORF.lastTimeRewardApplicable.call(uintT4j1ipm, {from: accounts[0]});
		const uint256Ue6urmf = await WolfStakingRewardsnhh6ORF.withdraw.call(uintjkARtT, uintg5aov8G, {from: accounts[1]});
		const addresspA878W = await WolfStakingRewardsnhh6ORF.updateReward.call(addressaSe2hgY, uintaeSvnrZ, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresswI0SDyW = accounts[4]
		const addressXfUkW7 = accounts[0]
		const addresstYYQZ3r = accounts[0]
		const WolfStakingRewardsbV1fs05 = await WolfStakingRewards.new(addresswI0SDyW, addressXfUkW7, addresstYYQZ3r, {from: accounts[5]});
		const uintPY4trKw = BigInt("1875")
		const addresstsEVPk5 = accounts[4]
		const uintil3oW4t = BigInt("1349")
		const uintKJYfHNr = BigInt("1627")
		const uintrKqJTz7 = BigInt("596")
		const uint8cVR75 = BigInt("226")
		const uintRV7myGU = BigInt("1281")
		const uintj938Oru = BigInt("568")
		const uint256j33eS2 = await WolfStakingRewardsbV1fs05.balanceOfPerPool.call(addresstsEVPk5, uintPY4trKw, {from: accounts[4]});
		const uint256H64vB4B = await WolfStakingRewardsbV1fs05.lastTimeRewardApplicable.call(uintil3oW4t, {from: accounts[1]});
//		const uint256u80cF9f = await WolfStakingRewardsbV1fs05.withdraw.call(uintrKqJTz7, uintKJYfHNr, {from: accounts[4]});
//		const uintwhxlV4c = await WolfStakingRewardsbV1fs05.getReward.call(uint8cVR75, {from: accounts[4]});
//		const uint256Mv40bGY = await WolfStakingRewardsbV1fs05.withdraw.call(uintj938Oru, uintRV7myGU, {from: accounts[1]});

		assert.equal(uint256H64vB4B, BigInt("0"))
		assert.equal(uint256j33eS2, BigInt("0"))
		await expect(WolfStakingRewardsbV1fs05.withdraw.call(uintrKqJTz7, uintKJYfHNr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressOr9WQ9w = accounts[4]
		const addressxvUon6 = accounts[0]
		const addressBmvDD2m = accounts[0]
		const WolfStakingRewardsbV1fs05 = await WolfStakingRewards.new(addressOr9WQ9w, addressxvUon6, addressBmvDD2m, {from: accounts[5]});
		const uintmuKVxKL = BigInt("1290")
		const uintcoUXMVK = BigInt("1242")
		const uintLTS8nOa = BigInt("873")
		const uintzaA0OL = BigInt("1099")
		const uintCSOhKn3 = BigInt("568")
//		const uint256KcQQwnl = await WolfStakingRewardsbV1fs05.withdrawRemainingBalance.call(uintcoUXMVK, uintmuKVxKL, {from: accounts[3]});
//		const uint256mDv7XF4 = await WolfStakingRewardsbV1fs05.lastTimeRewardApplicable.call(uintLTS8nOa, {from: accounts[4]});
//		const uint256Mv40bGY = await WolfStakingRewardsbV1fs05.withdraw.call(uintCSOhKn3, uintzaA0OL, {from: accounts[1]});

		await expect(WolfStakingRewardsbV1fs05.withdrawRemainingBalance.call(uintcoUXMVK, uintmuKVxKL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressaQTiIQ0 = accounts[4]
		const addressRhNIHf = accounts[0]
		const addressAloIJvI = accounts[0]
		const WolfStakingRewardsbV1fs05 = await WolfStakingRewards.new(addressaQTiIQ0, addressRhNIHf, addressAloIJvI, {from: accounts[5]});
		const uintWWOkNOP = BigInt("1173")
		const uintD1TzSzu = BigInt("1109")
		const uintz2zovNv = BigInt("565")
		const uintrhUDD6 = BigInt("531")
		const addressddizQ6s = accounts[2]
		const uintoddiOkP = BigInt("1449")
		const addressXxwQztj = accounts[0]
		const uintyrOWzzM = BigInt("935")
		const uint256V1f6PtF = await WolfStakingRewardsbV1fs05.totalSupplyPerPool.call(uintWWOkNOP, {from: accounts[3]});
//		const uint256Mv40bGY = await WolfStakingRewardsbV1fs05.withdraw.call(uintz2zovNv, uintD1TzSzu, {from: accounts[1]});
//		const uint2561VMoQk = await WolfStakingRewardsbV1fs05.earned.call(addressddizQ6s, uintrhUDD6, {from: accounts[2]});
//		const addressi7QkYT = await WolfStakingRewardsbV1fs05.updateReward.call(addressXxwQztj, uintoddiOkP, {from: accounts[3]});
//		const uint256arrayxbphPD0 = await WolfStakingRewardsbV1fs05.updateNotifyRewardAmount.call(uintyrOWzzM, {from: accounts[0]});

		assert.equal(uint256V1f6PtF, BigInt("0"))
		await expect(WolfStakingRewardsbV1fs05.withdraw.call(uintz2zovNv, uintD1TzSzu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringHRwEDC5 = "68GY6WgHvso3O2kYVz9A8mYJ3z0WYSl6I8QfPKoFDBPonhoked4Bxa9v"
		const stringvub8xPc = "YfQVwEF1ETom9"
		const uintZwCqJp9 = BigInt("156")
		const WolfStakingRewardsO3u6SsX = await WolfStakingRewards.new(stringHRwEDC5, stringvub8xPc, uintZwCqJp9, {from: accounts[3]});
		const uintAOEcTCP = BigInt("186")
		const uintK1iUyek = BigInt("1395")
		const uintgc1GYXb = BigInt("1145")
		const uintlax7B3G = BigInt("1218")
		const uint256HFV42i = await WolfStakingRewardsO3u6SsX.totalSupplyPerPool.call(uintAOEcTCP, {from: accounts[4]});
		const uintHwABwGq = await WolfStakingRewardsO3u6SsX.getReward.call(uintK1iUyek, {from: accounts[2]});
		const uint256zM5ye5f = await WolfStakingRewardsO3u6SsX.withdrawRemainingBalance.call(uintlax7B3G, uintgc1GYXb, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringY4hh8eh = "B1OmilzUJSHiKK3"
		const stringWQB95Fc = "y2b3gnykoVupqce3i3KHnn4dyMwE68o24aVdGd4Y3L"
		const uintZteUTeZ = BigInt("92")
		const WolfStakingRewardsBmFeYU4 = await WolfStakingRewards.new(stringY4hh8eh, stringWQB95Fc, uintZteUTeZ, {from: accounts[4]});
		const uintYDYCdOz = BigInt("520")
		const uintG8b5pgK = BigInt("741")
		const uintoIjq0yb = BigInt("636")
		const uint256n0SlAJ = await WolfStakingRewardsBmFeYU4.withdrawRemainingBalance.call(uintG8b5pgK, uintYDYCdOz, {from: accounts[3]});
		const uint256cey2f9c = await WolfStakingRewardsBmFeYU4.rewardPerToken.call(uintoIjq0yb, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJYKlaJS = "sOWpQWQTAEKSgGEx8cz9siXIoZPH2EsZ1FsdO3YaFAslncxMAfbb8O4bJlHpQC18cj"
		const stringC4kvVE = "8UzIoqtGgun6dFN1Hw29DBGcRCTINrKTjVea27JVXVE1GXoYBUoQOuWOoTvCp2x49RUfvZ2BKwambMcmroPKCJjj"
		const uintXqzbgEi = BigInt("33")
		const WolfStakingRewardseYjB3lt = await WolfStakingRewards.new(stringJYKlaJS, stringC4kvVE, uintXqzbgEi, {from: accounts[2]});
		const uintBIPrSpO = BigInt("1914")
		const addressJoykkWw = accounts[3]
		const uint8HJiAEXE = await WolfStakingRewardseYjB3lt.decimals.call({from: accounts[3]});
		await WolfStakingRewardseYjB3lt.nonReentrant.call({from: accounts[5]});
		const stringfbVd03T = await WolfStakingRewardseYjB3lt.name.call({from: accounts[1]});
		await WolfStakingRewardseYjB3lt.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8KHp8PYB = await WolfStakingRewardseYjB3lt.decimals.call({from: accounts[4]});
		const addressn3wiy6V = await WolfStakingRewardseYjB3lt.updateReward.call(addressJoykkWw, uintBIPrSpO, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgjhnroo = "HMOXbtHlgHS8noULgBvKp4P4oiSdnUEGnxlREc8aoO7cRuUuvNPUSF6trWPMcSEeJQdLt9IFph56jZ0exIvwGQ8VFVpa4m"
		const stringbs9UIs6 = "Zur5zItoqBuLso1XbgGKgS8hbenRHrBPXKXzd4p7OHHPDyNR"
		const uintVZla61I = BigInt("243")
		const WolfStakingRewardsQiFcMl8 = await WolfStakingRewards.new(stringgjhnroo, stringbs9UIs6, uintVZla61I, {from: accounts[4]});
		const uintPeYdzOl = BigInt("652")
		const addressDEcEyzT = accounts[1]
		const uintODiISsO = BigInt("1729")
		const uint256ouc7qb0 = await WolfStakingRewardsQiFcMl8.earned.call(addressDEcEyzT, uintPeYdzOl, {from: accounts[0]});
		await WolfStakingRewardsQiFcMl8.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256K6y2HvD = await WolfStakingRewardsQiFcMl8.totalSupplyPerPool.call(uintODiISsO, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresseadwesE = accounts[3]
		const addressa21PbMc = accounts[4]
		const addresssV9cOas = accounts[4]
		const WolfStakingRewardsMdDe53m = await WolfStakingRewards.new(addresseadwesE, addressa21PbMc, addresssV9cOas, {from: accounts[2]});
		const uintk2huw6V = BigInt("920")
		const uintGtp4m7C = BigInt("841")
		const uintvqJ8xRs = BigInt("1861")
		const uintKaS7z1m = BigInt("1248")
		const uintw9iJYC7 = BigInt("884")
		const addressyFM9JoG = accounts[3]
		const uintNlo1O51 = BigInt("839")
		const uintXDVB5w4 = BigInt("174")
		const addressPkXRDS3 = accounts[2]
//		const uint256qwj5MpV = await WolfStakingRewardsMdDe53m.withdrawRemainingBalance.call(uintGtp4m7C, uintk2huw6V, {from: accounts[2]});
//		const uint256arTTa84 = await WolfStakingRewardsMdDe53m.stake.call(uintKaS7z1m, uintvqJ8xRs, {from: accounts[2]});
//		const uint256PaqNgct = await WolfStakingRewardsMdDe53m.balanceOfPerPool.call(addressyFM9JoG, uintw9iJYC7, {from: accounts[0]});
//		const uint256NUMGNGq = await WolfStakingRewardsMdDe53m.totalSupplyPerPool.call(uintNlo1O51, {from: accounts[3]});
//		const addressyf6GNOi = await WolfStakingRewardsMdDe53m.updateReward.call(addressPkXRDS3, uintXDVB5w4, {from: accounts[3]});

		await expect(WolfStakingRewardsMdDe53m.withdrawRemainingBalance.call(uintGtp4m7C, uintk2huw6V, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringw7FlMRb = "EYUmq1rExXX5LUraMi8hVS"
		const stringjXMRoSV = "W1Qu6C5pD3yF"
		const uintVwBloSP = BigInt("191")
		const WolfStakingRewardsPb8wR8Y = await WolfStakingRewards.new(stringw7FlMRb, stringjXMRoSV, uintVwBloSP, {from: "0x0000000000000000000000000000000000000001"});
		const uintAace7Ij = BigInt("838")
		const uintqMl5VG = BigInt("921")
		const uintyrN3YrB = BigInt("972")
		const uintPT35TWY = BigInt("1454")
		const uintnVExb9u = BigInt("1269")
		const addressRR2Q3ww = accounts[0]
		const uint256n6HRUza = await WolfStakingRewardsPb8wR8Y.rewardPerToken.call(uintAace7Ij, {from: accounts[3]});
		await WolfStakingRewardsPb8wR8Y.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ukPwhSt = await WolfStakingRewardsPb8wR8Y.withdrawRemainingBalance.call(uintyrN3YrB, uintqMl5VG, {from: accounts[1]});
		const uint256MB9oxFO = await WolfStakingRewardsPb8wR8Y.lastTimeRewardApplicable.call(uintPT35TWY, {from: accounts[3]});
		const addressTZOdrSS = await WolfStakingRewardsPb8wR8Y.updateReward.call(addressRR2Q3ww, uintnVExb9u, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringX2QX7lV = "ouNv9A4zvQKLyoEKcLNzJaivvo9Ap8"
		const stringNbtcvBt = "AqqtmlmWWxSzzrDVtwsFc9"
		const uintT29tqF = BigInt("230")
		const WolfStakingRewardsYBWX2bz = await WolfStakingRewards.new(stringX2QX7lV, stringNbtcvBt, uintT29tqF, {from: accounts[0]});
		const uintx25ViY5 = BigInt("1380")
		const uintVPgL4xt = BigInt("1850")
		const uintzrpIYZt = BigInt("552")
		const uinteq2XT5 = BigInt("1815")
		const stringhKAVv0S = await WolfStakingRewardsYBWX2bz.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256mJtS8bo = await WolfStakingRewardsYBWX2bz.getRewardForDuration.call(uintx25ViY5, {from: accounts[0]});
		const uint256pYNm7wB = await WolfStakingRewardsYBWX2bz.rewardPerToken.call(uintVPgL4xt, {from: accounts[5]});
		const uint256n2Pi57l = await WolfStakingRewardsYBWX2bz.stake.call(uinteq2XT5, uintzrpIYZt, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringc8GWvq = "iPgXL4lW6cH4F5LnyPZ"
		const stringZzyQTO2 = "XHYD2EXyC6DYYy6n6BlKGiVTt9cntJeUkNNCVbkPS5hFSYlv"
		const uintstcSFrP = BigInt("183")
		const WolfStakingRewardsclZp1bo = await WolfStakingRewards.new(stringc8GWvq, stringZzyQTO2, uintstcSFrP, {from: accounts[1]});
		const uintZOOEr6 = BigInt("259")
		const uinti7l9iOo = BigInt("1545")
		const addresstGCXict = "0x0000000000000000000000000000000000000001"
		const stringXr3ynQ = await WolfStakingRewardsclZp1bo.symbol.call({from: accounts[0]});
		const uint256jfzL5SC = await WolfStakingRewardsclZp1bo.getRewardForDuration.call(uintZOOEr6, {from: accounts[0]});
		const addressUf9M9U5 = await WolfStakingRewardsclZp1bo.updateReward.call(addresstGCXict, uinti7l9iOo, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressxf55d7J = accounts[4]
		const addressOYjlnoU = accounts[0]
		const addressLoaJ9ic = accounts[0]
		const WolfStakingRewardsbV1fs05 = await WolfStakingRewards.new(addressxf55d7J, addressOYjlnoU, addressLoaJ9ic, {from: accounts[5]});
		const uintA0qMZXG = BigInt("539")
		const uintpUhMkFz = BigInt("448")
		const uintAac0OWu = BigInt("1496")
		const uintW350RlI = BigInt("1712")
		const addressB4XUsK8 = accounts[0]
//		const uint256fced0wq = await WolfStakingRewardsbV1fs05.exit.call(uintA0qMZXG, {from: accounts[2]});
//		const uint256acIlPbk = await WolfStakingRewardsbV1fs05.stake.call(uintAac0OWu, uintpUhMkFz, {from: accounts[4]});
//		const uint256Dg4vQqw = await WolfStakingRewardsbV1fs05.earned.call(addressB4XUsK8, uintW350RlI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardsbV1fs05.exit.call(uintA0qMZXG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringIHVvA7V = "pC1CatA4PRYJHC"
		const string7bn9jr = "i8jb1TrEE4WIKu33Yot1Rz8hJWuZXLOUnaFu66JSy21ulfHqs7eESOq9Teujg5"
		const uintQBiecI = BigInt("181")
		const WolfStakingRewardslN2ji9n = await WolfStakingRewards.new(stringIHVvA7V, string7bn9jr, uintQBiecI, {from: accounts[4]});
		const uintJd6GrMy = BigInt("576")
		const addressysjguR1 = accounts[5]
		const stringCprf9ZQ = await WolfStakingRewardslN2ji9n.name.call({from: accounts[4]});
		await WolfStakingRewardslN2ji9n.onlyOwner.call({from: accounts[2]});
		const uint8HTaQy8j = await WolfStakingRewardslN2ji9n.decimals.call({from: accounts[3]});
		const uint256B4z15SD = await WolfStakingRewardslN2ji9n.earned.call(addressysjguR1, uintJd6GrMy, {from: accounts[3]});
		const stringYKPddP6 = await WolfStakingRewardslN2ji9n.symbol.call({from: accounts[4]});
		await WolfStakingRewardslN2ji9n.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressj2cUzBo = accounts[5]
		const addressmbdwmwp = accounts[0]
		const addresscQDV79I = accounts[5]
		const WolfStakingRewardsyEJHpHm = await WolfStakingRewards.new(addressj2cUzBo, addressmbdwmwp, addresscQDV79I, {from: "0x0000000000000000000000000000000000000001"});
		const uintSrJUlvu = BigInt("1963")
		const uintEWzCiwq = BigInt("811")
		const uintgrSU4y = BigInt("1697")
		const uintFSYeG7E = BigInt("187")
		const uintaFt4JY5 = BigInt("336")
		const addresscbLP6We = accounts[4]
		const uintp4NBL08 = BigInt("161")
		const addressn1fTec = accounts[4]
		const uintbC7NFho = await WolfStakingRewardsyEJHpHm.getReward.call(uintSrJUlvu, {from: accounts[5]});
		const uint256oCVdwc3 = await WolfStakingRewardsyEJHpHm.withdraw.call(uintgrSU4y, uintEWzCiwq, {from: accounts[0]});
		const uint256iegOsF8 = await WolfStakingRewardsyEJHpHm.exit.call(uintFSYeG7E, {from: accounts[5]});
		const uint256xm2gtSY = await WolfStakingRewardsyEJHpHm.earned.call(addresscbLP6We, uintaFt4JY5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Ms5TSp1 = await WolfStakingRewardsyEJHpHm.earned.call(addressn1fTec, uintp4NBL08, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsPPr67R = "KuopBvgDJX6P6CoaDOUeGwitIf95HOMV"
		const stringcbP4fyH = "sVKlHuzQEft6nrCyAvv3qpqwJtU2H2G1o"
		const uintXr8gf7A = BigInt("238")
		const WolfStakingRewardsgHgBgqO = await WolfStakingRewards.new(stringsPPr67R, stringcbP4fyH, uintXr8gf7A, {from: accounts[2]});
		const uintyYXenqA = BigInt("1050")
		const addressutA71q = accounts[4]
		const uintDFj8R39 = BigInt("971")
		const uintSkhqsV = BigInt("1963")
		const addressOusCkwn = accounts[0]
		const uintsKFFJeQ = BigInt("56")
		const uintQwmkQQJ = BigInt("1195")
		const stringzywlkCi = await WolfStakingRewardsgHgBgqO.symbol.call({from: accounts[1]});
		const addressF3Fx08x = await WolfStakingRewardsgHgBgqO.updateReward.call(addressutA71q, uintyYXenqA, {from: accounts[0]});
		const uint256QTKqK65 = await WolfStakingRewardsgHgBgqO.getRewardForDuration.call(uintDFj8R39, {from: accounts[5]});
		const uint256EO3Fbrk = await WolfStakingRewardsgHgBgqO.earned.call(addressOusCkwn, uintSkhqsV, {from: accounts[2]});
		const uint256rF0Tb0z = await WolfStakingRewardsgHgBgqO.withdrawRemainingBalance.call(uintQwmkQQJ, uintsKFFJeQ, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJ3YNBhN = "ypgw6P6guV7QH62"
		const stringh4myMcr = "BYUG55vul1kjA4PuB7LqSJjcgRgE7pfQp9AhTQ3mPqxwgPRl8nqhvsGYJLmNqxJGM5J3zE722Urmws4AJ8"
		const uintSpkPNW2 = BigInt("87")
		const WolfStakingRewardsS5jqb16 = await WolfStakingRewards.new(stringJ3YNBhN, stringh4myMcr, uintSpkPNW2, {from: accounts[1]});
		const uintyRWc1VI = BigInt("1466")
		const uintheOD0bi = BigInt("708")
		const uint8wI7Z5FC = await WolfStakingRewardsS5jqb16.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256QwVZkE = await WolfStakingRewardsS5jqb16.lastTimeRewardApplicable.call(uintyRWc1VI, {from: accounts[1]});
		const uint256nNgJ5UI = await WolfStakingRewardsS5jqb16.getRewardForDuration.call(uintheOD0bi, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEDSdiKh = "WpRHdgXyZJfl4eohsQQsdhb2KtzQicr3U1YwSVPyx3LkQsbollu5mH6r7Gxpb"
		const stringEPU53Yu = "LtlCss1TX56L5J9TmlXl5sagNnuvM9t6f4CU61iZlix8VV3batqyag3Usv4SvGsxEeBzqn1oC9GWxaFyU5TwwRcYeBcH3ASo"
		const uintW6lqKEe = BigInt("48")
		const WolfStakingRewardsymtejZn = await WolfStakingRewards.new(stringEDSdiKh, stringEPU53Yu, uintW6lqKEe, {from: accounts[5]});
		const uintjW0oho = BigInt("1416")
		const uintXvhNTiq = BigInt("1444")
		const uintwYyzdDY = await WolfStakingRewardsymtejZn.getReward.call(uintjW0oho, {from: accounts[3]});
		const uint256QRvNyEu = await WolfStakingRewardsymtejZn.rewardPerToken.call(uintXvhNTiq, {from: accounts[2]});
		const stringn53EsjN = await WolfStakingRewardsymtejZn.symbol.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringn5A0Mfu = "X2YeaWp6zdEyQJpC6h8O8RWP2qC3VOBf1FsApIIXk6cbqAoT3RHiVstgDQ16c9tdHlgCEVC2iJcmGjjDOjTl9J4r2z5sIYil4"
		const stringvGF4lQk = "H26OOtzVy1TnVSb6aVOKq9EWSvgergN3bLx82dobGRsVxZQe9I4hM29Xh3"
		const uintaZSUxZ1 = BigInt("85")
		const WolfStakingRewardsU0sXnea = await WolfStakingRewards.new(stringn5A0Mfu, stringvGF4lQk, uintaZSUxZ1, {from: accounts[3]});
		const uintvAYsc8h = BigInt("184")
		const uintSMWrOC3 = BigInt("1205")
		const addressuTJFJ1v = accounts[3]
		const uint256T2ZQ1VQ = await WolfStakingRewardsU0sXnea.getRewardForDuration.call(uintvAYsc8h, {from: accounts[1]});
		const uint256Kl9Q0z3 = await WolfStakingRewardsU0sXnea.balanceOfPerPool.call(addressuTJFJ1v, uintSMWrOC3, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringE2c4Xpv = "ibJ9X"
		const stringqpNArlv = "ZmJ3rsDzuewbyTvqIwk"
		const uintHTlw68 = BigInt("243")
		const WolfStakingRewardsgl6vjMR = await WolfStakingRewards.new(stringE2c4Xpv, stringqpNArlv, uintHTlw68, {from: accounts[1]});
		const uintxqoc5Vd = BigInt("1781")
		const addressuY1byF0 = accounts[1]
		const uintO5LdhCK = BigInt("162")
		const uintxSQTq0f = BigInt("918")
		const address53G9Ux = "0x0000000000000000000000000000000000000001"
		const uintoao1Wnv = BigInt("261")
		const uint8sqGOKk = await WolfStakingRewardsgl6vjMR.decimals.call({from: accounts[1]});
		const uint256bZjlor6 = await WolfStakingRewardsgl6vjMR.balanceOfPerPool.call(addressuY1byF0, uintxqoc5Vd, {from: "0x0000000000000000000000000000000000000001"});
		const uintkP50F5F = await WolfStakingRewardsgl6vjMR.getReward.call(uintO5LdhCK, {from: accounts[4]});
		await WolfStakingRewardsgl6vjMR.nonReentrant.call({from: accounts[2]});
		const uint256EpAMGWw = await WolfStakingRewardsgl6vjMR.balanceOfPerPool.call(address53G9Ux, uintxSQTq0f, {from: accounts[3]});
		const uint256vxmnhhR = await WolfStakingRewardsgl6vjMR.lastTimeRewardApplicable.call(uintoao1Wnv, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const string7IiGB0 = "keaxRJP1Isd49AsPb1XUddNYHZ"
		const stringZ9n6AK4 = "6Duq6VsKmPpmT0ACH9AnuQsUVZa42I9Zs6AGQNngv6TULlTnjuVXtBXO1O"
		const uintzW2ZmfW = BigInt("74")
		const WolfStakingRewardsdqrxxmg = await WolfStakingRewards.new(string7IiGB0, stringZ9n6AK4, uintzW2ZmfW, {from: accounts[4]});
		const uint2PLFid = BigInt("231")
		const uintth1QdB7 = BigInt("1034")
		const uintD5MYYSj = BigInt("1805")
		const uintQQLakLk = BigInt("573")
		const uintBj1x48h = BigInt("779")
		const uint256ec0EddC = await WolfStakingRewardsdqrxxmg.stake.call(uintth1QdB7, uint2PLFid, {from: accounts[0]});
		const uint8zHAeDn = await WolfStakingRewardsdqrxxmg.decimals.call({from: accounts[0]});
		const uint256wQfjACY = await WolfStakingRewardsdqrxxmg.withdrawRemainingBalance.call(uintQQLakLk, uintD5MYYSj, {from: accounts[3]});
		const uint256WO488pb = await WolfStakingRewardsdqrxxmg.rewardPerToken.call(uintBj1x48h, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGRPIBdA = "Qru46K811uGnGU1c4LRngi1kXpd4XmQHzvgLczqLNI7RgYsYXXdtH17DkWTKUHlFK4VxMtMwVMRKDiLDZ9y3pc1iRLPHDhuU"
		const stringoOlH3M5 = "OgXjOwkTegu6dHFKD5cWJGDRQe6SnAJfL1nWzyth4pySqQnwtRIK9sqmVGEzLzpbPB7r3xUiQKlb1z7IS"
		const uintT9rz5I9 = BigInt("152")
		const WolfStakingRewardsAF71rhN = await WolfStakingRewards.new(stringGRPIBdA, stringoOlH3M5, uintT9rz5I9, {from: accounts[4]});
		const uintHB6bXmC = BigInt("513")
		const uintSKYBqUU = BigInt("1535")
		const addresscUTGKEG = accounts[3]
		const uintqiLxUEb = BigInt("152")
		const uintFVJrgpN = BigInt("1937")
		const uint8VV0Vbhp = await WolfStakingRewardsAF71rhN.decimals.call({from: accounts[4]});
		const uint256pkSlTM = await WolfStakingRewardsAF71rhN.exit.call(uintHB6bXmC, {from: accounts[4]});
		const uint256KIGHE4W = await WolfStakingRewardsAF71rhN.earned.call(addresscUTGKEG, uintSKYBqUU, {from: accounts[2]});
		const uint256y7aoI4U = await WolfStakingRewardsAF71rhN.getRewardForDuration.call(uintqiLxUEb, {from: accounts[0]});
		const uint256KL8Tffb = await WolfStakingRewardsAF71rhN.rewardPerToken.call(uintFVJrgpN, {from: accounts[4]});
		await WolfStakingRewardsAF71rhN.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const string1WhNtR = "5xr25GtOVzkHvfCoR9N3lG08siObB1kSt646mmWlC9hB9xld5t9MyafgdOHhm4bhqKzHE7ANBf"
		const stringCGy2YB = "KERpLRstsFENRhaalU341Q9LeTTWzHbKjX8tyn578OqjE4aAPxnim6Q6hv7VZH2z6"
		const uintLnOfdcE = BigInt("54")
		const WolfStakingRewardsvOOmoeb = await WolfStakingRewards.new(string1WhNtR, stringCGy2YB, uintLnOfdcE, {from: accounts[4]});
		const uintbn2Xs0 = BigInt("438")
		const uintK2qoznN = BigInt("257")
		const uintSOYq7mF = BigInt("378")
		const addresspzjcEbi = accounts[0]
		const uintwzFWeQc = BigInt("776")
		const uint256wGDm7qI = await WolfStakingRewardsvOOmoeb.withdrawRemainingBalance.call(uintK2qoznN, uintbn2Xs0, {from: accounts[5]});
		const uint256qyivNt4 = await WolfStakingRewardsvOOmoeb.balanceOfPerPool.call(addresspzjcEbi, uintSOYq7mF, {from: accounts[3]});
		const uint256DvnO6ur = await WolfStakingRewardsvOOmoeb.lastTimeRewardApplicable.call(uintwzFWeQc, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const string8E2SPc = "I3tV6D4gENMvXzmlvmyicBtblsFn4p6uVDkrnFRFYNFoTEJYKGX8uzA"
		const stringntTrgnG = "Fd8U16EttLiErqrOAaQPymH14a5gpOvqyv39msy9B2SwqqAe"
		const uintPlScpO4 = BigInt("43")
		const WolfStakingRewardsV7SSUHK = await WolfStakingRewards.new(string8E2SPc, stringntTrgnG, uintPlScpO4, {from: accounts[2]});
		const uintCUqjA5I = BigInt("1925")
		const uintDI4YtT4 = BigInt("1894")
		const uints67INi = BigInt("341")
		const uintHGIYzmz = BigInt("1331")
		const uintenpDX9H = BigInt("1389")
		const uintvmkAic0 = BigInt("2027")
		const addressJNo83bn = accounts[2]
		const stringugLqeW = await WolfStakingRewardsV7SSUHK.name.call({from: accounts[4]});
		const uint256JKwYwBR = await WolfStakingRewardsV7SSUHK.stake.call(uintDI4YtT4, uintCUqjA5I, {from: accounts[3]});
		const uint2566RabBV = await WolfStakingRewardsV7SSUHK.exit.call(uints67INi, {from: accounts[2]});
		const uint256a8RlZ7 = await WolfStakingRewardsV7SSUHK.rewardPerToken.call(uintHGIYzmz, {from: accounts[2]});
		const uint256arrayJFbGA0Y = await WolfStakingRewardsV7SSUHK.updateNotifyRewardAmount.call(uintenpDX9H, {from: accounts[0]});
		const addressXI5hRNq = await WolfStakingRewardsV7SSUHK.updateReward.call(addressJNo83bn, uintvmkAic0, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrZLYAvd = "H8ep6hvkr"
		const stringtgPm4v = "j13W2nPQair7YPh3hRKJf1Is8UCa0Ht3EYXcGQQpx8roi"
		const uintsbnSt6J = BigInt("16")
		const WolfStakingRewards4mCXTL = await WolfStakingRewards.new(stringrZLYAvd, stringtgPm4v, uintsbnSt6J, {from: accounts[5]});
		const uintvbmgaNa = BigInt("1962")
		const uintDTdepbO = BigInt("508")
		const uintYrZXega = BigInt("701")
		const uint256GbSGxOh = await WolfStakingRewards4mCXTL.stake.call(uintDTdepbO, uintvbmgaNa, {from: accounts[0]});
		await WolfStakingRewards4mCXTL.onlyRewardsDistribution.call({from: accounts[0]});
		const uintGX2M43C = await WolfStakingRewards4mCXTL.getReward.call(uintYrZXega, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeyHZuDI = "1KKAwJmsuxMzNjjysNL4ZrpBtQfGfTzm"
		const stringjMidAq = "8QGChDDZeKw5v8MekBRjp4KDTRh5AU2bqZthWPyYmYh5Pq"
		const uint6OkfJT = BigInt("187")
		const WolfStakingRewardssk3VQku = await WolfStakingRewards.new(stringeyHZuDI, stringjMidAq, uint6OkfJT, {from: accounts[5]});
		const uintrVP16y9 = BigInt("704")
		const uintKZAum1N = BigInt("1810")
		const uintwbrUmR = BigInt("486")
		const uintqqJDoQt = BigInt("1550")
		const address78RToq = accounts[0]
		const uintpGzjws = BigInt("486")
		const uintZhXcgkt = BigInt("1004")
		const uint256KfLBgR = await WolfStakingRewardssk3VQku.withdrawRemainingBalance.call(uintKZAum1N, uintrVP16y9, {from: accounts[3]});
		const uint256KFPbShD = await WolfStakingRewardssk3VQku.lastTimeRewardApplicable.call(uintwbrUmR, {from: accounts[1]});
		const uint256eBAHQ7K = await WolfStakingRewardssk3VQku.balanceOfPerPool.call(address78RToq, uintqqJDoQt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256A44vTco = await WolfStakingRewardssk3VQku.withdraw.call(uintZhXcgkt, uintpGzjws, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYVYjyJ9 = "CRATcaccToVvADXrxblwUcYHZWoXAtFTuNvrZ2SYhTDTsmdBuoB"
		const stringHOgeXGb = "TnEEWJOeKzcZ9muphBOxEfclZjBTn1jAaWGLr"
		const uintEiAK4v6 = BigInt("186")
		const WolfStakingRewardsg7lmkyS = await WolfStakingRewards.new(stringYVYjyJ9, stringHOgeXGb, uintEiAK4v6, {from: accounts[1]});
		const uinthbEnikY = BigInt("466")
		const uintmQs0eHt = BigInt("1521")
		const uintArIEELJ = BigInt("442")
		const uintEmoIyQR = BigInt("1474")
		const uint256QyvSEzy = await WolfStakingRewardsg7lmkyS.lastTimeRewardApplicable.call(uinthbEnikY, {from: accounts[3]});
		const uint256oSXWoto = await WolfStakingRewardsg7lmkyS.withdrawRemainingBalance.call(uintArIEELJ, uintmQs0eHt, {from: accounts[1]});
		const uint256Zs5FqlY = await WolfStakingRewardsg7lmkyS.exit.call(uintEmoIyQR, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKgVPnGb = "pJQ9Pa5eoYhUu8dV7DGzkoaXTlmpc"
		const stringq006NN8 = "CAtt"
		const uintHpCtR84 = BigInt("155")
		const WolfStakingRewardsxU3g7F = await WolfStakingRewards.new(stringKgVPnGb, stringq006NN8, uintHpCtR84, {from: "0x0000000000000000000000000000000000000001"});
		const uintQbktmLk = BigInt("1262")
		const stringvipyxTd = await WolfStakingRewardsxU3g7F.symbol.call({from: accounts[2]});
		await WolfStakingRewardsxU3g7F.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256eZJo9p = await WolfStakingRewardsxU3g7F.rewardPerToken.call(uintQbktmLk, {from: accounts[0]});
		const uint8R9gDHWg = await WolfStakingRewardsxU3g7F.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoPVWFYG = "4FAvNixwJZFk0LTtPzbPOpEKxQYHSCMWNyfuIat52z39QIjBhPPhCFZ7hcJ1zeaBuiIwaXL4NyYefjNRyI1sXHgLHDp249by"
		const stringj0lwgng = "lDzw4RgA4TOKcBStcuMCXuRW"
		const uintcwGs0m = BigInt("98")
		const WolfStakingRewardsnzURYI0 = await WolfStakingRewards.new(stringoPVWFYG, stringj0lwgng, uintcwGs0m, {from: accounts[3]});
		const uintaSDIzdt = BigInt("698")
		const addresshPl9Lz9 = accounts[3]
		await WolfStakingRewardsnzURYI0.onlyRewardsDistribution.call({from: accounts[0]});
		const string9RbIvV = await WolfStakingRewardsnzURYI0.name.call({from: accounts[0]});
		const addressU9cWvxf = await WolfStakingRewardsnzURYI0.updateReward.call(addresshPl9Lz9, uintaSDIzdt, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringk2FmkVC = "G6Nn3ifvosb4zlXOSJOyGjWPEwKb"
		const stringbcT94WA = "1qKia78kcwSUCt2jAUIBwuWXktOhThSHeGTa"
		const uintqblC5yw = BigInt("158")
		const WolfStakingRewardsnZA5kHO = await WolfStakingRewards.new(stringk2FmkVC, stringbcT94WA, uintqblC5yw, {from: "0x0000000000000000000000000000000000000001"});
		const uintNoZ3PB = BigInt("107")
		const uintmNbPKcR = BigInt("1912")
		const uintkJ0KKtP = BigInt("1324")
		const uintFVPisJJ = BigInt("161")
		const uintnymAJam = BigInt("850")
		const uint256Gxiv0ND = await WolfStakingRewardsnZA5kHO.totalSupplyPerPool.call(uintNoZ3PB, {from: accounts[0]});
		const uint256XbGlYCw = await WolfStakingRewardsnZA5kHO.withdraw.call(uintkJ0KKtP, uintmNbPKcR, {from: accounts[5]});
		const uint256TXK5lf = await WolfStakingRewardsnZA5kHO.rewardPerToken.call(uintFVPisJJ, {from: accounts[5]});
		const uint256bjUb01j = await WolfStakingRewardsnZA5kHO.lastTimeRewardApplicable.call(uintnymAJam, {from: accounts[2]});
		await WolfStakingRewardsnZA5kHO.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcMwHcX = "VJTjjgXfZFMwjT"
		const stringTLURKuQ = "Hb9reGojCtGWrMBGLF3GTiOEo0UCaL8gOWlsPfkkNcvv"
		const uintelat3x4 = BigInt("155")
		const WolfStakingRewardsLsMx36y = await WolfStakingRewards.new(stringcMwHcX, stringTLURKuQ, uintelat3x4, {from: accounts[0]});
		const uintSL4Mwg0 = BigInt("489")
		const addressRmhYhpd = accounts[0]
		const uintabv4faf = BigInt("1357")
		const uintUKczZZ1 = BigInt("1823")
		const uintN6pFHaE = BigInt("1862")
		const uintXTN8jql = BigInt("1120")
		await WolfStakingRewardsLsMx36y.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256mXKntR0 = await WolfStakingRewardsLsMx36y.balanceOfPerPool.call(addressRmhYhpd, uintSL4Mwg0, {from: accounts[3]});
		const uint256Rt1vo6T = await WolfStakingRewardsLsMx36y.totalSupplyPerPool.call(uintabv4faf, {from: accounts[5]});
		const uint2564PeybF = await WolfStakingRewardsLsMx36y.withdrawRemainingBalance.call(uintN6pFHaE, uintUKczZZ1, {from: accounts[5]});
		const uint256arraytANyZ2O = await WolfStakingRewardsLsMx36y.updateNotifyRewardAmount.call(uintXTN8jql, {from: accounts[3]});
		await WolfStakingRewardsLsMx36y.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringw4qyEvN = "wyUZ"
		const stringBflo1ub = "QuW11IwNDBONtpQUaR05rWMdINDIyixwgl4vgUZ5K"
		const uintBb6OGYn = BigInt("53")
		const WolfStakingRewardsTQcv9l = await WolfStakingRewards.new(stringw4qyEvN, stringBflo1ub, uintBb6OGYn, {from: accounts[2]});
		const uintjKj7rWJ = BigInt("1388")
		const uint256ZurnJVb = await WolfStakingRewardsTQcv9l.totalSupplyPerPool.call(uintjKj7rWJ, {from: accounts[1]});
		await WolfStakingRewardsTQcv9l.onlyRewardsDistribution.call({from: accounts[1]});
		const stringx6QQFCb = await WolfStakingRewardsTQcv9l.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJPG7QQh = "yQoL8vkRQGd1TkZdYw4iOCfo3xNPgBaBRylt8KtfQXS14nwU4wmhnzxtIrqFR2f6xURb3kJr7TwzwfKf0qb2Ir"
		const stringihPrbY = "vUIFkmUaSJOyclOlSiRUxL6JInMb9M9p4ZslraGWINze2HAHDEcEtBFeMomzAr3A1DNS0l6wSYybS03lRMe8uKsnlFMp7im"
		const uintTLKdy9r = BigInt("10")
		const WolfStakingRewardsH7lW3R1 = await WolfStakingRewards.new(stringJPG7QQh, stringihPrbY, uintTLKdy9r, {from: accounts[1]});
		const uintZqZBZhZ = BigInt("360")
		const addressbCasOUh = accounts[1]
		const uintFMdHO7Y = BigInt("695")
		const uintkHiOo69 = BigInt("1273")
		const addresspSbVow = accounts[3]
		const uint256ehOEIh7 = await WolfStakingRewardsH7lW3R1.balanceOfPerPool.call(addressbCasOUh, uintZqZBZhZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintkPbD98o = await WolfStakingRewardsH7lW3R1.getReward.call(uintFMdHO7Y, {from: accounts[2]});
		const uint256nnAtQ5a = await WolfStakingRewardsH7lW3R1.balanceOfPerPool.call(addresspSbVow, uintkHiOo69, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYCm3fu1 = "8djhcJCVGEgAKCGsWs9THE8cJJui1vEBy3mhNcc1wl6zX5c3yrlwTLwtg2AQVbOQelfp8mIr3Y2cECWyv0AFqDL3"
		const stringKZTScpU = "D2epoFKSq8LnJkQJjEgeRirdlOiQ0AIl32TpCODtv9qIUY2kcqaH26Ffyl85s7DXv9hdhFH29kIZzrWPvJ3VieeJ"
		const uintUwsIkAy = BigInt("85")
		const WolfStakingRewardsC8o1kwp = await WolfStakingRewards.new(stringYCm3fu1, stringKZTScpU, uintUwsIkAy, {from: accounts[2]});
		const uintsa6sJNU = BigInt("850")
		const uintNdrNdJP = BigInt("547")
		const addresst1C5esb = "0x0000000000000000000000000000000000000001"
		const uintADwXWwv = BigInt("1311")
		const uinttNch21C = BigInt("947")
		const uintg4mHw0 = BigInt("1608")
		const uintOlATtS8 = BigInt("974")
		const uint256akJB75 = await WolfStakingRewardsC8o1kwp.exit.call(uintsa6sJNU, {from: accounts[5]});
		const addresskWEGFf4 = await WolfStakingRewardsC8o1kwp.updateReward.call(addresst1C5esb, uintNdrNdJP, {from: accounts[3]});
		await WolfStakingRewardsC8o1kwp.nonReentrant.call({from: accounts[2]});
		const stringlFA3L5l = await WolfStakingRewardsC8o1kwp.name.call({from: accounts[1]});
		const uint256knTxslT = await WolfStakingRewardsC8o1kwp.withdraw.call(uinttNch21C, uintADwXWwv, {from: accounts[5]});
		const uint256LVRBFEb = await WolfStakingRewardsC8o1kwp.stake.call(uintOlATtS8, uintg4mHw0, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPy96XhL = "ki0P7VCrBOE4Zdcv0qRhljpqEecnf7qrBfIYdoP85jFH9XifwBq14hGzSsyOOYcUTP4VeTK3SkT42q6gdw3e"
		const stringCjaKeJr = "756a5gYJoMKHslQSGGI3XsNDJLg9No36SCYCocb1LgDr66axo4oMX0qz3LTWxojt525eTUib8aBPhzYh"
		const uintpGGYmuS = BigInt("203")
		const WolfStakingRewardsfhnovsy = await WolfStakingRewards.new(stringPy96XhL, stringCjaKeJr, uintpGGYmuS, {from: "0x0000000000000000000000000000000000000001"});
		const uintKDjdCNj = BigInt("1851")
		const addressFcAJTD0 = accounts[4]
		const uintRYOZrK = BigInt("1188")
		const uint8IkAtzmQ = await WolfStakingRewardsfhnovsy.decimals.call({from: accounts[2]});
		const uint256ac4mFZz = await WolfStakingRewardsfhnovsy.balanceOfPerPool.call(addressFcAJTD0, uintKDjdCNj, {from: accounts[4]});
		const uint256WrXcdqi = await WolfStakingRewardsfhnovsy.getRewardForDuration.call(uintRYOZrK, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringItoqeE1 = "sgr1ywQN5FfZEHs7t8aRniLBiOGNi3OdEIS2vW3JnnumuhxgAyXRXkizSqjdQm0uM"
		const stringqgYjOx2 = "hPEAdlq6dxXMgS6cRdbxPJJN7UCq5PehFKJzqUQMgh19CIlWvpkRLu8HElLTrhMPJmF4iOAgJRRL"
		const uinthBXGSp = BigInt("95")
		const WolfStakingRewardsOgEcC40 = await WolfStakingRewards.new(stringItoqeE1, stringqgYjOx2, uinthBXGSp, {from: accounts[5]});
		const uintxsPSnza = BigInt("407")
		const uintCj8eMjH = BigInt("641")
		const addressb2Ck8Er = accounts[0]
		const uintoNKlw9l = BigInt("71")
		const uint256Nq7CLjS = await WolfStakingRewardsOgEcC40.lastTimeRewardApplicable.call(uintxsPSnza, {from: accounts[2]});
		const uint256B9cfAeP = await WolfStakingRewardsOgEcC40.earned.call(addressb2Ck8Er, uintCj8eMjH, {from: accounts[4]});
		const uint8t2SdCmJ = await WolfStakingRewardsOgEcC40.decimals.call({from: accounts[0]});
		await WolfStakingRewardsOgEcC40.onlyOwner.call({from: accounts[4]});
		const uint256arrayH7AFkmR = await WolfStakingRewardsOgEcC40.updateNotifyRewardAmount.call(uintoNKlw9l, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringERTlrT = "KPlRUz873am9UYKFMzhPCtxWaQMu"
		const stringwBBTphl = "7dS"
		const uintt0Uq1LV = BigInt("137")
		const WolfStakingRewardsLyvEqGP = await WolfStakingRewards.new(stringERTlrT, stringwBBTphl, uintt0Uq1LV, {from: accounts[1]});
		const uint5D3seD = BigInt("1902")
		const uintAIZxIkC = BigInt("1138")
		const addressqoPlSAF = accounts[3]
		const uint256eNEflD = await WolfStakingRewardsLyvEqGP.exit.call(uint5D3seD, {from: accounts[1]});
		await WolfStakingRewardsLyvEqGP.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256F4iT2Y8 = await WolfStakingRewardsLyvEqGP.earned.call(addressqoPlSAF, uintAIZxIkC, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIZ8mCrZ = "8dxCgc4leNQdifcgtFQVRTQGR"
		const stringvz1ftZ = "by5M9yo53wdhBZa"
		const uintxENOYBA = BigInt("217")
		const WolfStakingRewardszsRf0Zw = await WolfStakingRewards.new(stringIZ8mCrZ, stringvz1ftZ, uintxENOYBA, {from: accounts[4]});
		const uintHS7jwDv = BigInt("650")
		const uintTaZRPO = BigInt("194")
		const uintHoJfTFp = BigInt("828")
		const uintcaygX6N = BigInt("1976")
		const addressLQNHJZW = accounts[3]
		const uintGkAD82I = BigInt("526")
		const uint256CzbJuh7 = await WolfStakingRewardszsRf0Zw.withdraw.call(uintTaZRPO, uintHS7jwDv, {from: accounts[0]});
		const uint256ONHDG9U = await WolfStakingRewardszsRf0Zw.lastTimeRewardApplicable.call(uintHoJfTFp, {from: accounts[4]});
		const addressQmgAix6 = await WolfStakingRewardszsRf0Zw.updateReward.call(addressLQNHJZW, uintcaygX6N, {from: accounts[1]});
		const uintdfpjLA6 = await WolfStakingRewardszsRf0Zw.getReward.call(uintGkAD82I, {from: accounts[4]});
		await WolfStakingRewardszsRf0Zw.nonReentrant.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEj41Sbe = "rBacG7NWGH4zr2IpHsMhMvKzyPLU1DoQEGiKGnkiC7tq6nJVXIyyM6RuoubFs6o"
		const stringREpa1Sr = "W9gILs8mXddEuqzOHpWYMdMNAK7xCR2kalfeAIOXzMTX9kO8MNEeSfAa1PpZyTLIBWj7eymXaoOga1nhNxml"
		const uintK6rVzI1 = BigInt("96")
		const WolfStakingRewardsLXK1IMd = await WolfStakingRewards.new(stringEj41Sbe, stringREpa1Sr, uintK6rVzI1, {from: accounts[5]});
		const uintrERO5FB = BigInt("1514")
		const uintGIWofeS = BigInt("294")
		const addressdkF7XiV = accounts[3]
		const uintqUH7Jd = BigInt("434")
		const uint256cu7fvu = await WolfStakingRewardsLXK1IMd.exit.call(uintrERO5FB, {from: accounts[0]});
		const uint256woT5pId = await WolfStakingRewardsLXK1IMd.earned.call(addressdkF7XiV, uintGIWofeS, {from: accounts[0]});
		const uint256arrayj6uzCyF = await WolfStakingRewardsLXK1IMd.updateNotifyRewardAmount.call(uintqUH7Jd, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringw0vrYiZ = "TLJjJIzM3ZXb7Sc8xAXsTBgr9JmMZkO3tvchOwpVSuojh5ISOfF4vkBQu3jrENjnxW2yRDtERGWEaq2woQiyuEc2LURPTdIXNe"
		const stringpPZqTfP = "2OFn1NjDMMP"
		const uintInWCC4q = BigInt("140")
		const WolfStakingRewardszzZx2K7 = await WolfStakingRewards.new(stringw0vrYiZ, stringpPZqTfP, uintInWCC4q, {from: accounts[0]});
		const uintfD828xC = BigInt("1707")
		const uintfFJq1lR = BigInt("1421")
		const uintlFm0cqW = BigInt("1536")
		const uintsNnFxsT = BigInt("1034")
		const uintxKlZMc5 = BigInt("1218")
		const uint256M0Sdacm = await WolfStakingRewardszzZx2K7.withdraw.call(uintfFJq1lR, uintfD828xC, {from: accounts[4]});
		const uint256fPTTo7 = await WolfStakingRewardszzZx2K7.getRewardForDuration.call(uintlFm0cqW, {from: accounts[0]});
		const uint256mgDNNI0 = await WolfStakingRewardszzZx2K7.exit.call(uintsNnFxsT, {from: accounts[0]});
		const uint256arraymCPG5N = await WolfStakingRewardszzZx2K7.updateNotifyRewardAmount.call(uintxKlZMc5, {from: accounts[3]});
		const uint8UUturbL = await WolfStakingRewardszzZx2K7.decimals.call({from: accounts[0]});
		await WolfStakingRewardszzZx2K7.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKlgW1DA = "oKM9OMNvgqM6klEIbVoiWLK93ZGgDtgwVtaRuH7RoffOkE2vWNZPrjxCzIslqfOE"
		const stringL2dWqJv = "v8jjG5SH3oR4NkvV7KqeonFBawDK9OnsxTr2DW3J2MRmzbQ3aMVrreNz8MCOJ"
		const uintn8cWhbc = BigInt("85")
		const WolfStakingRewardsHZhSrx = await WolfStakingRewards.new(stringKlgW1DA, stringL2dWqJv, uintn8cWhbc, {from: accounts[3]});
		const uintAP2Xq0p = BigInt("59")
		const uintt0VSEW = BigInt("590")
		const uintYfFcjy = BigInt("1137")
		const uint256NcbjVs = await WolfStakingRewardsHZhSrx.totalSupplyPerPool.call(uintAP2Xq0p, {from: accounts[2]});
		const stringnzwPJF2 = await WolfStakingRewardsHZhSrx.name.call({from: accounts[0]});
		const uint256nxA5K8i = await WolfStakingRewardsHZhSrx.withdrawRemainingBalance.call(uintYfFcjy, uintt0VSEW, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtx6aB9U = "JgiAarK8IMmnS"
		const stringZyiOboN = "27uez3j7GseiqrFdVfldODw7IQ48U3ySRltpOVCxNYsUk45e9PoTuP0T2o94G1WF2UeY"
		const uintMxyMelg = BigInt("30")
		const WolfStakingRewardseq9LrSz = await WolfStakingRewards.new(stringtx6aB9U, stringZyiOboN, uintMxyMelg, {from: accounts[4]});
		const uintTzWiI9 = BigInt("430")
		const uintDAS7zDB = BigInt("1382")
		const uint8GiBp5 = BigInt("1344")
		const addressiTy0c0q = accounts[5]
		const uintPNfeRET = BigInt("1185")
		const uint256arrayWlBAxUW = await WolfStakingRewardseq9LrSz.updateNotifyRewardAmount.call(uintTzWiI9, {from: accounts[3]});
		const uint256arrayWk9PVe2 = await WolfStakingRewardseq9LrSz.updateNotifyRewardAmount.call(uintDAS7zDB, {from: accounts[2]});
		const uint256qWVzfX7 = await WolfStakingRewardseq9LrSz.balanceOfPerPool.call(addressiTy0c0q, uint8GiBp5, {from: accounts[4]});
		await WolfStakingRewardseq9LrSz.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256QsA5u4 = await WolfStakingRewardseq9LrSz.rewardPerToken.call(uintPNfeRET, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJHNWhEM = "WU4nW7JBrFvigSyntM34XxOoHKjl1OIfhVHMj26DBLj89WyqOfsSN8VrVLtRrWyDTwygKQqLSrOnhzp7JUlMAz"
		const stringyJrj7e = "KTcVNP1rDRHo9fkLmzFHDO"
		const uintJKUihwS = BigInt("110")
		const WolfStakingRewardseLBIWzw = await WolfStakingRewards.new(stringJHNWhEM, stringyJrj7e, uintJKUihwS, {from: accounts[3]});
		const uintnkd5w7 = BigInt("1750")
		const uintVBYgEwz = BigInt("1490")
		const uint256W8gGO1M = await WolfStakingRewardseLBIWzw.lastTimeRewardApplicable.call(uintnkd5w7, {from: accounts[1]});
		const uint256JyNO3Hv = await WolfStakingRewardseLBIWzw.totalSupplyPerPool.call(uintVBYgEwz, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMFHUDUx = "lKf03qGQDws4azUSHricGoPXqnWgCfC6Lnsg8qcX1gyESQCXQjvEU0SCoxxNpE7KLgmRhvcCtTkq5d4ig2Dos1V9s"
		const stringv0GfSbX = "cck2dP0VPfgYgGPARnumkEqT4338uS5IpH8Y9iP99QryXr9fETTEU7GWfIwvz11nuyC9"
		const uintWVoDrhD = BigInt("58")
		const WolfStakingRewardsbnqENkC = await WolfStakingRewards.new(stringMFHUDUx, stringv0GfSbX, uintWVoDrhD, {from: accounts[3]});
		const uintFLQ7Mv = BigInt("1845")
		const uint6B8pFL = BigInt("54")
		const uintEXP4Yc1 = BigInt("1821")
		const uintBZEYfCT = BigInt("100")
		const uint256vRWJDAK = await WolfStakingRewardsbnqENkC.rewardPerToken.call(uintFLQ7Mv, {from: accounts[1]});
		const stringOz6N19S = await WolfStakingRewardsbnqENkC.symbol.call({from: accounts[2]});
		const uint256arrayo0UoWbS = await WolfStakingRewardsbnqENkC.updateNotifyRewardAmount.call(uint6B8pFL, {from: accounts[2]});
		const uint256YlBTc9 = await WolfStakingRewardsbnqENkC.stake.call(uintBZEYfCT, uintEXP4Yc1, {from: accounts[1]});
		const stringa8Sprx1 = await WolfStakingRewardsbnqENkC.symbol.call({from: accounts[5]});
		const uint8ydSuzND = await WolfStakingRewardsbnqENkC.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCa2KkQk = "XD8CelmS9G19TH2ED3taQ0JO5Qhdlt0X2VRu"
		const stringWyUQnwm = "XzWxRX5hS60OTAA664aIl1PI1uXm3fzROUle5ek7DNbGrkmYnt7VkP4tZTILFUeFkxW89Tqv"
		const uintTSpwGQC = BigInt("221")
		const WolfStakingRewardsoxg7cRT = await WolfStakingRewards.new(stringCa2KkQk, stringWyUQnwm, uintTSpwGQC, {from: accounts[4]});
		const uintRuupnHG = BigInt("1534")
		const uintdhXkwfT = BigInt("870")
		const uinthg59HT = BigInt("162")
		const uintYM79JUA = BigInt("132")
		const uintpgAFn5D = BigInt("60")
		const addresslyps1K = accounts[4]
		const uint2567hqFuW = await WolfStakingRewardsoxg7cRT.withdrawRemainingBalance.call(uintdhXkwfT, uintRuupnHG, {from: accounts[1]});
		const uint256ykcsIpt = await WolfStakingRewardsoxg7cRT.stake.call(uintYM79JUA, uinthg59HT, {from: accounts[1]});
		const addresstHmjQm = await WolfStakingRewardsoxg7cRT.updateReward.call(addresslyps1K, uintpgAFn5D, {from: accounts[0]});
		const uint8WIFtdcL = await WolfStakingRewardsoxg7cRT.decimals.call({from: accounts[4]});
		await WolfStakingRewardsoxg7cRT.onlyRewardsDistribution.call({from: accounts[4]});
	});
})