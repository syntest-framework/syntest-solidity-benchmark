const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2Xs7Uo6 = await DmmControllerV2.new({from: accounts[3]});
		await DmmControllerV2Xs7Uo6.requireIsFromAssetIntroducer.call({from: accounts[4]});
		await DmmControllerV2Xs7Uo6.initializer.call({from: accounts[1]});
		await DmmControllerV2Xs7Uo6.nonReentrant.call({from: accounts[2]});
		await DmmControllerV2Xs7Uo6.whenPaused.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressXFHNF9W = accounts[1]
		const addresstAiLreL = accounts[3]
		const addressLhGeUNR = accounts[4]
		const addresseirxYMc = accounts[2]
		const addressc9neQoR = accounts[3]
		const addressrDGAG3y = accounts[4]
		const addressH7IDDi0 = accounts[0]
		const addressOcHBgSr = accounts[1]
		const addressp5si8cR = accounts[0]
		const uintq4Tz9LR = BigInt("94")
		const uintEbfXUVe = BigInt("392")
		const addressIxrIPO = accounts[1]
		const DmmControllerV2dqq4obM = await DmmControllerV2.new(addressXFHNF9W, addresstAiLreL, addressLhGeUNR, addresseirxYMc, addressc9neQoR, addressrDGAG3y, addressH7IDDi0, addressOcHBgSr, addressp5si8cR, uintq4Tz9LR, uintEbfXUVe, addressIxrIPO, {from: accounts[3]});
		const uintRiMTeZO = BigInt("781")
		const uintF5lzXCE = BigInt("1379")
		const addressBdnnXPy = accounts[3]
		const addressEtXVbcC = accounts[2]
		const 
bpnFLt = await DmmControllerV2dqq4obM.increaseTotalSupply.call(uintF5lzXCE, uintRiMTeZO, {from: accounts[0]});
		const 
sF71G8 = await DmmControllerV2dqq4obM.transferOwnership.call(addressBdnnXPy, {from: accounts[4]});
		const addressgocjgef = await DmmControllerV2dqq4obM.setOffChainAssetValuator.call(addressEtXVbcC, {from: accounts[4]});
		await DmmControllerV2dqq4obM.requireIsStakingPurchaser.call({from: accounts[0]});
		await DmmControllerV2dqq4obM.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addressKae10p = accounts[4]
		const addressZGiq3GO = accounts[0]
		const addressqPRNpNS = accounts[3]
		const addressfnnM44G = accounts[2]
		const addressmI8OZkX = accounts[3]
		const addressf7Q2i9T = accounts[4]
		const addressCQCBNei = "0x0000000000000000000000000000000000000001"
		const addressscKwylN = accounts[3]
		const addressQqu1YRi = accounts[1]
		const uintzOQSvAc = BigInt("124")
		const uintZvMXwNi = BigInt("1569")
		const addresshfMUaJS = accounts[0]
		const DmmControllerV2qnDxcR5 = await DmmControllerV2.new(addressKae10p, addressZGiq3GO, addressqPRNpNS, addressfnnM44G, addressmI8OZkX, addressf7Q2i9T, addressCQCBNei, addressscKwylN, addressQqu1YRi, uintzOQSvAc, uintZvMXwNi, addresshfMUaJS, {from: accounts[2]});
		const uintFf3bcRb = BigInt("1324")
		const uintNpfLlTI = BigInt("790")
		const uintQO5rPbf = BigInt("909")
		await DmmControllerV2qnDxcR5.pause.call({from: accounts[3]});
		const addresszNQAs9J = await DmmControllerV2qnDxcR5.getDmmTokenAddressByDmmTokenId.call(uintFf3bcRb, {from: accounts[0]});
		await DmmControllerV2qnDxcR5.requireIsStakingPurchaser.call({from: "0x0000000000000000000000000000000000000001"});
		const 
HI84PGN = await DmmControllerV2qnDxcR5.increaseTotalSupply.call(uintQO5rPbf, uintNpfLlTI, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressGT49Dei = accounts[4]
		const addressqTLVP8C = "0x0000000000000000000000000000000000000001"
		const addressSV8Qzmz = accounts[4]
		const addressGwiXqgo = accounts[3]
		const addressu3waJAy = accounts[4]
		const addressqZbWI7V = accounts[4]
		const addressokLYpqZ = accounts[1]
		const address5j5EM7 = accounts[4]
		const addressFPgU3eT = accounts[3]
		const uintZzZyY4g = BigInt("1254")
		const uintdzwIPJQ = BigInt("1432")
		const addressTfiHNSd = accounts[1]
		const DmmControllerV2HGL08vB = await DmmControllerV2.new(addressGT49Dei, addressqTLVP8C, addressSV8Qzmz, addressGwiXqgo, addressu3waJAy, addressqZbWI7V, addressokLYpqZ, address5j5EM7, addressFPgU3eT, uintZzZyY4g, uintdzwIPJQ, addressTfiHNSd, {from: "0x0000000000000000000000000000000000000001"});
		const addressSUeiKTd = accounts[1]
		const addressD8RRPOY = accounts[1]
		const uintnIYScCa = await DmmControllerV2HGL08vB.getInterestRateByDmmTokenAddress.call(addressSUeiKTd, {from: accounts[2]});
		const bool38Nhlh = await DmmControllerV2HGL08vB.isPauser.call(addressD8RRPOY, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressp8QfTDD = accounts[1]
		const addressZHpooxM = accounts[5]
		const addresssRQIiOa = accounts[0]
		const addressIq4koC = "0x0000000000000000000000000000000000000001"
		const addressidEp8RO = accounts[2]
		const addressx7tlrTg = accounts[0]
		const addressyn4McRy = "0x0000000000000000000000000000000000000001"
		const addressK0PCNCm = accounts[2]
		const addressKHYvRna = accounts[4]
		const uintztLbMns = BigInt("1753")
		const uintUxnJv20 = BigInt("498")
		const addressBUN4MZR = accounts[4]
		const DmmControllerV2a7sFG3a = await DmmControllerV2.new(addressp8QfTDD, addressZHpooxM, addresssRQIiOa, addressIq4koC, addressidEp8RO, addressx7tlrTg, addressyn4McRy, addressK0PCNCm, addressKHYvRna, uintztLbMns, uintUxnJv20, addressBUN4MZR, {from: accounts[1]});
		const addressc96yKWy = accounts[3]
		const addressW3QcOj = accounts[3]
		const uinte5VmMfH = BigInt("23")
		const uintWvZRu47 = BigInt("1103")
		const uintRC77cJT = BigInt("584")
		const 
BCf76sk = await DmmControllerV2a7sFG3a.addMarketFromExistingDmmToken.call(addressW3QcOj, addressc96yKWy, {from: accounts[0]});
		const uintQeOxDad = await DmmControllerV2a7sFG3a.setMinCollateralization.call(uinte5VmMfH, {from: "0x0000000000000000000000000000000000000001"});
		const uintPtMthGN = await DmmControllerV2a7sFG3a.requireIsPrimaryMarketNft.call(uintWvZRu47, {from: accounts[4]});
		const uintk7FcgE = await DmmControllerV2a7sFG3a.requireCanWithdrawFunds.call(uintRC77cJT, {from: accounts[4]});
		await DmmControllerV2a7sFG3a.whenNotPaused.call({from: accounts[3]});
		const boolL7i4E5u = await DmmControllerV2a7sFG3a.isOwner.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressqHil6a = accounts[3]
		const addressScjzyph = accounts[2]
		const addressWDD650d = accounts[3]
		const addressxQBc9B1 = accounts[3]
		const addressUXSSil = "0x0000000000000000000000000000000000000001"
		const addresshxkb4fX = accounts[3]
		const addressObH9Kfs = accounts[0]
		const addressyZORCpl = accounts[4]
		const addressIMrqg46 = accounts[3]
		const uintEO4MAN9 = BigInt("1254")
		const uintXiebkui = BigInt("527")
		const addressm1lorgo = accounts[1]
		const DmmControllerV2uQh3zgC = await DmmControllerV2.new(addressqHil6a, addressScjzyph, addressWDD650d, addressxQBc9B1, addressUXSSil, addresshxkb4fX, addressObH9Kfs, addressyZORCpl, addressIMrqg46, uintEO4MAN9, uintXiebkui, addressm1lorgo, {from: accounts[3]});
		const uintL9KsXgx = BigInt("782")
		const uintNZtrOsZ = BigInt("1548")
		const addressSu7BiVH = accounts[3]
		const addressSLxjdFR = accounts[2]
		await DmmControllerV2uQh3zgC.requireIsFromAssetIntroducer.call({from: accounts[0]});
		const uint0HkEzu = await DmmControllerV2uQh3zgC.setMinCollateralization.call(uintL9KsXgx, {from: accounts[4]});
		const uintW14p4Fe = await DmmControllerV2uQh3zgC.requireTokenExists.call(uintNZtrOsZ, {from: accounts[3]});
		const boolbttayGu = await DmmControllerV2uQh3zgC.isMarketEnabledByDmmTokenAddress.call(addressSu7BiVH, {from: "0x0000000000000000000000000000000000000001"});
		const uintGY9LBEL = await DmmControllerV2uQh3zgC.getTokenIdFromDmmTokenAddress.call(addressSLxjdFR, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressCveEss = "0x0000000000000000000000000000000000000001"
		const addressOJQ9Kp = accounts[0]
		const addressts5ScaR = accounts[0]
		const addressuQjk0B1 = accounts[1]
		const addressSraPJd = accounts[4]
		const addressff15bLg = "0x0000000000000000000000000000000000000001"
		const addressFY6WiBW = accounts[5]
		const addressc5mHlb2 = accounts[2]
		const addressf3QSpW4 = accounts[3]
		const uintZpNTl6 = BigInt("298")
		const uintzo6cOX5 = BigInt("1367")
		const addressMZxzic = accounts[3]
		const DmmControllerV2ujpOwey = await DmmControllerV2.new(addressCveEss, addressOJQ9Kp, addressts5ScaR, addressuQjk0B1, addressSraPJd, addressff15bLg, addressFY6WiBW, addressc5mHlb2, addressf3QSpW4, uintZpNTl6, uintzo6cOX5, addressMZxzic, {from: accounts[4]});
		const uintMo0mWM4 = BigInt("1100")
		const addressou0xgOb = accounts[2]
		const uintXrpNRBd = await DmmControllerV2ujpOwey.setMinReserveRatio.call(uintMo0mWM4, {from: accounts[5]});
		await DmmControllerV2ujpOwey.renounceOwnership.call({from: accounts[3]});
		const address6rmkxA = await DmmControllerV2ujpOwey.unBlacklist.call(addressou0xgOb, {from: accounts[2]});
		await DmmControllerV2ujpOwey.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await DmmControllerV2ujpOwey.whenPaused.call({from: accounts[5]});
	});

	it('test for DmmControllerV2', async () => {
		const addressa4bdcT4 = accounts[4]
		const addressWZ3hA81 = accounts[0]
		const addresstu2G0FI = accounts[4]
		const addressCRA2uLB = accounts[3]
		const addressikmm0H5 = accounts[0]
		const addressJ8ylBLU = accounts[2]
		const addressts7jkfR = accounts[4]
		const addresskGk8UXq = accounts[4]
		const addressrFajyJO = accounts[0]
		const uintdRZ4BJH = BigInt("497")
		const uintILOd65j = BigInt("1335")
		const addresslBLgRvj = accounts[4]
		const DmmControllerV2w6k8Ehw = await DmmControllerV2.new(addressa4bdcT4, addressWZ3hA81, addresstu2G0FI, addressCRA2uLB, addressikmm0H5, addressJ8ylBLU, addressts7jkfR, addresskGk8UXq, addressrFajyJO, uintdRZ4BJH, uintILOd65j, addresslBLgRvj, {from: accounts[0]});
		const addressHI1Xlih = accounts[4]
		const addressM4XQD4z = accounts[3]
		const addresshNznYkH = await DmmControllerV2w6k8Ehw.owner.call({from: accounts[0]});
		const boolADjwI5K = await DmmControllerV2w6k8Ehw.isPauser.call(addressHI1Xlih, {from: accounts[0]});
		const addressbms9JF = await DmmControllerV2w6k8Ehw.setDmmEtherFactory.call(addressM4XQD4z, {from: accounts[0]});
	});
})