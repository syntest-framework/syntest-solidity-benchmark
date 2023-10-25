const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressmU8Nd0k = accounts[4]
		const addressf24wYvk = accounts[4]
		const addressUQyjEbT = accounts[4]
		const BACMARSLPTOKENPoolC7NMlbP = await BACMARSLPTOKENPool.new(addressmU8Nd0k, addressf24wYvk, addressUQyjEbT, {from: accounts[4]});
		const byteZ4QiCaW = "0x0b0a13111a121f170c1f0c060c1b18040909040c07141d151c0d0e020f0f0712"
		const byteAN62MY = "0x0a0c1b151a051e200f0104010f011f19181f141e100d0d051f16011f16151406"
		const uintXgybuK0 = BigInt("27")
		const uintD4w18MV = BigInt("1764")
		const uintwo23clN = BigInt("252")
		await BACMARSLPTOKENPoolC7NMlbP.nonReentrant.call({from: accounts[4]});
		const uint256OGlm2b3 = await BACMARSLPTOKENPoolC7NMlbP.stakeWithPermit.call(uintwo23clN, uintD4w18MV, uintXgybuK0, byteAN62MY, byteZ4QiCaW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UamsLab = await BACMARSLPTOKENPoolC7NMlbP.getRewardForDuration.call({from: accounts[4]});
		const uint8cIgeBOw = await BACMARSLPTOKENPoolC7NMlbP.decimals.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolC7NMlbP.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfCQ18hL = "6FwKTFjSmMhd912gshQa"
		const stringqDenUI = "MJdBhbldEOMxanfxp9fIyAYjVQ48MAM5zePhRVpwkGWsgGTV6Lv2yqZooHkTouaSh2lWDe2yAkeWBVhGXUHHuNoplPMYfVGLqR"
		const uinthY7pu9D = BigInt("96")
		const BACMARSLPTOKENPool7l9FOp = await BACMARSLPTOKENPool.new(stringfCQ18hL, stringqDenUI, uinthY7pu9D, {from: accounts[3]});
		const stringOqquUUq = await BACMARSLPTOKENPool7l9FOp.name.call({from: accounts[1]});
		await BACMARSLPTOKENPool7l9FOp.exit.call({from: accounts[2]});
		const stringkBcEJLC = await BACMARSLPTOKENPool7l9FOp.name.call({from: accounts[2]});
		const uint256lPOM6Ut = await BACMARSLPTOKENPool7l9FOp.rewardPerToken.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTiEsjD = "XTVG45zGBcQwfT3I7f7Z5n2rTDPXr27oc9bXF9Dk6fDpSFY2rkFdi3Q"
		const stringzj5H3wY = "YwNmfu1QNxTiVLmI5b5d5qEpGgNuMw"
		const uintlb9pQTN = BigInt("51")
		const BACMARSLPTOKENPoolXtAUcJn = await BACMARSLPTOKENPool.new(stringTiEsjD, stringzj5H3wY, uintlb9pQTN, {from: accounts[1]});
		const addressaQkK6IP = accounts[2]
		const uint256MnldF6k = await BACMARSLPTOKENPoolXtAUcJn.totalSupply.call({from: accounts[1]});
		const uint256qXaS622 = await BACMARSLPTOKENPoolXtAUcJn.balanceOf.call(addressaQkK6IP, {from: accounts[0]});
		await BACMARSLPTOKENPoolXtAUcJn.nonReentrant.call({from: accounts[5]});
		const uint256LBIFoW = await BACMARSLPTOKENPoolXtAUcJn.getRewardForDuration.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringC8RFQ2 = "bQA1zrXpHWEYaymvC1PE"
		const stringePRGXO = "9yaVVebDfwR9yYyMmHmMfDP8G2VOBN96ArrN1u"
		const uintbuwFxoa = BigInt("24")
		const BACMARSLPTOKENPoolqajfnYl = await BACMARSLPTOKENPool.new(stringC8RFQ2, stringePRGXO, uintbuwFxoa, {from: accounts[2]});
		await BACMARSLPTOKENPoolqajfnYl.nonReentrant.call({from: accounts[4]});
		await BACMARSLPTOKENPoolqajfnYl.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressH7K4MfA = accounts[4]
		const addressC9dl9CS = accounts[0]
		const addresssK2li5B = accounts[4]
		const BACMARSLPTOKENPoolbJVtgqv = await BACMARSLPTOKENPool.new(addressH7K4MfA, addressC9dl9CS, addresssK2li5B, {from: "0x0000000000000000000000000000000000000001"});
		const uintTCFhRJW = BigInt("970")
		const uintGfjvhsU = BigInt("68")
		const stringZw5XfIS = await BACMARSLPTOKENPoolbJVtgqv.symbol.call({from: accounts[4]});
		const stringrZ6UEVM = await BACMARSLPTOKENPoolbJVtgqv.name.call({from: accounts[3]});
		const uint256ejOpGZC = await BACMARSLPTOKENPoolbJVtgqv.notifyRewardAmount.call(uintTCFhRJW, {from: accounts[4]});
		const uint256W7TV9sJ = await BACMARSLPTOKENPoolbJVtgqv.totalSupply.call({from: accounts[3]});
		const stringt9V61k = await BACMARSLPTOKENPoolbJVtgqv.name.call({from: accounts[2]});
		const uint256eCmsai0 = await BACMARSLPTOKENPoolbJVtgqv.withdraw.call(uintGfjvhsU, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAlX5B8O = "3jBfY7UfBmXToYJRwVBVAD5ooeQLzt"
		const stringbUgZCM5 = "MKYs3kwrsydNvZkDpCrHg94qRmVAAObogphlpydajW0s9s8CFMRTxxLZi8hLkYuRsKny5eVlsTn9hN0Gu4j98onKv3QJI"
		const uint2nNBB2 = BigInt("188")
		const BACMARSLPTOKENPoolJ5W16v3 = await BACMARSLPTOKENPool.new(stringAlX5B8O, stringbUgZCM5, uint2nNBB2, {from: accounts[2]});
		const addressSxQF5R = accounts[4]
		const stringS7T1tvM = await BACMARSLPTOKENPoolJ5W16v3.symbol.call({from: accounts[1]});
		const stringIsK2amS = await BACMARSLPTOKENPoolJ5W16v3.name.call({from: accounts[4]});
		const uint256CojhnOI = await BACMARSLPTOKENPoolJ5W16v3.totalSupply.call({from: accounts[5]});
		const uint256vcPKxdH = await BACMARSLPTOKENPoolJ5W16v3.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256YhcMF70 = await BACMARSLPTOKENPoolJ5W16v3.earned.call(addressSxQF5R, {from: accounts[3]});
		const uint256zqTveI = await BACMARSLPTOKENPoolJ5W16v3.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxV1u0Pb = "HGnlTjCbL9zO3G3ytpdE6fy8TVET"
		const stringIp3Kkva = "aFpZQvqDn7k8XYKrHx6D7XPc62xRHK0y4ErCLFLuxwlRs2q0Jbst"
		const uintf51JkJ7 = BigInt("157")
		const BACMARSLPTOKENPoolZfwpBij = await BACMARSLPTOKENPool.new(stringxV1u0Pb, stringIp3Kkva, uintf51JkJ7, {from: "0x0000000000000000000000000000000000000001"});
		const uintbFadrjb = BigInt("909")
		const byteuAdZUyP = "0x000f12041b090b1c0112151e1a050901100e19080d04201212011707131b1504"
		const bytevos7BY3 = "0x171101171c1b0a110f0f1b1d061a0d1b05130f0913080f00130710130b161505"
		const uintQQ9KCYx = BigInt("142")
		const uintFMMDy66 = BigInt("1537")
		const uintH5uewP5 = BigInt("617")
		const bytesG3IvdN = "0x00030d040a11031c1a0b060e1f0708160c1c1c1c1f15181b1c190d181e141c14"
		const bytevCkfLrl = "0x180f03160f2011130b0b1e07190a1a0f190c11130c13000d10180b0b0a0d1c1c"
		const uintDekKZet = BigInt("77")
		const uintHTtBgiM = BigInt("268")
		const uint9omC48 = BigInt("1650")
		const uint256zvv3Z2e = await BACMARSLPTOKENPoolZfwpBij.notifyRewardAmount.call(uintbFadrjb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NXQFHDw = await BACMARSLPTOKENPoolZfwpBij.stakeWithPermit.call(uintH5uewP5, uintFMMDy66, uintQQ9KCYx, bytevos7BY3, byteuAdZUyP, {from: accounts[5]});
		const uint256ItzUgwG = await BACMARSLPTOKENPoolZfwpBij.rewardPerToken.call({from: accounts[5]});
		const uint256SU0SKb = await BACMARSLPTOKENPoolZfwpBij.stakeWithPermit.call(uint9omC48, uintHTtBgiM, uintDekKZet, bytevCkfLrl, bytesG3IvdN, {from: accounts[4]});
		const stringJvukt7v = await BACMARSLPTOKENPoolZfwpBij.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTxY9Iby = "5zwHbd2GONFzko9N2Un7ze2m1blrUAa1qxZhaCGkJ"
		const stringu2oaMGb = "fyJiLhQnbllmIv0b56oTLJvMO3FjcLFDF8b3wZBHc8mVXKzJKkO"
		const uintc3d4nSq = BigInt("59")
		const BACMARSLPTOKENPoolVxfAbRC = await BACMARSLPTOKENPool.new(stringTxY9Iby, stringu2oaMGb, uintc3d4nSq, {from: accounts[2]});
		const uinttLADc4i = BigInt("1677")
		const uintzGhUiJ9 = BigInt("95")
		const uint256xNpyINa = await BACMARSLPTOKENPoolVxfAbRC.rewardPerToken.call({from: accounts[1]});
		const uint256R4frDNe = await BACMARSLPTOKENPoolVxfAbRC.rewardPerToken.call({from: accounts[1]});
		const uint256aIlpZ0a = await BACMARSLPTOKENPoolVxfAbRC.notifyRewardAmount.call(uinttLADc4i, {from: accounts[2]});
		const uint256tm9Vqxp = await BACMARSLPTOKENPoolVxfAbRC.stake.call(uintzGhUiJ9, {from: accounts[3]});
		await BACMARSLPTOKENPoolVxfAbRC.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKACj8sb = accounts[4]
		const addressLzRCFbk = accounts[1]
		const addressx5webNl = accounts[0]
		const BACMARSLPTOKENPoolfe10iXi = await BACMARSLPTOKENPool.new(addressKACj8sb, addressLzRCFbk, addressx5webNl, {from: accounts[2]});
		const uinte5LzGM7 = BigInt("17")
		const addressfz69olD = accounts[5]
		const address2xgZy0 = accounts[0]
		await BACMARSLPTOKENPoolfe10iXi.getReward.call({from: accounts[2]});
		const uint256vPCQIzk = await BACMARSLPTOKENPoolfe10iXi.totalSupply.call({from: accounts[4]});
		const uint256WQ9BBtZ = await BACMARSLPTOKENPoolfe10iXi.stake.call(uinte5LzGM7, {from: accounts[3]});
		const uint256zplW4ul = await BACMARSLPTOKENPoolfe10iXi.earned.call(addressfz69olD, {from: accounts[1]});
		const uint256snrrlb = await BACMARSLPTOKENPoolfe10iXi.getRewardForDuration.call({from: accounts[1]});
		const uint256ehIvv1r = await BACMARSLPTOKENPoolfe10iXi.earned.call(address2xgZy0, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolfe10iXi.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLTi5Pjj = "Nz1EgkkkeDgsOrBJSDPKLkR1biUpwFM4uKqLqmqEkRvXkdTiy5MB2eIIlMiP7Lt5uNnUPv"
		const stringXUucM7s = "2PSc6EM9IJ41h"
		const uintX2szp58 = BigInt("63")
		const BACMARSLPTOKENPoolUG4pHAA = await BACMARSLPTOKENPool.new(stringLTi5Pjj, stringXUucM7s, uintX2szp58, {from: accounts[1]});
		const addressm4njajR = accounts[0]
		const uintGrWO22s = BigInt("1812")
		const uint256KbmmZl = await BACMARSLPTOKENPoolUG4pHAA.balanceOf.call(addressm4njajR, {from: accounts[3]});
		const stringj1pgXW = await BACMARSLPTOKENPoolUG4pHAA.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256R77pCLC = await BACMARSLPTOKENPoolUG4pHAA.withdraw.call(uintGrWO22s, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const address1qQOzy = accounts[3]
		const addressZqBnBb = "0x0000000000000000000000000000000000000001"
		const addressxiSzy5J = accounts[5]
		const BACMARSLPTOKENPoolagbfkP5 = await BACMARSLPTOKENPool.new(address1qQOzy, addressZqBnBb, addressxiSzy5J, {from: accounts[0]});
		const uintORqTG39 = BigInt("1065")
		const uintxztFqF = BigInt("1856")
		const uint256DuaKN9M = await BACMARSLPTOKENPoolagbfkP5.withdraw.call(uintORqTG39, {from: accounts[0]});
		const uint256ZtFI2Rw = await BACMARSLPTOKENPoolagbfkP5.stake.call(uintxztFqF, {from: accounts[0]});
		await BACMARSLPTOKENPoolagbfkP5.onlyRewardsDistribution.call({from: accounts[5]});

		await expect(BACMARSLPTOKENPoolagbfkP5.withdraw.call(uintORqTG39, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressCfr2IPU = accounts[3]
		const addressaRcvL6n = "0x0000000000000000000000000000000000000001"
		const addressnnDnufH = accounts[5]
		const BACMARSLPTOKENPoolagbfkP5 = await BACMARSLPTOKENPool.new(addressCfr2IPU, addressaRcvL6n, addressnnDnufH, {from: accounts[0]});
		const address8OR9SW = accounts[4]
		const uintahmwyVZ = BigInt("1065")
		const uintJPXqo6Y = BigInt("535")
		const uint256aVTYEh4 = await BACMARSLPTOKENPoolagbfkP5.balanceOf.call(address8OR9SW, {from: accounts[0]});
		const uint256DuaKN9M = await BACMARSLPTOKENPoolagbfkP5.withdraw.call(uintahmwyVZ, {from: accounts[0]});
		const uint256ZtFI2Rw = await BACMARSLPTOKENPoolagbfkP5.stake.call(uintJPXqo6Y, {from: accounts[0]});
		await BACMARSLPTOKENPoolagbfkP5.onlyRewardsDistribution.call({from: accounts[5]});

		assert.equal(uint256aVTYEh4, BigInt("0"))
		await expect(BACMARSLPTOKENPoolagbfkP5.withdraw.call(uintahmwyVZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressBZ7KYfc = accounts[4]
		const addressbe1Qwwt = accounts[1]
		const addressWQLQtZ6 = accounts[0]
		const BACMARSLPTOKENPoolfe10iXi = await BACMARSLPTOKENPool.new(addressBZ7KYfc, addressbe1Qwwt, addressWQLQtZ6, {from: accounts[2]});
		const byteam2Nu3C = "0x180713161509060206071f1c0f0d0d031b0e1a151c0e0c06181114031d1a1a11"
		const byteBMHjTio = "0x0b0f190d190c1d0203041a0f0c1e141101151c0a09161a151d161f0e061a1c1c"
		const uintbTu0hxm = BigInt("121")
		const uintJ2Vfsxy = BigInt("1406")
		const uintxYztxIw = BigInt("1873")
		const uintkKK80qj = BigInt("17")
		const addressFIj6kGv = accounts[5]
		const addressm4lbBqa = accounts[0]
		const uint256hltpzhf = await BACMARSLPTOKENPoolfe10iXi.stakeWithPermit.call(uintxYztxIw, uintJ2Vfsxy, uintbTu0hxm, byteBMHjTio, byteam2Nu3C, {from: accounts[0]});
		await BACMARSLPTOKENPoolfe10iXi.getReward.call({from: accounts[2]});
		const uint256vPCQIzk = await BACMARSLPTOKENPoolfe10iXi.totalSupply.call({from: accounts[4]});
		const uint256WQ9BBtZ = await BACMARSLPTOKENPoolfe10iXi.stake.call(uintkKK80qj, {from: accounts[3]});
		const uint256zplW4ul = await BACMARSLPTOKENPoolfe10iXi.earned.call(addressFIj6kGv, {from: accounts[1]});
		const uint256snrrlb = await BACMARSLPTOKENPoolfe10iXi.getRewardForDuration.call({from: accounts[1]});
		const uint256ehIvv1r = await BACMARSLPTOKENPoolfe10iXi.earned.call(addressm4lbBqa, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolfe10iXi.stakeWithPermit.call(uintxYztxIw, uintJ2Vfsxy, uintbTu0hxm, byteBMHjTio, byteam2Nu3C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtWjYy0 = "c692vSsqJLJziN5c638xOwTC4ykphLaxFiY5iNvTAQKRZ7lfuXNyHkIMjfXud"
		const stringGmU9jmT = "43schxusDc187HDHirQW9UKfl"
		const uintCqzHAyx = BigInt("212")
		const BACMARSLPTOKENPoolEbMibqr = await BACMARSLPTOKENPool.new(stringtWjYy0, stringGmU9jmT, uintCqzHAyx, {from: accounts[2]});
		const addresss1eHhzY = accounts[2]
		const uintkgvl19L = BigInt("608")
		const uint256GTKsyh = await BACMARSLPTOKENPoolEbMibqr.balanceOf.call(addresss1eHhzY, {from: accounts[2]});
		const uint256QAPVCXH = await BACMARSLPTOKENPoolEbMibqr.totalSupply.call({from: accounts[3]});
		const uint256RzmoQvQ = await BACMARSLPTOKENPoolEbMibqr.notifyRewardAmount.call(uintkgvl19L, {from: accounts[1]});
		const uint8Wpvsbr5 = await BACMARSLPTOKENPoolEbMibqr.decimals.call({from: accounts[2]});
		const uint8odx5aP = await BACMARSLPTOKENPoolEbMibqr.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNybpLYL = "8H2b1WStSCR4J9ftq3RRKa3cYqc9hco68lXyySWBmWRnrVXxYWxVXnXg6BmHmXxB"
		const stringc2ctYvB = "bwee8JL17xMQDRskFvHX7rIoynhORcHnsfaxxacvzB"
		const uinttATLVUy = BigInt("141")
		const BACMARSLPTOKENPooltvcRaQq = await BACMARSLPTOKENPool.new(stringNybpLYL, stringc2ctYvB, uinttATLVUy, {from: accounts[2]});
		const addressHjjUVXj = accounts[3]
		const byteEVjQnTt = "0x1b0e150811031d1a02160b030a141c1a021e031f0e16190717091702121d170d"
		const bytexZrTWMN = "0x170813060a1714010411071f20081314111902011d061c0f1b0e161d03141c0e"
		const uintHT5DVx = BigInt("77")
		const uinthtDSD6p = BigInt("602")
		const uint8T2yaz = BigInt("116")
		await BACMARSLPTOKENPooltvcRaQq.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qC6kbhC = await BACMARSLPTOKENPooltvcRaQq.earned.call(addressHjjUVXj, {from: accounts[0]});
		const uint256JK9JgZ6 = await BACMARSLPTOKENPooltvcRaQq.stakeWithPermit.call(uint8T2yaz, uinthtDSD6p, uintHT5DVx, bytexZrTWMN, byteEVjQnTt, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoCb8tHv = "kYXk3t86jT6s12nbyO8mKsE5JZ1JsjdVPPzhS2VCehVsBiKONlFI5xAnsNIHyj67y4YPWQwLBM2nW"
		const stringIK9gRhN = "zAZlkkNDOmCsobkescxI1AMwkGUGzEa4u4CydHfZMawrm9lQ1zb5iw1OafyoGeYel1FaOhDx1Co9ry29S8gO99gAnUGpkOQ"
		const uinty8Izlt8 = BigInt("19")
		const BACMARSLPTOKENPoolR34U1ZK = await BACMARSLPTOKENPool.new(stringoCb8tHv, stringIK9gRhN, uinty8Izlt8, {from: accounts[2]});
		const uinte1ZiT0 = BigInt("1487")
		const uint256FM0s6eE = await BACMARSLPTOKENPoolR34U1ZK.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256k0sZvrj = await BACMARSLPTOKENPoolR34U1ZK.notifyRewardAmount.call(uinte1ZiT0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256HI7I5i5 = await BACMARSLPTOKENPoolR34U1ZK.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPoolR34U1ZK.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressH4HBy9R = accounts[4]
		const addressdrJsTRb = accounts[1]
		const addresssUhFptg = accounts[0]
		const BACMARSLPTOKENPoolfe10iXi = await BACMARSLPTOKENPool.new(addressH4HBy9R, addressdrJsTRb, addresssUhFptg, {from: accounts[2]});
		const addresseAjMCoV = accounts[5]
		const addressXgkrw3y = accounts[0]
		await BACMARSLPTOKENPoolfe10iXi.getReward.call({from: accounts[2]});
		const uint256R8UHZ5e = await BACMARSLPTOKENPoolfe10iXi.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qZs59zQ = await BACMARSLPTOKENPoolfe10iXi.rewardPerToken.call({from: accounts[4]});
		const uint256zplW4ul = await BACMARSLPTOKENPoolfe10iXi.earned.call(addresseAjMCoV, {from: accounts[1]});
		const uint256snrrlb = await BACMARSLPTOKENPoolfe10iXi.getRewardForDuration.call({from: accounts[1]});
		const uint256ehIvv1r = await BACMARSLPTOKENPoolfe10iXi.earned.call(addressXgkrw3y, {from: accounts[1]});
		const uint256Oda6C9U = await BACMARSLPTOKENPoolfe10iXi.rewardPerToken.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolfe10iXi.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string15DYbM = "NEBUVxjnL3x6KYklwoBBWR8auPaDrAO79UsMJQXlNqv6uzX3QodqfUNe4vsJcE"
		const stringZeOV6B2 = "PGky3whG5rFNc8YONWHfkRVUqS7gYVdmY7rqHwyMurPj4HyglyyQzSiCLOlwygL0DnU"
		const uintHPtwmqi = BigInt("229")
		const BACMARSLPTOKENPoolj00XP7Q = await BACMARSLPTOKENPool.new(string15DYbM, stringZeOV6B2, uintHPtwmqi, {from: accounts[3]});
		const addressp1lPXGS = accounts[1]
		const byteehC1UTT = "0x08031b1d1f060a1213020601050a191e050d1f1416120f061c071d1c1a20150f"
		const byteOEgMxDA = "0x11080f031e09150a15202016110d001104061403190111110613191e05061411"
		const uintaWz3gum = BigInt("82")
		const uintf2iNmAU = BigInt("1920")
		const uintbQkvWG = BigInt("1571")
		const uintOL1DrC = BigInt("1998")
		const stringEjDcUjw = await BACMARSLPTOKENPoolj00XP7Q.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256awCvEwu = await BACMARSLPTOKENPoolj00XP7Q.earned.call(addressp1lPXGS, {from: accounts[3]});
		const uint256OTcaveJ = await BACMARSLPTOKENPoolj00XP7Q.stakeWithPermit.call(uintbQkvWG, uintf2iNmAU, uintaWz3gum, byteOEgMxDA, byteehC1UTT, {from: accounts[4]});
		const uint256EmeTexf = await BACMARSLPTOKENPoolj00XP7Q.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256dezsJhZ = await BACMARSLPTOKENPoolj00XP7Q.stake.call(uintOL1DrC, {from: accounts[5]});
		const uint256iOsKhwf = await BACMARSLPTOKENPoolj00XP7Q.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressrL3SvGg = accounts[4]
		const addressCXA6sLq = accounts[1]
		const addressF5G49DI = accounts[0]
		const BACMARSLPTOKENPoolfe10iXi = await BACMARSLPTOKENPool.new(addressrL3SvGg, addressCXA6sLq, addressF5G49DI, {from: accounts[2]});
		const uintbh7gI43 = BigInt("1560")
		const uintNxYqv8z = BigInt("17")
		const addressLv3wzq7 = accounts[0]
		const addressPkjFQMm = accounts[2]
		await BACMARSLPTOKENPoolfe10iXi.getReward.call({from: accounts[2]});
		const uint256IjfwAL6 = await BACMARSLPTOKENPoolfe10iXi.notifyRewardAmount.call(uintbh7gI43, {from: accounts[4]});
		const uint256WQ9BBtZ = await BACMARSLPTOKENPoolfe10iXi.stake.call(uintNxYqv8z, {from: accounts[3]});
		const uint256qZs59zQ = await BACMARSLPTOKENPoolfe10iXi.rewardPerToken.call({from: accounts[4]});
		const uint256snrrlb = await BACMARSLPTOKENPoolfe10iXi.getRewardForDuration.call({from: accounts[1]});
		const uint256NHX3umg = await BACMARSLPTOKENPoolfe10iXi.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256ehIvv1r = await BACMARSLPTOKENPoolfe10iXi.earned.call(addressLv3wzq7, {from: accounts[1]});
		const uint256nDTI3y = await BACMARSLPTOKENPoolfe10iXi.balanceOf.call(addressPkjFQMm, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolfe10iXi.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressfipeaDJ = "0x0000000000000000000000000000000000000001"
		const addressfcO13wx = accounts[4]
		const addressRunJavP = accounts[0]
		const BACMARSLPTOKENPoolw5YK0Sl = await BACMARSLPTOKENPool.new(addressfipeaDJ, addressfcO13wx, addressRunJavP, {from: accounts[2]});
		const addressUJ8gl2O = accounts[0]
		const uint256Q8m5Vya = await BACMARSLPTOKENPoolw5YK0Sl.totalSupply.call({from: accounts[0]});
		const uint256f2DoRLh = await BACMARSLPTOKENPoolw5YK0Sl.earned.call(addressUJ8gl2O, {from: accounts[2]});
		const uint256gJPVdAi = await BACMARSLPTOKENPoolw5YK0Sl.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPoolw5YK0Sl.exit.call({from: accounts[5]});
		const uint256bs0TIk = await BACMARSLPTOKENPoolw5YK0Sl.totalSupply.call({from: accounts[1]});

		assert.equal(uint256Q8m5Vya, BigInt("0"))
		assert.equal(uint256f2DoRLh, BigInt("0"))
		assert.equal(uint256gJPVdAi, BigInt("0"))
		await expect(BACMARSLPTOKENPoolw5YK0Sl.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressBk7Rfat = accounts[4]
		const addressJNeovva = accounts[1]
		const addressdE37XYc = accounts[0]
		const BACMARSLPTOKENPoolfe10iXi = await BACMARSLPTOKENPool.new(addressBk7Rfat, addressJNeovva, addressdE37XYc, {from: accounts[2]});
		const uintDr4Eos = BigInt("2019")
		const uintH1Cwpn = BigInt("17")
		const addresssrpQigD = accounts[5]
		const addressxNTu5tw = accounts[0]
		const uint256hAuvsBw = await BACMARSLPTOKENPoolfe10iXi.notifyRewardAmount.call(uintDr4Eos, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolfe10iXi.getReward.call({from: accounts[2]});
		const uint256WQ9BBtZ = await BACMARSLPTOKENPoolfe10iXi.stake.call(uintH1Cwpn, {from: accounts[3]});
		const uint256R8UHZ5e = await BACMARSLPTOKENPoolfe10iXi.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qZs59zQ = await BACMARSLPTOKENPoolfe10iXi.rewardPerToken.call({from: accounts[4]});
		const uint256zplW4ul = await BACMARSLPTOKENPoolfe10iXi.earned.call(addresssrpQigD, {from: accounts[1]});
		const uint256snrrlb = await BACMARSLPTOKENPoolfe10iXi.getRewardForDuration.call({from: accounts[1]});
		const uint256ehIvv1r = await BACMARSLPTOKENPoolfe10iXi.earned.call(addressxNTu5tw, {from: accounts[1]});
		const uint256Oda6C9U = await BACMARSLPTOKENPoolfe10iXi.rewardPerToken.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolfe10iXi.notifyRewardAmount.call(uintDr4Eos, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJOwXLt4 = "kMAHvRn5E2WRVBe2aHcUMqDP9inluM0Q9zySJbFKWnYnbuA1E3"
		const stringU9JUaZf = "uIwXAjfSUXNuKhLkfS7FX6eSoGSdRE550Wa6KF2ZCaDtL"
		const uinto3cKls4 = BigInt("144")
		const BACMARSLPTOKENPoolC9pHKw = await BACMARSLPTOKENPool.new(stringJOwXLt4, stringU9JUaZf, uinto3cKls4, {from: accounts[2]});
		const addresst1ODIv8 = accounts[4]
		const uint256ixLJaYf = await BACMARSLPTOKENPoolC9pHKw.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolC9pHKw.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256s884gLJ = await BACMARSLPTOKENPoolC9pHKw.balanceOf.call(addresst1ODIv8, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringslJwCba = "QRAVESev8cpzQzew0QrauwboYwRUkbLqGngdOQolcidEAlgVOPTrdNDitq0ZYUdzNsnQojZE460qvuvthd8iJlp2voqU5"
		const stringFcfynUo = "mK2Ow7cMltoaoE"
		const uintHExLV52 = BigInt("149")
		const BACMARSLPTOKENPoolHilgx1W = await BACMARSLPTOKENPool.new(stringslJwCba, stringFcfynUo, uintHExLV52, {from: accounts[0]});
		const addressBEx3SNE = accounts[2]
		await BACMARSLPTOKENPoolHilgx1W.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256nbZDx1X = await BACMARSLPTOKENPoolHilgx1W.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256UxpdMpS = await BACMARSLPTOKENPoolHilgx1W.earned.call(addressBEx3SNE, {from: accounts[1]});
		const uint256YiFiJ8v = await BACMARSLPTOKENPoolHilgx1W.getRewardForDuration.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCBF8CkZ = "S"
		const stringEY7b9GQ = "OHwoRQ7aFgN53MIWQ9ijJJnqpatBARcCmdVvtbgzUr3Uc9rT8LEeQ7Mpom40taT8Iq8WIG"
		const uinta3ZYUaL = BigInt("233")
		const BACMARSLPTOKENPoold3dy3cm = await BACMARSLPTOKENPool.new(stringCBF8CkZ, stringEY7b9GQ, uinta3ZYUaL, {from: accounts[2]});
		const uintPPSqJs9 = BigInt("530")
		const byteQTwohA9 = "0x1115090f0417140e13080002041a101311041c13050c061c041f121c19031911"
		const byteqcV38wu = "0x061d081410190a0e140e1212141d090912051607061a191f0c1c1100051c0e10"
		const uintQOC4cX5 = BigInt("68")
		const uintNguVE95 = BigInt("763")
		const uintyrZaAsH = BigInt("421")
		const uint8LtwV8Y = await BACMARSLPTOKENPoold3dy3cm.decimals.call({from: accounts[2]});
		const uint256dUe5dIf = await BACMARSLPTOKENPoold3dy3cm.notifyRewardAmount.call(uintPPSqJs9, {from: accounts[5]});
		await BACMARSLPTOKENPoold3dy3cm.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256N6YP23t = await BACMARSLPTOKENPoold3dy3cm.stakeWithPermit.call(uintyrZaAsH, uintNguVE95, uintQOC4cX5, byteqcV38wu, byteQTwohA9, {from: accounts[4]});
		const stringPT3epNM = await BACMARSLPTOKENPoold3dy3cm.name.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringzhURrXO = "HYXLUK7wlt4qVamInOPBW79hU51DWovHkoMfpYRc5xbqVSluEkber5Mw0AWlPnop2ExvvBsI"
		const stringwfGAYK1 = "ZuV3n4xeHEDeQW2wp4B"
		const uintLL1g3W = BigInt("173")
		const BACMARSLPTOKENPoolTko5uxB = await BACMARSLPTOKENPool.new(stringzhURrXO, stringwfGAYK1, uintLL1g3W, {from: accounts[2]});
		const uint256ExPujj3 = await BACMARSLPTOKENPoolTko5uxB.rewardPerToken.call({from: accounts[0]});
		await BACMARSLPTOKENPoolTko5uxB.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNrqj72l = "yxu3jrlSmf5EDouBnv6MvlfVOEDP9Dp51qLB7Wf0OCKMuSSDCHKwQoyHmhnv9"
		const stringcYVgJUp = "6VM0a7nJdebMYL50LEL3MTnGXI5bjOkRsffxtl6PZpW5xi2BV6Af80xvHmftCfWR"
		const uinte6bjjTT = BigInt("225")
		const BACMARSLPTOKENPooli9VZZbX = await BACMARSLPTOKENPool.new(stringNrqj72l, stringcYVgJUp, uinte6bjjTT, {from: accounts[1]});
		const addressL1vUFB8 = accounts[4]
		const uintic3IpkM = BigInt("2008")
		const uint256yEXK7Vg = await BACMARSLPTOKENPooli9VZZbX.earned.call(addressL1vUFB8, {from: accounts[1]});
		const stringrMwFNGX = await BACMARSLPTOKENPooli9VZZbX.name.call({from: accounts[2]});
		const uint256SYTdhc2 = await BACMARSLPTOKENPooli9VZZbX.totalSupply.call({from: accounts[2]});
		const uint256y4Ezm9h = await BACMARSLPTOKENPooli9VZZbX.notifyRewardAmount.call(uintic3IpkM, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringzcwZilL = "l7QwMuXvtegHvU6a"
		const stringtiqdoau = "gFah852sa"
		const uinthJBlWn0 = BigInt("169")
		const BACMARSLPTOKENPooljTMNmpo = await BACMARSLPTOKENPool.new(stringzcwZilL, stringtiqdoau, uinthJBlWn0, {from: accounts[1]});
		const addressT7RrP3 = accounts[3]
		const addresscEvCGzV = "0x0000000000000000000000000000000000000001"
		const uint256AB3j2YX = await BACMARSLPTOKENPooljTMNmpo.balanceOf.call(addressT7RrP3, {from: "0x0000000000000000000000000000000000000001"});
		const uint8oK1tEkq = await BACMARSLPTOKENPooljTMNmpo.decimals.call({from: accounts[0]});
		const uint256dwn8hXh = await BACMARSLPTOKENPooljTMNmpo.balanceOf.call(addresscEvCGzV, {from: accounts[5]});
		await BACMARSLPTOKENPooljTMNmpo.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnsLbNoT = "fz1N6tflbr2lrYluOoOtn6toEWzkc9uRVqTpPxYbhKObyIf3rRnnHUtjB9Q2XOnvMv"
		const stringcizeO8 = "c1KAi9dKL3sZie6cTTWv61qAkirGmt1NhG9tJ3yaMKSX42xmyan1qjN658n6gHhbvGtgKL8ZbhmhpQki4w43lGL28h"
		const uintEvF5xbA = BigInt("16")
		const BACMARSLPTOKENPool3LwwLZ = await BACMARSLPTOKENPool.new(stringnsLbNoT, stringcizeO8, uintEvF5xbA, {from: accounts[3]});
		const uintyGK1pVZ = BigInt("1095")
		const uintVZOVE0d = BigInt("1467")
		const uint256FyeQOrb = await BACMARSLPTOKENPool3LwwLZ.notifyRewardAmount.call(uintyGK1pVZ, {from: accounts[4]});
		const uint256fMYmLCS = await BACMARSLPTOKENPool3LwwLZ.stake.call(uintVZOVE0d, {from: accounts[3]});
		const stringfSXDmpG = await BACMARSLPTOKENPool3LwwLZ.symbol.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEdpsxmf = "AhmHNEuJapSyOimKT2Pt0Abpxd1MKcUuAxJqOaa1GU6x5M7GiGgjacVa"
		const stringga7moVD = "uUTEumyhSxporA6OxmJkN"
		const uintUly7k5W = BigInt("134")
		const BACMARSLPTOKENPoolbgNdGjs = await BACMARSLPTOKENPool.new(stringEdpsxmf, stringga7moVD, uintUly7k5W, {from: accounts[3]});
		await BACMARSLPTOKENPoolbgNdGjs.getReward.call({from: accounts[0]});
		const uint256YQogmG = await BACMARSLPTOKENPoolbgNdGjs.rewardPerToken.call({from: accounts[2]});
		const uint256HYuxRki = await BACMARSLPTOKENPoolbgNdGjs.totalSupply.call({from: accounts[4]});
		const uint256ComG924 = await BACMARSLPTOKENPoolbgNdGjs.getRewardForDuration.call({from: accounts[0]});
		const uint256YsPPs3d = await BACMARSLPTOKENPoolbgNdGjs.getRewardForDuration.call({from: accounts[4]});
		const uint256oK79vDD = await BACMARSLPTOKENPoolbgNdGjs.rewardPerToken.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringolKNKro = "KHGC6zATEuxrNCLZzOytOIL375I6kPbNc2sWqgFNyp"
		const stringLszJzEF = "pmMz4TS8WXwYM2eggkAKEzTkGlL5jb4DSZ49eG5WCddvfVHXUFxnhGgrBw4Gb4mrzl6QWvm4hzB2pqqnA6"
		const uintRrVYZld = BigInt("130")
		const BACMARSLPTOKENPoolBG4ZAg4 = await BACMARSLPTOKENPool.new(stringolKNKro, stringLszJzEF, uintRrVYZld, {from: accounts[0]});
		const uintNNaygZ1 = BigInt("70")
		const uintOUYUPuz = BigInt("570")
		const uinteYhQUdu = BigInt("1371")
		const uint256lXXbp6s = await BACMARSLPTOKENPoolBG4ZAg4.notifyRewardAmount.call(uintNNaygZ1, {from: accounts[0]});
		const uint256f0OUaEI = await BACMARSLPTOKENPoolBG4ZAg4.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256BYCOejT = await BACMARSLPTOKENPoolBG4ZAg4.getRewardForDuration.call({from: accounts[3]});
		const uint256zL53V0J = await BACMARSLPTOKENPoolBG4ZAg4.notifyRewardAmount.call(uintOUYUPuz, {from: accounts[4]});
		const uint256tzWhjVb = await BACMARSLPTOKENPoolBG4ZAg4.notifyRewardAmount.call(uinteYhQUdu, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMlnNaAW = "16xmtejag4nsdcw3NvjoBtcJ4aMLnpsnmGooif6IeMyppEKlhkpgtPDn5sn5pmyxNQbjJJOIlxa"
		const stringm3zy4Ov = "sQckeo3rwGjyiN4K1ubHehxISfpfEEqyTZDUQI"
		const uinteOTdVE7 = BigInt("197")
		const BACMARSLPTOKENPoolYnDkA1w = await BACMARSLPTOKENPool.new(stringMlnNaAW, stringm3zy4Ov, uinteOTdVE7, {from: accounts[0]});
		const bytegP35kMH = "0x04111f1f1e051b08121f0b10010e1a130d010d1d151d06081b12170316150813"
		const byteAO5imqc = "0x05171a11040302200a070f0f0717021e1c1d080918131b160b02110d171e0f18"
		const uintUYtEhUp = BigInt("35")
		const uintDlZUN29 = BigInt("1374")
		const uintj66Gu2O = BigInt("386")
		await BACMARSLPTOKENPoolYnDkA1w.getReward.call({from: accounts[0]});
		const uint256HaygV88 = await BACMARSLPTOKENPoolYnDkA1w.totalSupply.call({from: accounts[1]});
		const uint256PnwfmsQ = await BACMARSLPTOKENPoolYnDkA1w.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolYnDkA1w.nonReentrant.call({from: accounts[1]});
		const uint2562z39QS = await BACMARSLPTOKENPoolYnDkA1w.stakeWithPermit.call(uintj66Gu2O, uintDlZUN29, uintUYtEhUp, byteAO5imqc, bytegP35kMH, {from: accounts[3]});
		await BACMARSLPTOKENPoolYnDkA1w.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string19X5ge = "Lyp2lU6M7aHLDAaDPtDRxg4RDcA05bFkXlQGFLpwiQXmQa3EYIHKcPERObPd19830ggJ7hDJgcdm"
		const stringMF5NTbj = "sp3SQNChJATHjQFWmNLKpfRo8e92kXRpiwtI1hq8D6Qe6j7"
		const uintZm6d5qv = BigInt("245")
		const BACMARSLPTOKENPoolZVYA10c = await BACMARSLPTOKENPool.new(string19X5ge, stringMF5NTbj, uintZm6d5qv, {from: accounts[0]});
		const addressMSjkLOi = accounts[1]
		const uintbCyUXd0 = BigInt("1661")
		const byteUMI1XQq = "0x051218031f0d041712191d20050305171701021c09000b15181f131b0b091115"
		const byteEtIbRee = "0x0b140a1d0a161512050d131c0f08010e1109191209090c020e080e0405160a11"
		const uintdHTaRxo = BigInt("7")
		const uintJdnwACr = BigInt("319")
		const uintMHeJbeC = BigInt("1013")
		const uint256n1tFd6u = await BACMARSLPTOKENPoolZVYA10c.balanceOf.call(addressMSjkLOi, {from: accounts[0]});
		await BACMARSLPTOKENPoolZVYA10c.exit.call({from: accounts[0]});
		const uint256QmnFNX7 = await BACMARSLPTOKENPoolZVYA10c.notifyRewardAmount.call(uintbCyUXd0, {from: accounts[3]});
		const stringIRdSgqu = await BACMARSLPTOKENPoolZVYA10c.symbol.call({from: accounts[1]});
		const uint256jkobE8G = await BACMARSLPTOKENPoolZVYA10c.stakeWithPermit.call(uintMHeJbeC, uintJdnwACr, uintdHTaRxo, byteEtIbRee, byteUMI1XQq, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYKRXfTM = "WzBtjfkPWk4zQzEcWSEtQSnBUMqpO"
		const stringGTxWA9Z = "Ptk9MrsoMr0o0refc"
		const uintTrGtvd = BigInt("222")
		const BACMARSLPTOKENPoolVPXVNQj = await BACMARSLPTOKENPool.new(stringYKRXfTM, stringGTxWA9Z, uintTrGtvd, {from: accounts[0]});
		const uint256qHED60 = await BACMARSLPTOKENPoolVPXVNQj.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolVPXVNQj.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256OcdqmnB = await BACMARSLPTOKENPoolVPXVNQj.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256KKkL5b = await BACMARSLPTOKENPoolVPXVNQj.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQI9b2EE = "z0lHJmmkCHFvaigini2jCqj7tNqRtvTTWsV6PuDCb8YzSY6WwkueG3eppV3EGEk26GYh3lWCbXuFp4v5z69bEn3t"
		const stringYqP8Olc = "NML8BJLdi"
		const uintMLSH6yc = BigInt("12")
		const BACMARSLPTOKENPooly0WRJ63 = await BACMARSLPTOKENPool.new(stringQI9b2EE, stringYqP8Olc, uintMLSH6yc, {from: accounts[0]});
		const uint256M8P5xRe = await BACMARSLPTOKENPooly0WRJ63.totalSupply.call({from: accounts[4]});
		const uint256BcBqh3k = await BACMARSLPTOKENPooly0WRJ63.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ifguKMl = await BACMARSLPTOKENPooly0WRJ63.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKsKxhr = accounts[4]
		const addressw3onRit = accounts[1]
		const addressvidbvEE = accounts[0]
		const BACMARSLPTOKENPoolfe10iXi = await BACMARSLPTOKENPool.new(addressKsKxhr, addressw3onRit, addressvidbvEE, {from: accounts[2]});
		const uintsmFhhrG = BigInt("0")
		const addressM0UUGH4 = accounts[5]
		const addressfU1vDTi = accounts[0]
		const uint256zzm2Khq = await BACMARSLPTOKENPoolfe10iXi.lastTimeRewardApplicable.call({from: accounts[5]});
		await BACMARSLPTOKENPoolfe10iXi.getReward.call({from: accounts[2]});
		const uint256WQ9BBtZ = await BACMARSLPTOKENPoolfe10iXi.stake.call(uintsmFhhrG, {from: accounts[3]});
		const uint256qZs59zQ = await BACMARSLPTOKENPoolfe10iXi.rewardPerToken.call({from: accounts[4]});
		const uint256zplW4ul = await BACMARSLPTOKENPoolfe10iXi.earned.call(addressM0UUGH4, {from: accounts[1]});
		const stringVgDqOgN = await BACMARSLPTOKENPoolfe10iXi.name.call({from: accounts[2]});
		const uint256snrrlb = await BACMARSLPTOKENPoolfe10iXi.getRewardForDuration.call({from: accounts[1]});
		const uint256ehIvv1r = await BACMARSLPTOKENPoolfe10iXi.earned.call(addressfU1vDTi, {from: accounts[1]});

		assert.equal(uint256zzm2Khq, BigInt("0"))
		await expect(BACMARSLPTOKENPoolfe10iXi.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLFvHBnF = "LQZXiZVV62hEVLTVhHGuVIidnpAu80ZMHJKQXGMSwKXnb0KAMMpGj8DRPvBBN6Qj211TmOyJGkgcF"
		const stringdYR6Tzb = "13iAxQVnxWGsa5IDIBZMhZHjouMfT83t7eiboTBs4KSxWwki94oBd6HA2d9jIAmHzJorItHDfg2zF2jg"
		const uintt72L6kU = BigInt("234")
		const BACMARSLPTOKENPoolPB5jj8Y = await BACMARSLPTOKENPool.new(stringLFvHBnF, stringdYR6Tzb, uintt72L6kU, {from: accounts[1]});
		const byteXDWABWf = "0x080b1c180d08121419131d0305001d05041f19060e121b17131d1d15091a0716"
		const byteqczgpIb = "0x1d001f13191a1e0312020410040e09190b160c0214020d101419100b06051016"
		const uintYPQEMja = BigInt("101")
		const uintfHIYdIf = BigInt("1754")
		const uintbZX1JPS = BigInt("1200")
		const addressCBckzMS = "0x0000000000000000000000000000000000000001"
		const uintrDtSBvq = BigInt("1478")
		const bytefmXalUp = "0x1611051a090c12170a111501021e06060d040b0e0406091903050911051d0f03"
		const bytewNXztu = "0x1f0404010e1d1902070d07160d1a151f111a04170e080a0212141c040b1b1004"
		const uintmb3WpHd = BigInt("28")
		const uintZBpg8W9 = BigInt("1644")
		const uintmyLtviU = BigInt("1343")
		const uint256QHVxjDJ = await BACMARSLPTOKENPoolPB5jj8Y.stakeWithPermit.call(uintbZX1JPS, uintfHIYdIf, uintYPQEMja, byteqczgpIb, byteXDWABWf, {from: accounts[3]});
		await BACMARSLPTOKENPoolPB5jj8Y.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256NbNZS54 = await BACMARSLPTOKENPoolPB5jj8Y.balanceOf.call(addressCBckzMS, {from: accounts[0]});
		const uint256zW4sxj = await BACMARSLPTOKENPoolPB5jj8Y.withdraw.call(uintrDtSBvq, {from: accounts[1]});
		const uint256M4QKW2l = await BACMARSLPTOKENPoolPB5jj8Y.stakeWithPermit.call(uintmyLtviU, uintZBpg8W9, uintmb3WpHd, bytewNXztu, bytefmXalUp, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringk3ZHo70 = "DLox9t"
		const stringfVR8s6q = "JwTyS5NPOs8VVwmFIBgFqe"
		const uintzXS1bEW = BigInt("225")
		const BACMARSLPTOKENPoolLZBp5eN = await BACMARSLPTOKENPool.new(stringk3ZHo70, stringfVR8s6q, uintzXS1bEW, {from: accounts[2]});
		const uintm0YS2UF = BigInt("763")
		const byteLtiS2nX = "0x030d101b0a0d1e0f0d0f080f0606131e0b04120b020b0e0f16171713061e161c"
		const bytejHQRZxt = "0x0301120b08100c1b0f0f1e071b171703020c0005141702031209140300100505"
		const uintU4N38sR = BigInt("34")
		const uintICbBTcY = BigInt("1969")
		const uintXBtsMRZ = BigInt("1172")
		const uint256wV9K5JC = await BACMARSLPTOKENPoolLZBp5eN.withdraw.call(uintm0YS2UF, {from: accounts[4]});
		const uint256ZyiZ0BT = await BACMARSLPTOKENPoolLZBp5eN.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256RLMClU4 = await BACMARSLPTOKENPoolLZBp5eN.stakeWithPermit.call(uintXBtsMRZ, uintICbBTcY, uintU4N38sR, bytejHQRZxt, byteLtiS2nX, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZuBVx1V = "DI9acT6k7JrQVLklcE"
		const stringkcOPREm = "Xf"
		const uintQrbQ5P = BigInt("3")
		const BACMARSLPTOKENPoolKXEurcb = await BACMARSLPTOKENPool.new(stringZuBVx1V, stringkcOPREm, uintQrbQ5P, {from: accounts[4]});
		const uintbb1FSOg = BigInt("305")
		const uint256JkNLqq = await BACMARSLPTOKENPoolKXEurcb.stake.call(uintbb1FSOg, {from: accounts[0]});
		const stringLdkeMVk = await BACMARSLPTOKENPoolKXEurcb.name.call({from: accounts[0]});
		const uint256srwT6Wc = await BACMARSLPTOKENPoolKXEurcb.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint8bKSTQjf = await BACMARSLPTOKENPoolKXEurcb.decimals.call({from: accounts[5]});
		await BACMARSLPTOKENPoolKXEurcb.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJpd7xXr = "lvoADLsxO9JInirsQXetdPa8oIOUCi1OVdWMOkKt3tk4ylTUVVxj3vIwI5"
		const stringrBwLNCO = "2p6gY50ucuF3yYTuhn4SoDeRE032l9kSNvG78PHyEvrBCcu"
		const uinthUz0RBA = BigInt("221")
		const BACMARSLPTOKENPoolOTqr4kz = await BACMARSLPTOKENPool.new(stringJpd7xXr, stringrBwLNCO, uinthUz0RBA, {from: accounts[3]});
		const addressa5X7RLY = accounts[5]
		const uint256t8eMhrp = await BACMARSLPTOKENPoolOTqr4kz.balanceOf.call(addressa5X7RLY, {from: accounts[1]});
		const uint256dzmO6Oq = await BACMARSLPTOKENPoolOTqr4kz.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256Ps4TsUw = await BACMARSLPTOKENPoolOTqr4kz.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256ITNASL = await BACMARSLPTOKENPoolOTqr4kz.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwhHanef = "giaqP4FKmMqiGzJePiWfH2WvkqNb8NocDjboEMPl8r7i0Z8aEALLlgjVOnlgQJExEXokisS3v7PsXDlMyWm"
		const stringZ25Mg1 = "RHxuSqXo37E6tSLDr3g8ElksZR8RHUJvPirL6tPjZTRCMiv5bl4Uwmm6fYEN6Rh2FP8"
		const uintjkmwSWt = BigInt("78")
		const BACMARSLPTOKENPoolQ4vj1fV = await BACMARSLPTOKENPool.new(stringwhHanef, stringZ25Mg1, uintjkmwSWt, {from: accounts[5]});
		const uintTyk7oPb = BigInt("1553")
		const uint256nO7as7N = await BACMARSLPTOKENPoolQ4vj1fV.stake.call(uintTyk7oPb, {from: accounts[4]});
		const stringDUBdYm = await BACMARSLPTOKENPoolQ4vj1fV.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeMiWtmd = "0Btep3mK3XHJ1c6AfgbnhI84iBcbLmIf27W"
		const stringAtTYq9i = "QIA12pbda6JSChT181sFj1Uibh4VELJqwZq2AqVJbFp77gHg"
		const uintgf55sar = BigInt("94")
		const BACMARSLPTOKENPooloKarYtI = await BACMARSLPTOKENPool.new(stringeMiWtmd, stringAtTYq9i, uintgf55sar, {from: accounts[0]});
		const addresssIk6gkW = accounts[1]
		const address6qeUaE = "0x0000000000000000000000000000000000000001"
		const uint256OtBT5x = await BACMARSLPTOKENPooloKarYtI.balanceOf.call(addresssIk6gkW, {from: accounts[4]});
		const uint256C2nUgu0 = await BACMARSLPTOKENPooloKarYtI.balanceOf.call(address6qeUaE, {from: accounts[3]});
		await BACMARSLPTOKENPooloKarYtI.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmG6Nihw = "B5mNymWfgEzibSJ7meIbpkgCRD2g40QtmGBcATeDPe6XX4HJNeeyRFHeBz5GpjflXPnSZyMhVqsam6LPA8Lfhht19WI"
		const stringB2TxLtZ = "lxf1QP19D2n"
		const uintUOovo4o = BigInt("212")
		const BACMARSLPTOKENPoolxlEOJuc = await BACMARSLPTOKENPool.new(stringmG6Nihw, stringB2TxLtZ, uintUOovo4o, {from: accounts[3]});
		const byteepbG38a = "0x19081d031b040c1e1d101a1b0e150e0412090702181205110a08130a131f0809"
		const bytevp0YN2Q = "0x0c061903031e0713111618181e1815051e020d160c1f1112191e100815010c02"
		const uintubs52ee = BigInt("51")
		const uintAqgxoZy = BigInt("30")
		const uintq7D2kTz = BigInt("1817")
		await BACMARSLPTOKENPoolxlEOJuc.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolxlEOJuc.exit.call({from: accounts[5]});
		const uint256qcdEq32 = await BACMARSLPTOKENPoolxlEOJuc.stakeWithPermit.call(uintq7D2kTz, uintAqgxoZy, uintubs52ee, bytevp0YN2Q, byteepbG38a, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWV2Jtzv = "oOj7WNdpknCPH1OD3GKv2uavYoGUBv8PcbVZ5p2TT2UahFV6LxA"
		const stringJIsiMsr = "lHjfFILjbBzwoFI0SLv83av3LtZyh8l2fw915Y4L7VLzDbONMH9WnSv"
		const uintpVGX8oH = BigInt("115")
		const BACMARSLPTOKENPoolMMiZWi0 = await BACMARSLPTOKENPool.new(stringWV2Jtzv, stringJIsiMsr, uintpVGX8oH, {from: accounts[5]});
		const bytejAAv0PS = "0x0819110f04191b040e171c0e13030e1e0b1a001104170717141c081406190f19"
		const byteO0joqtO = "0x1b1b1b102001190911060e0c091b0a17151111131003000e17200e020903100b"
		const uintBsF8jjF = BigInt("233")
		const uintfkIe49Q = BigInt("1343")
		const uintURgJSnx = BigInt("1491")
		const byteEIYe2It = "0x0c180f120c070c13060714150217091311121601040f091c150b0e1801171c0c"
		const byteea3igY = "0x1d17050c04131f1b04180c010b1f180d1a0105070714171916041d1c1d190a05"
		const uintyQeKP33 = BigInt("184")
		const uintv4SGtY = BigInt("796")
		const uintW3nkbdv = BigInt("730")
		const uint256ddGTJSp = await BACMARSLPTOKENPoolMMiZWi0.stakeWithPermit.call(uintURgJSnx, uintfkIe49Q, uintBsF8jjF, byteO0joqtO, bytejAAv0PS, {from: accounts[0]});
		const uint256hRuR4Yd = await BACMARSLPTOKENPoolMMiZWi0.stakeWithPermit.call(uintW3nkbdv, uintv4SGtY, uintyQeKP33, byteea3igY, byteEIYe2It, {from: accounts[0]});
		await BACMARSLPTOKENPoolMMiZWi0.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnREufda = "wTxvwX5GrvIouXkdXQ99zEYui7VURMEtKO4b25hihTytqpkcRAcEvAD4jJWvrkCNLipXGRU9ylVugm2O6EMoNb2Fm"
		const stringreQtyyw = "437nOfWY4oJdz2kixbYKNeCDeiT73SP9JH9VVUsAaRyu5uMCU6fmYpjF7T4w6MO4FQAYdgI7S2y9tntoFw"
		const uintNAmtzJA = BigInt("88")
		const BACMARSLPTOKENPoolyco6jA = await BACMARSLPTOKENPool.new(stringnREufda, stringreQtyyw, uintNAmtzJA, {from: accounts[2]});
		const stringM1Plehs = await BACMARSLPTOKENPoolyco6jA.symbol.call({from: accounts[2]});
		await BACMARSLPTOKENPoolyco6jA.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMaK2L1h = "7eQO1ddf6pXTyBt6iJo1Re"
		const stringWaeWF6b = "i1Csx5fC3c7jskindTDvY3uxfojJYjhSnmANEYaSSUriW5Wcd8ng6rVDAwFiJlkqJvHbTQFY1bKcPtnw"
		const uintbAxhSEm = BigInt("249")
		const BACMARSLPTOKENPoolI8t768o = await BACMARSLPTOKENPool.new(stringMaK2L1h, stringWaeWF6b, uintbAxhSEm, {from: accounts[1]});
		const uintbghJVCs = BigInt("955")
		const uintbqaMSBL = BigInt("1576")
		const uinthuB2GQn = BigInt("1137")
		const uintBQ0pLNs = BigInt("1913")
		const uint256LGA3We = await BACMARSLPTOKENPoolI8t768o.withdraw.call(uintbghJVCs, {from: accounts[1]});
		const uint256twcCnOJ = await BACMARSLPTOKENPoolI8t768o.stake.call(uintbqaMSBL, {from: accounts[0]});
		const uint256VYveCB = await BACMARSLPTOKENPoolI8t768o.withdraw.call(uinthuB2GQn, {from: accounts[3]});
		const uint256PF8pahl = await BACMARSLPTOKENPoolI8t768o.notifyRewardAmount.call(uintBQ0pLNs, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZDlznQi = "PnO6VNiuGmrQ2FpKYBJSmD7EKPQqOquIgBvYlFIoUcrSFLOuo3QumHUpXXhsxKFCtaJ7AD5"
		const stringyuyV4hG = "KRblVuK27JHWctSAmsMO273RASZ5TgDzNRe9eP1CEEQpAjIJ0JGCJNeLEIH"
		const uinti861vvh = BigInt("158")
		const BACMARSLPTOKENPooleiJ9XMy = await BACMARSLPTOKENPool.new(stringZDlznQi, stringyuyV4hG, uinti861vvh, {from: accounts[3]});
		const uintADs12Tk = BigInt("1073")
		const addresspR5HhvY = accounts[5]
		const bytekW4nDVz = "0x12140d0f10191a14150b10070d16091905100f0a1e16171902090f051217041a"
		const byteZNCmVS6 = "0x0b0a1b081313071616130e0f1c1602180e0b151d0a0c10151e0b1014151f1a19"
		const uintkWWrtlA = BigInt("78")
		const uintddDj43t = BigInt("1214")
		const uintZJuEvj = BigInt("1289")
		const uintgghrac = BigInt("2019")
		await BACMARSLPTOKENPooleiJ9XMy.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256jAT9xD = await BACMARSLPTOKENPooleiJ9XMy.withdraw.call(uintADs12Tk, {from: accounts[1]});
		const uint256HEMMFWE = await BACMARSLPTOKENPooleiJ9XMy.balanceOf.call(addresspR5HhvY, {from: accounts[5]});
		const stringgmhtzmq = await BACMARSLPTOKENPooleiJ9XMy.name.call({from: accounts[0]});
		const uint256kVwUBOb = await BACMARSLPTOKENPooleiJ9XMy.stakeWithPermit.call(uintZJuEvj, uintddDj43t, uintkWWrtlA, byteZNCmVS6, bytekW4nDVz, {from: accounts[4]});
		const uint256xPe93ej = await BACMARSLPTOKENPooleiJ9XMy.withdraw.call(uintgghrac, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgVTBLWF = "lO5p"
		const stringul4Eyo1 = "33gbbg6PWPzcycf"
		const uintmAOcjHQ = BigInt("51")
		const BACMARSLPTOKENPoolNrVMY8x = await BACMARSLPTOKENPool.new(stringgVTBLWF, stringul4Eyo1, uintmAOcjHQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintVvzSx3u = BigInt("1976")
		const uint256VIe7KOX = await BACMARSLPTOKENPoolNrVMY8x.notifyRewardAmount.call(uintVvzSx3u, {from: accounts[3]});
		const stringhOxRHxT = await BACMARSLPTOKENPoolNrVMY8x.name.call({from: accounts[4]});
		await BACMARSLPTOKENPoolNrVMY8x.exit.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringN3Xhlpj = "d139vqeAf5em5CUpPcKJduzKKCN5NTsM"
		const stringVgQo6XF = "SjCM8Gi9KyKfiVXmImUFPCElJB4z"
		const uintNi4eOlT = BigInt("142")
		const BACMARSLPTOKENPoolHBPs9fX = await BACMARSLPTOKENPool.new(stringN3Xhlpj, stringVgQo6XF, uintNi4eOlT, {from: accounts[1]});
		const addresszzwfEu4 = accounts[2]
		const uint256sm5LSax = await BACMARSLPTOKENPoolHBPs9fX.earned.call(addresszzwfEu4, {from: accounts[2]});
		await BACMARSLPTOKENPoolHBPs9fX.nonReentrant.call({from: accounts[3]});
		await BACMARSLPTOKENPoolHBPs9fX.getReward.call({from: accounts[2]});
		await BACMARSLPTOKENPoolHBPs9fX.nonReentrant.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNNhWcs = "InsLWMRHlof3fsniFyGOSJpg0DCEQ6DX36Jllem2DaNRqHAmtlT0O8gupIWoxqYBvt86DEY1t8"
		const stringGSqAILJ = "cTML3sKRXm4X9tAGJdJPCpsABMQazDlngHx15BP2C3lBTmVge9O0MYovO19PWMtaNDm"
		const uintrO1EaVU = BigInt("249")
		const BACMARSLPTOKENPoolkXHhAWV = await BACMARSLPTOKENPool.new(stringNNhWcs, stringGSqAILJ, uintrO1EaVU, {from: accounts[4]});
		const uint517gh6 = BigInt("1836")
		const addressOcvNJ0T = accounts[0]
		const addressqLAUTBK = accounts[1]
		const uint256qIXoxoL = await BACMARSLPTOKENPoolkXHhAWV.notifyRewardAmount.call(uint517gh6, {from: accounts[4]});
		const addresstQJlfO4 = await BACMARSLPTOKENPoolkXHhAWV.updateReward.call(addressOcvNJ0T, {from: accounts[1]});
		const uint256PN81QqD = await BACMARSLPTOKENPoolkXHhAWV.balanceOf.call(addressqLAUTBK, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXgn8Bsd = "ExwExvVWTXjT1LA1x2PLCSv9WzbAH4O2AaBMRdKFBdFXb5qyJDSpV3fEgAGUSVvi"
		const stringoSL79Tm = "pDXPA96IYTKVUuneYCA3tXaCpxhff879x7AQMT6s6VmthKYqx40rDtmDjwfUDN7ullk3R2"
		const uintX04znHd = BigInt("181")
		const BACMARSLPTOKENPoolLBO5ESL = await BACMARSLPTOKENPool.new(stringXgn8Bsd, stringoSL79Tm, uintX04znHd, {from: accounts[3]});
		const addressZ1YKFU = accounts[4]
		const uint256FVpkhL = await BACMARSLPTOKENPoolLBO5ESL.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPoolLBO5ESL.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256K6Kkzj = await BACMARSLPTOKENPoolLBO5ESL.getRewardForDuration.call({from: accounts[5]});
		const uint256XYlMFsm = await BACMARSLPTOKENPoolLBO5ESL.earned.call(addressZ1YKFU, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMnUsRSA = "DhDU7eGQvV6NyaaSSP9qPi3FxRYF30VwiACILyjSEpYxYPGNnzjYllUVjrufGPkfvYGZtjqqWfRqv"
		const stringGF0MbRU = "LMR4Tpo4u1kJlDbSROW2wr4bmXAq2B7uIQ4IFfAGdkMCuUBttwjcXP72o0xMfkmMCPQPyEKj6sUA8groYB52oWRh4"
		const uintNW4bSoL = BigInt("52")
		const BACMARSLPTOKENPooly6GVcdo = await BACMARSLPTOKENPool.new(stringMnUsRSA, stringGF0MbRU, uintNW4bSoL, {from: accounts[0]});
		const uint256lki3M6I = await BACMARSLPTOKENPooly6GVcdo.rewardPerToken.call({from: accounts[0]});
		const uint256dD9A74 = await BACMARSLPTOKENPooly6GVcdo.rewardPerToken.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYamej7b = "x9H"
		const stringjHEmkuh = "XQ3ZAz7aimBVdha4RpZo9Bbf56MR8uIxxtGkCHbgypNn7EA1RGE9K8NicDJBkcH67blUq"
		const uintmCDuEmd = BigInt("63")
		const BACMARSLPTOKENPool6PbJZx = await BACMARSLPTOKENPool.new(stringYamej7b, stringjHEmkuh, uintmCDuEmd, {from: accounts[0]});
		await BACMARSLPTOKENPool6PbJZx.nonReentrant.call({from: accounts[1]});
		await BACMARSLPTOKENPool6PbJZx.nonReentrant.call({from: accounts[4]});
		const uint2561NIMSY = await BACMARSLPTOKENPool6PbJZx.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPool6PbJZx.getReward.call({from: accounts[5]});
		await BACMARSLPTOKENPool6PbJZx.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaBfJxu3 = "haiqSka06dIASmLEe5w2t9jxxqWK3Q2r8b1fggO1VhE2Uw7Jg57aXWEHT16UFwtWqeOphJXIBcNaM4LR3riGCOYlAbe"
		const string5POh6m = "UEuEVyH3q4AYv6UpxMIb0d5YxuJyvJGf8N8BDOJDCiffAoh"
		const uintBis5Qf = BigInt("164")
		const BACMARSLPTOKENPoolusMG5v3 = await BACMARSLPTOKENPool.new(stringaBfJxu3, string5POh6m, uintBis5Qf, {from: accounts[0]});
		await BACMARSLPTOKENPoolusMG5v3.exit.call({from: accounts[0]});
		await BACMARSLPTOKENPoolusMG5v3.nonReentrant.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGdvnk2Y = "iuBdUsobI5YIPlWRpxBC7lpDQKgvDH3EiqcYcmgIj6BlBnFNRDvWE"
		const stringYcs7HzI = "4eB3gqPRF83xNHdRNP6LZ1ku5tSVqCU7zA1wPbJ8zFEhXJsURyEqh2bKssRYFQ4IJrODIOcB4u7Vl92DUUY"
		const uintl73WaA = BigInt("153")
		const BACMARSLPTOKENPooliY3wgI1 = await BACMARSLPTOKENPool.new(stringGdvnk2Y, stringYcs7HzI, uintl73WaA, {from: accounts[2]});
		const uintRpQ35Q0 = BigInt("2010")
		const uint256rQvVhs = await BACMARSLPTOKENPooliY3wgI1.getRewardForDuration.call({from: accounts[3]});
		const uint256QvI5tdE = await BACMARSLPTOKENPooliY3wgI1.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256tmWY3P6 = await BACMARSLPTOKENPooliY3wgI1.stake.call(uintRpQ35Q0, {from: accounts[1]});
		const uint8DKAuPjo = await BACMARSLPTOKENPooliY3wgI1.decimals.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvlVWazU = "TRuMC5kYh2wau5kpRlDEIMTlA3LTu6mawtzCogaFqRxPvYJP"
		const stringRCnXhyJ = "7TytrGuIdTnrEAiFAbgu8LaG7"
		const uintlpu6Yda = BigInt("87")
		const BACMARSLPTOKENPooloLwogy = await BACMARSLPTOKENPool.new(stringvlVWazU, stringRCnXhyJ, uintlpu6Yda, {from: accounts[0]});
		const uintQbZbiAz = BigInt("1456")
		const uintMraGE5 = BigInt("1572")
		const uintwXMh8S = BigInt("1006")
		const uint8jujoGe = await BACMARSLPTOKENPooloLwogy.decimals.call({from: accounts[4]});
		const uint256Tf6QKd6 = await BACMARSLPTOKENPooloLwogy.stake.call(uintQbZbiAz, {from: accounts[2]});
		const uint256uWdPj6c = await BACMARSLPTOKENPooloLwogy.notifyRewardAmount.call(uintMraGE5, {from: accounts[0]});
		const uint256raPARcu = await BACMARSLPTOKENPooloLwogy.withdraw.call(uintwXMh8S, {from: accounts[2]});
		await BACMARSLPTOKENPooloLwogy.nonReentrant.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfmH60nF = "SSLZDarQlYPVJlFTkn8oKElaAHPwgJWz8g"
		const stringDOqqrfT = "fK"
		const uintOs7uoxY = BigInt("16")
		const BACMARSLPTOKENPoolNKUeLNo = await BACMARSLPTOKENPool.new(stringfmH60nF, stringDOqqrfT, uintOs7uoxY, {from: accounts[4]});
		await BACMARSLPTOKENPoolNKUeLNo.nonReentrant.call({from: accounts[2]});
		const stringpFjxF8 = await BACMARSLPTOKENPoolNKUeLNo.symbol.call({from: accounts[2]});
		const stringCgwQeXK = await BACMARSLPTOKENPoolNKUeLNo.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringr4iLywH = "DuN3TkNodcocTvcDwPo8CP"
		const stringg63ZsN5 = "HJHlo7DD9g595iOeIbDbmJlh5jcM7hVLf7zsKoVPQOVplvok1"
		const uintWPzWZqL = BigInt("196")
		const BACMARSLPTOKENPoollJfGNJj = await BACMARSLPTOKENPool.new(stringr4iLywH, stringg63ZsN5, uintWPzWZqL, {from: accounts[2]});
		const uintkVm6B92 = BigInt("737")
		const addresseY5y1vG = accounts[3]
		const uint256ceRxh3 = await BACMARSLPTOKENPoollJfGNJj.notifyRewardAmount.call(uintkVm6B92, {from: accounts[4]});
		await BACMARSLPTOKENPoollJfGNJj.nonReentrant.call({from: accounts[5]});
		const uint8UsfXOu8 = await BACMARSLPTOKENPoollJfGNJj.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoollJfGNJj.getReward.call({from: accounts[2]});
		const uint256jmKchh = await BACMARSLPTOKENPoollJfGNJj.balanceOf.call(addresseY5y1vG, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPXxEin = "epo6FuNqpV95kkRgWwWF8GMjmp1"
		const stringtu1ETUz = "NSTTGu3q5RNiXNrcfzl"
		const uintq1LnTk = BigInt("56")
		const BACMARSLPTOKENPoolgHCtyAC = await BACMARSLPTOKENPool.new(stringPXxEin, stringtu1ETUz, uintq1LnTk, {from: accounts[1]});
		const addressa0PB7Ul = accounts[5]
		const addressvWl1cyg = "0x0000000000000000000000000000000000000001"
		const uintiyL9bEK = BigInt("1299")
		const uint256ot1xgJf = await BACMARSLPTOKENPoolgHCtyAC.earned.call(addressa0PB7Ul, {from: accounts[4]});
		await BACMARSLPTOKENPoolgHCtyAC.getReward.call({from: accounts[3]});
		const uint256MF7Kc7a = await BACMARSLPTOKENPoolgHCtyAC.balanceOf.call(addressvWl1cyg, {from: accounts[4]});
		const uint85YXVKj = await BACMARSLPTOKENPoolgHCtyAC.decimals.call({from: accounts[3]});
		const uint256o0XbMHW = await BACMARSLPTOKENPoolgHCtyAC.notifyRewardAmount.call(uintiyL9bEK, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQVCNbtl = "nF"
		const stringpPLVUns = "Lg6FHBC9oN59BuLbT8FFJVVteWEASUsErXidw"
		const uintPWuCdze = BigInt("46")
		const BACMARSLPTOKENPoolxlv3XYe = await BACMARSLPTOKENPool.new(stringQVCNbtl, stringpPLVUns, uintPWuCdze, {from: accounts[1]});
		const uintPf9jok2 = BigInt("1990")
		const uintKtMC3LV = BigInt("573")
		const uint256ipgsHXI = await BACMARSLPTOKENPoolxlv3XYe.notifyRewardAmount.call(uintPf9jok2, {from: accounts[4]});
		await BACMARSLPTOKENPoolxlv3XYe.nonReentrant.call({from: accounts[2]});
		const uint256khBuufX = await BACMARSLPTOKENPoolxlv3XYe.notifyRewardAmount.call(uintKtMC3LV, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolxlv3XYe.onlyRewardsDistribution.call({from: accounts[4]});
		await BACMARSLPTOKENPoolxlv3XYe.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiWJ49cJ = "sEwUAx5AIZQ5magKUdVkjHBhi2YPlQ3T60RF8pMrfFd1hchOOlLlfgTP"
		const stringf1cFYU = "mPDTtfnCMXhO"
		const uintU8StFQL = BigInt("30")
		const BACMARSLPTOKENPoolwuRqxyu = await BACMARSLPTOKENPool.new(stringiWJ49cJ, stringf1cFYU, uintU8StFQL, {from: accounts[2]});
		const bytemXiFfYZ = "0x160d0a030b010f0d0d1c041111101f0d060d020b0a1e0f190b0a0b040d061c06"
		const byteFkvf1Sc = "0x070602120d1f0a03141b01031c1c161c200918131d1211011110161510041f12"
		const uinty4Wi51t = BigInt("216")
		const uint1VnsXR = BigInt("1311")
		const uintufUYsmE = BigInt("475")
		const uintecZ8upb = BigInt("1896")
		const bytegKcGpW0 = "0x1f111c15100c081219091001061d0a021106130f02021b1f120b071a0901071d"
		const byteCHub5LY = "0x0904081a071f060a001109070a06071a111807120500130a1e160b0b07161a04"
		const uintQZ0MJsW = BigInt("149")
		const uintoX8JNOT = BigInt("994")
		const uintiQSVbPi = BigInt("1783")
		const uint256w7yMk2J = await BACMARSLPTOKENPoolwuRqxyu.stakeWithPermit.call(uintufUYsmE, uint1VnsXR, uinty4Wi51t, byteFkvf1Sc, bytemXiFfYZ, {from: accounts[4]});
		const uint256GHGBhyM = await BACMARSLPTOKENPoolwuRqxyu.withdraw.call(uintecZ8upb, {from: accounts[2]});
		const uint256H3Ljfou = await BACMARSLPTOKENPoolwuRqxyu.stakeWithPermit.call(uintiQSVbPi, uintoX8JNOT, uintQZ0MJsW, byteCHub5LY, bytegKcGpW0, {from: accounts[2]});
		const stringNe4LGY2 = await BACMARSLPTOKENPoolwuRqxyu.symbol.call({from: accounts[2]});
		const stringSwternq = await BACMARSLPTOKENPoolwuRqxyu.symbol.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbQlZ93e = "l8m1jvaZ4tN81v7RPxYDD7ajKgeMFLUyVn43kbAJnyl9yH9pdwgILcXxMm3KM"
		const string4a1wdQ = "bBTG3tIIZ22T75YOi4HFrCn2TUThfdhJDQEg9Qgry2wWYCBpfFoqyTY4iBl066lymtS614g1GQ4GXt5IJdlQDzGR69n62"
		const uintEoXbvm = BigInt("18")
		const BACMARSLPTOKENPoolFqHeJ2a = await BACMARSLPTOKENPool.new(stringbQlZ93e, string4a1wdQ, uintEoXbvm, {from: accounts[5]});
		const uintkSlvWF = BigInt("1794")
		const uintlhKivgM = BigInt("756")
		const uintFnLM4IU = BigInt("295")
		const uint256pvZS0EC = await BACMARSLPTOKENPoolFqHeJ2a.rewardPerToken.call({from: accounts[2]});
		const uint256u0iRHDF = await BACMARSLPTOKENPoolFqHeJ2a.withdraw.call(uintkSlvWF, {from: accounts[1]});
		const uint256mZJpMwe = await BACMARSLPTOKENPoolFqHeJ2a.stake.call(uintlhKivgM, {from: accounts[0]});
		const uint256pqX5IHg = await BACMARSLPTOKENPoolFqHeJ2a.withdraw.call(uintFnLM4IU, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAYLakWg = "mh9QJU1VXhYimjnxU5GW2ulWvweSXmKCwfe7L3anrZmJ7szVipW8fcxWTe1GxWKLy2Mb3fSpYb2"
		const stringtQPHODl = "MP0Vy17BGZPycV2BB36wRPy1poKpo2jelRT94WwzlkKqAid6x6zUABx0iVRb2ox9QaTrPi2FfGsA1YMDwSAbQSdO6XMxf"
		const uintbfxSHfA = BigInt("209")
		const BACMARSLPTOKENPooldMVLy1I = await BACMARSLPTOKENPool.new(stringAYLakWg, stringtQPHODl, uintbfxSHfA, {from: accounts[4]});
		await BACMARSLPTOKENPooldMVLy1I.nonReentrant.call({from: accounts[5]});
		await BACMARSLPTOKENPooldMVLy1I.getReward.call({from: accounts[1]});
		await BACMARSLPTOKENPooldMVLy1I.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDZpL3kA = "3dYeedJS1w1e5PxQ4S8n14vuw5eTxJi3dy9lRcRHpc4iPCgqRgUk6jwiCelM"
		const stringw9YaLqc = "nrTcxhnzE1t2qHEChyUanjlt8EKkq"
		const uintKIkCvNl = BigInt("127")
		const BACMARSLPTOKENPoolI20nh66 = await BACMARSLPTOKENPool.new(stringDZpL3kA, stringw9YaLqc, uintKIkCvNl, {from: accounts[1]});
		const addressK9a2hvI = accounts[4]
		const addresshFu3Ajt = accounts[1]
		const uint256tPIjAFA = await BACMARSLPTOKENPoolI20nh66.earned.call(addressK9a2hvI, {from: accounts[3]});
		const uint256E3lmDKo = await BACMARSLPTOKENPoolI20nh66.balanceOf.call(addresshFu3Ajt, {from: accounts[4]});
		await BACMARSLPTOKENPoolI20nh66.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXxQEIS = "c4ybjenzGgopvQqxWmyHCkINfJdJyl38bnRNAUHQe8wkFerGr4n2st3FvPtnrZZMbrwYqTF8iInovwqBFvrA"
		const stringl5g3usM = "cakdCMCb7g8WuXT"
		const uinttPWNE56 = BigInt("207")
		const BACMARSLPTOKENPoolLGxsU03 = await BACMARSLPTOKENPool.new(stringXxQEIS, stringl5g3usM, uinttPWNE56, {from: accounts[4]});
		const uint8zbjgDJd = await BACMARSLPTOKENPoolLGxsU03.decimals.call({from: accounts[1]});
		const uint256TIjq0fw = await BACMARSLPTOKENPoolLGxsU03.totalSupply.call({from: accounts[3]});
	});
})