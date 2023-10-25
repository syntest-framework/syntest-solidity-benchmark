const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const address8NLGC5 = accounts[1]
		const VotingpBbLTy0 = await Voting.new(address8NLGC5, {from: accounts[0]});
		const address2R2ztf = accounts[3]
		const uintSQGJJir = BigInt("1992")
		const addressEORM2rG = "0x0000000000000000000000000000000000000001"
		const addresswhuGK6e = accounts[5]
		const addressHruLj5u = "0x0000000000000000000000000000000000000001"
		const addresscsMmiJj = await VotingpBbLTy0.ownableUpgrade.call(address2R2ztf, {from: accounts[5]});
		await VotingpBbLTy0.renounceOwnership.call({from: accounts[1]});
		const boolsnN3eye = await VotingpBbLTy0.mint.call(addressEORM2rG, uintSQGJJir, {from: accounts[3]});
		const uint256xujNR6U = await VotingpBbLTy0.allowance.call(addressHruLj5u, addresswhuGK6e, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressDUWsBRW = accounts[4]
		const VotingVt6Yj3 = await Voting.new(addressDUWsBRW, {from: accounts[4]});
		const uintcqwUpu = BigInt("1462")
		const uintYAZCXGT = BigInt("1948")
		const uint256ALGhlMM = await VotingVt6Yj3.resolve.call(uintcqwUpu, {from: accounts[1]});
		const uint256VwOdXzC = await VotingVt6Yj3.pause.call(uintYAZCXGT, {from: "0x0000000000000000000000000000000000000001"});
		await VotingVt6Yj3.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addresscfTgDpN = accounts[2]
		const VotingXP5Vflc = await Voting.new(addresscfTgDpN, {from: accounts[4]});
		const addressxonbbGR = accounts[0]
		const uintIcwzgNH = BigInt("199")
		const stringbCUvv2 = "NulSKskEDrYQQeHpZjV5ZMCDBR67fiEbNNQyB6qbJ"
		const stringeEysv4s = "7ewSMiFyJ52PXt7rCZsRQuVOv"
		const stringa9Z9w41 = "A1OIg3r7SDNfXRCaCyVPeiX7VSuQaXq9sezyi591XxLbrQsdlagUMb3QKEXSDdfC"
		const bytez68ZxLE = "0x010b000f101603000e041b0b10081a0b0d140a08090f1c02121e03"
		const addressnIw6JJ = accounts[4]
		const uintiExAwAd = BigInt("765")
		const boolU90mwD = await VotingXP5Vflc.didAddressVote.call(uintIcwzgNH, addressxonbbGR, {from: accounts[1]});
		const uint256zhbbdRq = await VotingXP5Vflc.snapshot.call({from: accounts[4]});
		const uint256etuygwF = await VotingXP5Vflc.totalSupply.call({from: accounts[4]});
		const 
qZvrVIR = await VotingXP5Vflc.createProposal.call(addressnIw6JJ, bytez68ZxLE, stringa9Z9w41, stringeEysv4s, stringbCUvv2, {from: accounts[0]});
		const uint2569QHQcQ = await VotingXP5Vflc.burn.call(uintiExAwAd, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressGI5rSXK = accounts[4]
		const VotingLa96ZyY = await Voting.new(addressGI5rSXK, {from: "0x0000000000000000000000000000000000000001"});
		const addressfnRizN1 = accounts[0]
		const uintyy5Px73 = BigInt("827")
		const uintZdevzMq = BigInt("1052")
		const addressXXgzndL = accounts[1]
		const booliPVZon = await VotingLa96ZyY.didAddressVote.call(uintyy5Px73, addressfnRizN1, {from: accounts[3]});
		await VotingLa96ZyY.onlyOracle.call({from: accounts[3]});
		const uint256mIwzuBL = await VotingLa96ZyY.burn.call(uintZdevzMq, {from: accounts[5]});
		const booligT7QjL = await VotingLa96ZyY.isMinter.call(addressXXgzndL, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingDY6MkDR = await Voting.new({from: accounts[2]});
		const addressamyKVKA = accounts[3]
		const address3F9VTF = accounts[0]
		const stringHD7nBkx = "WjdQas28F3E5squIQ5pW5PAOcfpBMyAYtd3At7F8LI52gcd83MRt5JSPxU"
		const stringNradKHs = "XjJvOw56a8eOR7WdKnhhY7irb3O0xO1fK8wKplf9uprVlXnnqOQISzw0HVQLUPfA86yBImcLbFA5f3"
		const stringXr0PMVV = "MpvIFE5QwDS221Yp97wHcF4uNr8y2uVrUVzYh3YuyL9EBhG9gytgIsT5qBG6mdSXQCopnn9o"
		const byteXs5wEn7 = "0x0315101917130e031b1d18040c1d00"
		const addressHXAH9vi = accounts[1]
		await VotingDY6MkDR.onlyExchangeFactory.call({from: accounts[5]});
		await VotingDY6MkDR.onlyExchangeFactory.call({from: accounts[4]});
		const uint256gKTS1il = await VotingDY6MkDR.allowance.call(address3F9VTF, addressamyKVKA, {from: accounts[2]});
		const 
gPIWd9Y = await VotingDY6MkDR.createProposal.call(addressHXAH9vi, byteXs5wEn7, stringXr0PMVV, stringNradKHs, stringHD7nBkx, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressBVk5OyS = accounts[1]
		const VotingmXaBGi = await Voting.new(addressBVk5OyS, {from: accounts[2]});
		const addressssla5S = accounts[1]
		const uintHLywquw = BigInt("990")
		const addressGsvhlnq = accounts[2]
		const uintyPdJFsQ = BigInt("1825")
		const addressczL9ck7 = accounts[0]
		const boolR1oY0am = await VotingmXaBGi.isVotingSystem.call(addressssla5S, {from: accounts[1]});
		const boolcnfQ88J = await VotingmXaBGi.transfer.call(addressGsvhlnq, uintHLywquw, {from: accounts[3]});
		const boolUNKmOpK = await VotingmXaBGi.increaseAllowance.call(addressczL9ck7, uintyPdJFsQ, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressMaqEbAR = accounts[3]
		const VotinggDlDiYy = await Voting.new(addressMaqEbAR, {from: accounts[4]});
		const addressBUbYbWi = "0x0000000000000000000000000000000000000001"
		const uintu56HFdX = BigInt("547")
		const addressu4BK5P = accounts[0]
		const addressEM2m6YS = accounts[0]
		const boolpf9xvRU = await VotinggDlDiYy.isExchangeFactory.call(addressBUbYbWi, {from: accounts[1]});
		const boolG8MOTGV = await VotinggDlDiYy.transferFrom.call(addressEM2m6YS, addressu4BK5P, uintu56HFdX, {from: accounts[2]});
		await VotinggDlDiYy.renounceMinter.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressW50Ql9 = accounts[4]
		const VotingVt6Yj3 = await Voting.new(addressW50Ql9, {from: accounts[4]});
		const uintw2MY0d = BigInt("927")
		const uint256VwOdXzC = await VotingVt6Yj3.pause.call(uintw2MY0d, {from: "0x0000000000000000000000000000000000000001"});
		await VotingVt6Yj3.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const Votinguz40sfe = await Voting.new({from: accounts[4]});
		const uintvQ5pEBG = BigInt("1915")
		const addresst11u3yU = accounts[4]
		const uint256xj5LwJp = await Votinguz40sfe.resolve.call(uintvQ5pEBG, {from: accounts[2]});
		const addressKmXZODQ = await Votinguz40sfe.updateRegistry.call(addresst11u3yU, {from: accounts[3]});
		await Votinguz40sfe.onlyOracle.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressWNsBd6a = accounts[4]
		const VotingVt6Yj3 = await Voting.new(addressWNsBd6a, {from: accounts[4]});
		const boolwPgvgqx = true
		const uintkVBBGdA = BigInt("226")
		const uintVGIJ9ra = BigInt("1052")
		const uintwD3kbPS = BigInt("927")
		const uintFEUFlJ1 = BigInt("447")
		const addressLwXnDrJ = accounts[0]
		const addressV59t8hA = accounts[4]
		const addressqwdlApC = accounts[0]
		const uint256zLTsiv6 = await VotingVt6Yj3.vote.call(uintkVBBGdA, boolwPgvgqx, {from: accounts[0]});
		const uint256ALGhlMM = await VotingVt6Yj3.resolve.call(uintVGIJ9ra, {from: accounts[1]});
		const uint256VwOdXzC = await VotingVt6Yj3.pause.call(uintwD3kbPS, {from: "0x0000000000000000000000000000000000000001"});
		const booloJ0nRtj = await VotingVt6Yj3.approve.call(addressLwXnDrJ, uintFEUFlJ1, {from: accounts[3]});
		const uint256fHJ3rXS = await VotingVt6Yj3.allowance.call(addressqwdlApC, addressV59t8hA, {from: accounts[4]});
		await VotingVt6Yj3.requiresLiquidityTokenSnapshotAccess.call({from: accounts[0]});
		await VotingVt6Yj3.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressvWeWL1r = "0x0000000000000000000000000000000000000001"
		const VotingDg3e74q = await Voting.new(addressvWeWL1r, {from: accounts[1]});
		const addressw5LrbT = "0x0000000000000000000000000000000000000001"
		const stringc4xb1yX = "kkzoqkVhF1ffjavuvSXRoIKFGUiR5Hmg1zh7wd8sfHYtHuhXo9dWcRFOivjAv17skEImJG4ivnjlGdpOT"
		const stringWFfIhf6 = "1P89swpxS6PYMYcqtPKvptjMScURLBrq9DW4Tl2UNAi1rzGJdFF5OVE6skMhcYSTofIb7Fnm1q"
		const stringmIfyq3I = "8ehTmtqJXe7J1tNUXDnpemAl6QvDnilZiSJY8DEUnmv0qufpV"
		const byteMPWIZQd = "0x0e0217031e20010a070905150c02161301020405"
		const addressM2wuGe = accounts[1]
		const addresszUvp7nf = await VotingDg3e74q.transferOwnership.call(addressw5LrbT, {from: accounts[1]});
		const 
Yld75bn = await VotingDg3e74q.createProposal.call(addressM2wuGe, byteMPWIZQd, stringmIfyq3I, stringWFfIhf6, stringc4xb1yX, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressq0Xh3V1 = "0x0000000000000000000000000000000000000001"
		const VotingDg3e74q = await Voting.new(addressq0Xh3V1, {from: accounts[1]});
		const addressb1alqPw = "0x0000000000000000000000000000000000000000"
		const uintbsykoJ = BigInt("2040")
		const addressyS8jmzH = accounts[2]
		const stringc4xb1yX = "kkzoqkVhF1ffjavuvSXRoIKFGUiR5Hmg1zh7wd8sfHYtHuhXo9dWcRFOivjAv17skEImJG4ivnjlGdpOT"
		const stringWFfIhf6 = "1P89swpxS6PYMYcqtPKvptjMScURLBrq9DW4Tl2UNAi1rzGJdFF5OVE6skMhcYSTofIb7Fnm1q"
		const stringmIfyq3I = "8ehTmtqJXe7J1tNUXDnpemAl6QvDnilZiSJY8DEUnmv0qufpV"
		const byteCWjgx4C = "0x0e0217031e20010a070905150c02161301020405"
		const addresscqVZCQ = accounts[4]
		const addresszUvp7nf = await VotingDg3e74q.transferOwnership.call(addressb1alqPw, {from: accounts[1]});
		const boolWYj8Twe = await VotingDg3e74q.approve.call(addressyS8jmzH, uintbsykoJ, {from: "0x0000000000000000000000000000000000000001"});
		const 
Yld75bn = await VotingDg3e74q.createProposal.call(addresscqVZCQ, byteCWjgx4C, stringmIfyq3I, stringWFfIhf6, stringc4xb1yX, {from: accounts[2]});
	});
})