const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const VotingKDTxNwP = await Voting.new({from: accounts[1]});
		const addressBzYAsOB = accounts[2]
		const addressm68DEd = "0x0000000000000000000000000000000000000001"
		const stringg05k333 = "wWgJAJKqJ3u2CioVFwRQXBCM37kSEOod3Xkla5msr"
		const stringjqtZjRQ = "vmlVaur7xzF1CjXwKGZwXGObDHGXNLywM6dDpr3qftvk"
		const stringtCIeWYi = "yg2rMxJ07Fn4qwGmhlGMDrqOJXyWIqI6Rc"
		const byteW2Rctq3 = "0x160201100e12000a1302090a031f15"
		const addressUMdMmnz = accounts[1]
		const uintSk3oSR = BigInt("2032")
		const addressvt7w5hP = accounts[3]
		const addressYj2IHUI = accounts[0]
		const boolIElp5P7 = await VotingKDTxNwP.isMinter.call(addressBzYAsOB, {from: accounts[4]});
		await VotingKDTxNwP.renounceMinter.call({from: accounts[2]});
		const boolXk7bwk = await VotingKDTxNwP.isValidStamperAddress.call(addressm68DEd, {from: accounts[0]});
		const 
aKBRPAv = await VotingKDTxNwP.createProposal.call(addressUMdMmnz, byteW2Rctq3, stringtCIeWYi, stringjqtZjRQ, stringg05k333, {from: accounts[2]});
		const boolQxMysD9 = await VotingKDTxNwP.approve.call(addressvt7w5hP, uintSk3oSR, {from: accounts[0]});
		const addressqJtV8qE = await VotingKDTxNwP.ownableUpgrade.call(addressYj2IHUI, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressXHtEU8A = accounts[2]
		const VotingF8bJxKr = await Voting.new(addressXHtEU8A, {from: accounts[2]});
		const addressSH8g5dS = accounts[1]
		const uintehu0dqI = BigInt("224")
		const addresseagG6X0 = "0x0000000000000000000000000000000000000001"
		const uintYvdxqhZ = BigInt("1288")
		const addressLEH57af = accounts[5]
		const uintoJ3oinz = BigInt("175")
		const addressFYsUian = accounts[0]
		const addressJcdnBcl = await VotingF8bJxKr.addMinter.call(addressSH8g5dS, {from: accounts[1]});
		const boolsOh6IS = await VotingF8bJxKr.transfer.call(addresseagG6X0, uintehu0dqI, {from: accounts[3]});
		const boolRC6g4ft = await VotingF8bJxKr.approve.call(addressLEH57af, uintYvdxqhZ, {from: accounts[4]});
		const boolXv7yUfh = await VotingF8bJxKr.mint.call(addressFYsUian, uintoJ3oinz, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addresst20s6m0 = "0x0000000000000000000000000000000000000001"
		const VotingtNIfNB6 = await Voting.new(addresst20s6m0, {from: accounts[4]});
		const boolHVhWLvl = false
		const uintBPH32Oc = BigInt("1637")
		const uintKdkrKm = BigInt("1845")
		const uintJRq8jiF = BigInt("1372")
		const uint256Sfg9Wh7 = await VotingtNIfNB6.vote.call(uintBPH32Oc, boolHVhWLvl, {from: accounts[0]});
		await VotingtNIfNB6.onlyExchangeFactoryOrVotingSystem.call({from: accounts[3]});
		const uint256LRu3AJa = await VotingtNIfNB6.pause.call(uintKdkrKm, {from: accounts[2]});
		const uint256oSKrnxy = await VotingtNIfNB6.resolve.call(uintJRq8jiF, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingpeX1FNO = await Voting.new({from: accounts[0]});
		const addressqfLFBel = accounts[4]
		const addressLZwU1EN = accounts[0]
		const addresscB21AOo = accounts[2]
		const addressOaurzTO = accounts[5]
		await VotingpeX1FNO.onlyOwner.call({from: accounts[4]});
		const uint256JvizOLc = await VotingpeX1FNO.allowance.call(addressLZwU1EN, addressqfLFBel, {from: accounts[5]});
		const boolvSqg3OZ = await VotingpeX1FNO.isMinter.call(addresscB21AOo, {from: accounts[4]});
		const boolLVvNvMZ = await VotingpeX1FNO.isValidVerifierAddress.call(addressOaurzTO, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingTRi7g1D = await Voting.new({from: accounts[2]});
		const uintmZ1KxDF = BigInt("662")
		const addressLDsNptT = accounts[1]
		await VotingTRi7g1D.renounceMinter.call({from: accounts[4]});
		const stringPefq4jI = await VotingTRi7g1D.name.call({from: accounts[0]});
		const boolUbgkSY7 = await VotingTRi7g1D.transfer.call(addressLDsNptT, uintmZ1KxDF, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressq8dXPQn = accounts[3]
		const VotingT3rZVVt = await Voting.new(addressq8dXPQn, {from: "0x0000000000000000000000000000000000000001"});
		const addressT0OyZfF = accounts[5]
		const uintPCqpJSV = BigInt("875")
		const addressERxJw1G = accounts[1]
		const boolMzzN5R1 = await VotingT3rZVVt.isValidVerifierAddress.call(addressT0OyZfF, {from: accounts[1]});
		await VotingT3rZVVt.onlyVotingSystem.call({from: accounts[3]});
		const boolkRQ74iQ = await VotingT3rZVVt.approve.call(addressERxJw1G, uintPCqpJSV, {from: accounts[0]});
		await VotingT3rZVVt.onlyOracle.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressRN4oDL = accounts[4]
		const VotingLq834SL = await Voting.new(addressRN4oDL, {from: accounts[3]});
		const uintR4wh2Vq = BigInt("1855")
		const addresseINcmc4 = accounts[5]
		const uintbTc91QD = BigInt("1903")
		const addressrVVZhId = accounts[5]
		const addressOl1sIVW = accounts[3]
		const boolIkEuNMa = await VotingLq834SL.approve.call(addresseINcmc4, uintR4wh2Vq, {from: accounts[2]});
		await VotingLq834SL.onlyRegistry.call({from: accounts[4]});
		const boolLgo4dSQ = await VotingLq834SL.transfer.call(addressrVVZhId, uintbTc91QD, {from: accounts[2]});
		const addressiDGybGk = await VotingLq834SL.transferOwnership.call(addressOl1sIVW, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressd4K4s7O = "0x0000000000000000000000000000000000000001"
		const VotingtNIfNB6 = await Voting.new(addressd4K4s7O, {from: accounts[4]});
		const uintZD82gR9 = BigInt("167")
		const boolHVhWLvl = false
		const uintC3knJ9a = BigInt("1637")
		const uintkQ8n5KW = BigInt("1845")
		const uintJya0Ov9 = BigInt("1876")
		const addressATCMWDg = "0x0000000000000000000000000000000000000001"
		const addresszSEG4Uj = accounts[3]
		const uintVX6QcGd = BigInt("1372")
		const uint256ZO6Xbi = await VotingtNIfNB6.approve.call(uintZD82gR9, {from: accounts[0]});
		const uint256Sfg9Wh7 = await VotingtNIfNB6.vote.call(uintC3knJ9a, boolHVhWLvl, {from: accounts[0]});
		await VotingtNIfNB6.onlyExchangeFactoryOrVotingSystem.call({from: accounts[3]});
		const uint256LRu3AJa = await VotingtNIfNB6.pause.call(uintkQ8n5KW, {from: accounts[2]});
		const boolMBAoLJZ = await VotingtNIfNB6.transferFrom.call(addresszSEG4Uj, addressATCMWDg, uintJya0Ov9, {from: accounts[0]});
		const uint256oSKrnxy = await VotingtNIfNB6.resolve.call(uintVX6QcGd, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressIU5f2Xp = accounts[0]
		const VotingeQGlE3 = await Voting.new(addressIU5f2Xp, {from: accounts[4]});
		const addressLwpgT4j = accounts[1]
		const addressADVjSP = accounts[2]
		const addressPj7ru7 = await VotingeQGlE3.transferOwnership.call(addressLwpgT4j, {from: accounts[4]});
		const boolNijYvzw = await VotingeQGlE3.isExchangeFactory.call(addressADVjSP, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressRN7vQW = "0x0000000000000000000000000000000000000001"
		const VotingtNIfNB6 = await Voting.new(addressRN7vQW, {from: accounts[4]});
		const stringbAr7JIB = "K4oqBEotP6VqKV9izEWmEsKVkQKSFbazJq9jFQ12"
		const stringvib5Ok = "2tDBGOgMhncoCaQIPRKsrf9TwL1On1SGdIx6tiACtr6yb6s"
		const stringvesYLwh = "I7hyneNRKnmwf3Ag4hb7ErjXjqecHX6r7IKr2JTgoCj89jaiqyWFs7QGbl"
		const byteMQpmumL = "0x08041e1405091f1c"
		const addressVFTDbK = accounts[1]
		const boolHVhWLvl = false
		const uintTJAkkjd = BigInt("1637")
		const uintrv05GyB = BigInt("1845")
		const uintnxzbpju = BigInt("1884")
		const addressQETBGN7 = accounts[1]
		const uintVfDVuhp = BigInt("1372")
		const 
n9svUcR = await VotingtNIfNB6.createProposal.call(addressVFTDbK, byteMQpmumL, stringvesYLwh, stringvib5Ok, stringbAr7JIB, {from: accounts[3]});
		const uint256Sfg9Wh7 = await VotingtNIfNB6.vote.call(uintTJAkkjd, boolHVhWLvl, {from: accounts[0]});
		await VotingtNIfNB6.onlyExchangeFactoryOrVotingSystem.call({from: accounts[3]});
		const uint256LRu3AJa = await VotingtNIfNB6.pause.call(uintrv05GyB, {from: accounts[2]});
		const uint256D3f2pNp = await VotingtNIfNB6.veto.call(uintnxzbpju, {from: accounts[4]});
		const boolyk9Oi2g = await VotingtNIfNB6.isValidOracleAddress.call(addressQETBGN7, {from: accounts[2]});
		await VotingtNIfNB6.onlyMinter.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256oSKrnxy = await VotingtNIfNB6.resolve.call(uintVfDVuhp, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressr6kNlwn = "0x0000000000000000000000000000000000000001"
		const VotingtNIfNB6 = await Voting.new(addressr6kNlwn, {from: accounts[4]});
		const uinttMgyW7O = BigInt("383")
		const uintpfZeQl = BigInt("1845")
		const uinteFA49vH = BigInt("1372")
		const addressznE8vah = await VotingtNIfNB6.owner.call({from: accounts[3]});
		const uint256dXm1QH5 = await VotingtNIfNB6.resolve.call(uinttMgyW7O, {from: accounts[3]});
		const uint256LRu3AJa = await VotingtNIfNB6.pause.call(uintpfZeQl, {from: accounts[2]});
		const uint256oSKrnxy = await VotingtNIfNB6.resolve.call(uinteFA49vH, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressI1F3e7 = "0x0000000000000000000000000000000000000001"
		const VotingtNIfNB6 = await Voting.new(addressI1F3e7, {from: accounts[4]});
		const uintD1SjHF0 = BigInt("1845")
		const addressS9AdDam = accounts[3]
		const uinta0HrjfD = BigInt("1372")
		const addressznE8vah = await VotingtNIfNB6.owner.call({from: accounts[3]});
		const uint256LRu3AJa = await VotingtNIfNB6.pause.call(uintD1SjHF0, {from: accounts[2]});
		const booldFQxi6U = await VotingtNIfNB6.isMinter.call(addressS9AdDam, {from: accounts[4]});
		const uint256oSKrnxy = await VotingtNIfNB6.resolve.call(uinta0HrjfD, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addresse3lZr9D = accounts[2]
		const VotingX3RXZFE = await Voting.new(addresse3lZr9D, {from: accounts[3]});
		const addressJ1U5pDE = accounts[3]
		const uintA5JtP4v = BigInt("1173")
		const uintrlYuuey = BigInt("1825")
		const addressEcwVFgF = accounts[1]
		const addressZQqCD8v = "0x0000000000000000000000000000000000000001"
		const boolLTiuXfJ = await VotingX3RXZFE.isVotingSystem.call(addressJ1U5pDE, {from: accounts[3]});
		const uint256lgXXPKG = await VotingX3RXZFE.resolve.call(uintA5JtP4v, {from: accounts[2]});
		const boolVqA1b6N = await VotingX3RXZFE.transferFrom.call(addressZQqCD8v, addressEcwVFgF, uintrlYuuey, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressOr8A5UE = "0x0000000000000000000000000000000000000001"
		const VotingtNIfNB6 = await Voting.new(addressOr8A5UE, {from: accounts[4]});
		const addressmGhico4 = accounts[3]
		const uintatncGwh = BigInt("1845")
		const uintPoCZiAz = BigInt("1372")
		const addressznE8vah = await VotingtNIfNB6.owner.call({from: accounts[3]});
		const booliD3XtG1 = await VotingtNIfNB6.isValidVerifierAddress.call(addressmGhico4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LRu3AJa = await VotingtNIfNB6.pause.call(uintatncGwh, {from: accounts[2]});
		const uint256oSKrnxy = await VotingtNIfNB6.resolve.call(uintPoCZiAz, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressfjN9xl7 = "0x0000000000000000000000000000000000000001"
		const VotingtNIfNB6 = await Voting.new(addressfjN9xl7, {from: accounts[4]});
		const addresspztKCDK = accounts[2]
		const uinttdYzZR7 = BigInt("1963")
		const uintV3l15zA = BigInt("410")
		const boolra3R5S4 = await VotingtNIfNB6.didAddressVote.call(uinttdYzZR7, addresspztKCDK, {from: accounts[2]});
		await VotingtNIfNB6.onlyVotingSystem.call({from: accounts[3]});
		const uint256dXm1QH5 = await VotingtNIfNB6.resolve.call(uintV3l15zA, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressc5laqlq = "0x0000000000000000000000000000000000000001"
		const VotingtNIfNB6 = await Voting.new(addressc5laqlq, {from: accounts[4]});
		const addresspwUpTDX = accounts[1]
		const addressreBEScN = accounts[1]
		const addresszXoYzJ = await VotingtNIfNB6.ownableUpgrade.call(addresspwUpTDX, {from: accounts[4]});
		const boolAN3v2yO = await VotingtNIfNB6.isExchangeFactory.call(addressreBEScN, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressoItox8v = "0x0000000000000000000000000000000000000001"
		const VotingtNIfNB6 = await Voting.new(addressoItox8v, {from: accounts[4]});
		const addressEHMC8SE = "0x0000000000000000000000000000000000000001"
		const uintSpX9K12 = BigInt("1372")
		const addressznE8vah = await VotingtNIfNB6.owner.call({from: accounts[3]});
		const boolBw4iHJr = await VotingtNIfNB6.isValidStamperAddress.call(addressEHMC8SE, {from: accounts[1]});
		const uint256oSKrnxy = await VotingtNIfNB6.resolve.call(uintSpX9K12, {from: accounts[4]});
	});
})