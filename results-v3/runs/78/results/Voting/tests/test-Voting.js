const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addresszGpFUjB = accounts[5]
		const VotingzxEf1FW = await Voting.new(addresszGpFUjB, {from: accounts[1]});
		const addressb5goh5v = accounts[4]
		const uintu0pFQPV = BigInt("1206")
		const addressAv0TmfN = accounts[4]
		const address1IRlPp = accounts[3]
		const uintSrSAjj9 = BigInt("1659")
		const addressWIJ5ubZ = await VotingzxEf1FW.updateRegistry.call(addressb5goh5v, {from: accounts[2]});
		const addressmxsd7fz = await VotingzxEf1FW.burnFrom.call(addressAv0TmfN, uintu0pFQPV, {from: accounts[5]});
		const boolmWZvHhJ = await VotingzxEf1FW.isExchangeFactory.call(address1IRlPp, {from: accounts[4]});
		const uint256vWj0nFe = await VotingzxEf1FW.totalSupplyAt.call(uintSrSAjj9, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingpIfzMjf = await Voting.new({from: accounts[4]});
		const addressYDlAxOa = accounts[0]
		const uintXgcbo0F = BigInt("1774")
		const addressRJQdFS8 = accounts[4]
		const boolIOjX3jq = await VotingpIfzMjf.isMinter.call(addressYDlAxOa, {from: accounts[1]});
		const uint256nLlGLFx = await VotingpIfzMjf.balanceOfAt.call(addressRJQdFS8, uintXgcbo0F, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingS8jbKU7 = await Voting.new({from: accounts[0]});
		const uintPhkYq3 = BigInt("1188")
		const addressHydTFLQ = accounts[1]
		const addressgeQHD1U = accounts[0]
		const uintsyJMI5N = BigInt("365")
		const addressWDLTCRP = accounts[5]
		const boolPnF2wit = await VotingS8jbKU7.decreaseAllowance.call(addressHydTFLQ, uintPhkYq3, {from: accounts[4]});
		await VotingS8jbKU7.onlyRegistry.call({from: accounts[1]});
		const addressHI0mZt = await VotingS8jbKU7.updateRegistry.call(addressgeQHD1U, {from: accounts[0]});
		const uint256gDEKuSX = await VotingS8jbKU7.totalSupply.call({from: accounts[4]});
		const boolHKmQPwp = await VotingS8jbKU7.increaseAllowance.call(addressWDLTCRP, uintsyJMI5N, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressucmqa2G = accounts[2]
		const VotingqGYTDrw = await Voting.new(addressucmqa2G, {from: accounts[2]});
		const uintPEDgxLB = BigInt("1952")
		const uintebtdje = BigInt("1620")
		const addresspCXKzt9 = accounts[0]
		const uint256tZt5fPM = await VotingqGYTDrw.pause.call(uintPEDgxLB, {from: accounts[2]});
		const uint256dfnlZsk = await VotingqGYTDrw.balanceOfAt.call(addresspCXKzt9, uintebtdje, {from: accounts[4]});
		const uint256QXxRaT8 = await VotingqGYTDrw.snapshot.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressw0TTAO8 = "0x0000000000000000000000000000000000000001"
		const VotingFTBm1EP = await Voting.new(addressw0TTAO8, {from: accounts[1]});
		const addresslMHdfh0 = accounts[3]
		const uintxEm9Gb = BigInt("1969")
		const addresss35x59o = accounts[3]
		const addressuy9I1v = accounts[2]
		const uintVgCINWK = BigInt("767")
		const boolSW8dzRg = await VotingFTBm1EP.isValidVerifierAddress.call(addresslMHdfh0, {from: accounts[3]});
		const boolqCnWPRJ = await VotingFTBm1EP.increaseAllowance.call(addresss35x59o, uintxEm9Gb, {from: accounts[1]});
		const boolZpnw17 = await VotingFTBm1EP.isExchangeFactory.call(addressuy9I1v, {from: accounts[5]});
		const uint256f1oKFrM = await VotingFTBm1EP.burn.call(uintVgCINWK, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingzWDuZ7l = await Voting.new({from: accounts[3]});
		const uint4a6T30 = BigInt("493")
		const uintPDzcWe8 = BigInt("1500")
		const addressQEQ2gIy = accounts[0]
		const uint256nJIn55h = await VotingzWDuZ7l.pause.call(uint4a6T30, {from: "0x0000000000000000000000000000000000000001"});
		await VotingzWDuZ7l.renounceOwnership.call({from: accounts[5]});
		await VotingzWDuZ7l.onRegistryRefresh.call({from: accounts[3]});
		const booljelrDCo = await VotingzWDuZ7l.transfer.call(addressQEQ2gIy, uintPDzcWe8, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressYDBFXFu = accounts[1]
		const VotingUD8Hikx = await Voting.new(addressYDBFXFu, {from: "0x0000000000000000000000000000000000000001"});
		const uintFan964U = BigInt("445")
		const uintsm0Uv69 = BigInt("409")
		const addressSXY74zo = accounts[4]
		const uintTnYvd8 = BigInt("1829")
		await VotingUD8Hikx.onlyRegistry.call({from: accounts[0]});
		const uint256JFf9ffk = await VotingUD8Hikx.approve.call(uintFan964U, {from: "0x0000000000000000000000000000000000000001"});
		const addressqEwgYJH = await VotingUD8Hikx.burnFrom.call(addressSXY74zo, uintsm0Uv69, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uhVxpQ2 = await VotingUD8Hikx.resolve.call(uintTnYvd8, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressIKpsVlQ = accounts[1]
		const VotingEC7W1b4 = await Voting.new(addressIKpsVlQ, {from: accounts[4]});
		const addressI1cWyEO = accounts[3]
		const uintpYQ4qE = BigInt("69")
		const addressU5x0QIY = accounts[2]
		const boolEI0j8t8 = await VotingEC7W1b4.isValidOracleAddress.call(addressI1cWyEO, {from: accounts[0]});
		const bool1vDoh6 = await VotingEC7W1b4.transfer.call(addressU5x0QIY, uintpYQ4qE, {from: accounts[4]});
		await VotingEC7W1b4.requiresLiquidityTokenSnapshotAccess.call({from: accounts[0]});
		await VotingEC7W1b4.onlyVotingSystem.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressZMsZ1Vv = accounts[3]
		const VotingGCryHO = await Voting.new(addressZMsZ1Vv, {from: accounts[4]});
		const uinto932k0 = BigInt("1399")
		const stringbPfBwFR = "znJ15BpFYKJEmd67FIIieroGueaFhOAbX5OEAuApApQ0Huoz8asbQik9M8IMoYxsdl3kH9G47dU"
		const stringi1lSdPv = "e"
		const stringkeVR0By = "9y3JgQ79RLBGKgT4mUR4WGVA7bYCjJp"
		const byteCiAtRi = "0x0e17040c17011b15081d060d030b0a021f"
		const addressiDOxHF = accounts[0]
		const uint256t75zVUn = await VotingGCryHO.approve.call(uinto932k0, {from: accounts[3]});
		await VotingGCryHO.onlyExchangeFactory.call({from: accounts[1]});
		const 
qUJ7JRN = await VotingGCryHO.createProposal.call(addressiDOxHF, byteCiAtRi, stringkeVR0By, stringi1lSdPv, stringbPfBwFR, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressTDup50h = accounts[5]
		const VotingCsh0HHn = await Voting.new(addressTDup50h, {from: accounts[1]});
		const addresshNfPOhT = accounts[1]
		const uintBwpQcVr = BigInt("1928")
		const addressQ3dtxXO = accounts[1]
		const addressWlCwem6 = await VotingCsh0HHn.owner.call({from: accounts[4]});
		await VotingCsh0HHn.onRegistryRefresh.call({from: accounts[1]});
		const uint256tscNWFb = await VotingCsh0HHn.totalSupply.call({from: accounts[4]});
		const boolsfAA8Uj = await VotingCsh0HHn.didAddressVote.call(uintBwpQcVr, addresshNfPOhT, {from: accounts[0]});
		const boolhsCgUk6 = await VotingCsh0HHn.isExchangeFactory.call(addressQ3dtxXO, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingyrvvmVC = await Voting.new({from: accounts[1]});
		const uintlyER0ki = BigInt("265")
		const addressTYAITvY = accounts[3]
		const addressO1G9Sog = accounts[4]
		const uint8C9JeApt = await VotingyrvvmVC.decimals.call({from: accounts[1]});
		const uint256mdlNIW5 = await VotingyrvvmVC.snapshot.call({from: "0x0000000000000000000000000000000000000001"});
		const boolLUu1g0k = await VotingyrvvmVC.transfer.call(addressTYAITvY, uintlyER0ki, {from: accounts[5]});
		const boolsnDkCRQ = await VotingyrvvmVC.isValidStamperAddress.call(addressO1G9Sog, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const address7BN8X2 = accounts[2]
		const VotinguvVySj0 = await Voting.new(address7BN8X2, {from: accounts[2]});
		const uintoEoCUAi = BigInt("1998")
		const addressZR0sc39 = accounts[2]
		const addresslOZnG86 = accounts[1]
		const stringNnsbCe = "sf5EgbDyUtg37dNo7EopcRCktAG1Ref0O5CUFANYoApOXLv9KFob1p9IFleRMosgu3rBnDojGzjzu5s26eXs"
		const stringj7V5PB = "8fnc8JltAoAP62HYMK2aF2QX6TgUM996STxYjuk"
		const stringjqzJPeb = "HswMoMLMT1AHRotbRrXDANhZW83y"
		const byteUmHxh7x = "0x071f16040702160a0303180a07010f121d101f041d20171413081406"
		const addresscSl4v20 = accounts[2]
		const boolQN8uTTH = await VotinguvVySj0.approve.call(addressZR0sc39, uintoEoCUAi, {from: accounts[0]});
		const addresstjgbrHN = await VotinguvVySj0.ownableUpgrade.call(addresslOZnG86, {from: accounts[4]});
		const 
mob2QI7 = await VotinguvVySj0.createProposal.call(addresscSl4v20, byteUmHxh7x, stringjqzJPeb, stringj7V5PB, stringNnsbCe, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressXZUR63b = accounts[0]
		const Votinge1uvLLm = await Voting.new(addressXZUR63b, {from: accounts[5]});
		const uintqFKolDN = BigInt("722")
		const uintTuA0x0W = BigInt("1033")
		const uintiNYYrmJ = BigInt("306")
		const addressrWR4fJ1 = accounts[0]
		const addressbqGACIs = accounts[2]
		const addressNseaoN = accounts[2]
		const uint256hfM7CXD = await Votinge1uvLLm.resolve.call(uintqFKolDN, {from: accounts[5]});
		const uint256Awp8BTw = await Votinge1uvLLm.burn.call(uintTuA0x0W, {from: accounts[0]});
		const uint256leivzfw = await Votinge1uvLLm.totalSupplyAt.call(uintiNYYrmJ, {from: accounts[1]});
		const addressdHF0gZg = await Votinge1uvLLm.addMinter.call(addressrWR4fJ1, {from: accounts[1]});
		const uint256KsQ0MTM = await Votinge1uvLLm.allowance.call(addressNseaoN, addressbqGACIs, {from: accounts[3]});
	});
})