const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressbl48sKB = accounts[4]
		const VotingKhuUglS = await Voting.new(addressbl48sKB, {from: accounts[2]});
		const addresslrAvMr = accounts[1]
		const uintvKtV7m6 = BigInt("1522")
		const address6YBEVV = accounts[3]
		const uint82yf2F = BigInt("916")
		const uintLnF6RwL = BigInt("684")
		const addressmhWfOYP = accounts[3]
		await VotingKhuUglS.nonReentrant.call({from: accounts[0]});
		const boollZJIM7g = await VotingKhuUglS.isMinter.call(addresslrAvMr, {from: accounts[3]});
		const uint256TJzSkxA = await VotingKhuUglS.pause.call(uintvKtV7m6, {from: accounts[4]});
		const boolafegUSc = await VotingKhuUglS.didAddressVote.call(uint82yf2F, address6YBEVV, {from: accounts[2]});
		const boolkYMPUR7 = await VotingKhuUglS.increaseAllowance.call(addressmhWfOYP, uintLnF6RwL, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingvauhT9e = await Voting.new({from: accounts[3]});
		const uintFSVZUaT = BigInt("606")
		const uintCDTbXjq = BigInt("310")
		const uint8Jd1tjst = await VotingvauhT9e.decimals.call({from: accounts[0]});
		const uint256lr9GiWb = await VotingvauhT9e.veto.call(uintFSVZUaT, {from: accounts[0]});
		const uint256WLMm7JD = await VotingvauhT9e.veto.call(uintCDTbXjq, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressVUnsR9c = accounts[0]
		const VotingztctkI = await Voting.new(addressVUnsR9c, {from: accounts[2]});
		const uintCPuu818 = BigInt("874")
		const addressiRpkoh8 = accounts[1]
		const address61YsaC = accounts[3]
		const addressx9gNXfu = await VotingztctkI.owner.call({from: accounts[0]});
		await VotingztctkI.renounceMinter.call({from: accounts[2]});
		await VotingztctkI.onlyRegistry.call({from: accounts[2]});
		await VotingztctkI.onlyOracle.call({from: accounts[0]});
		const boolr1sG7jp = await VotingztctkI.transfer.call(addressiRpkoh8, uintCPuu818, {from: accounts[5]});
		const uint256y5bZCqf = await VotingztctkI.balanceOf.call(address61YsaC, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressdcBCeZ = accounts[2]
		const VotingmXDv19v = await Voting.new(addressdcBCeZ, {from: accounts[0]});
		const addressSRsreLR = accounts[3]
		const addressLI4VNFL = accounts[2]
		const uintJjz7pDJ = BigInt("554")
		const addressZo2amuu = accounts[1]
		const addresssZZoHSv = accounts[4]
		const boolFgbzqmt = await VotingmXDv19v.isValidVerifierAddress.call(addressSRsreLR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GTiPCOS = await VotingmXDv19v.totalSupply.call({from: accounts[5]});
		const boolPBkHSHm = await VotingmXDv19v.isValidOracleAddress.call(addressLI4VNFL, {from: accounts[1]});
		const boolNnXuwGQ = await VotingmXDv19v.approve.call(addressZo2amuu, uintJjz7pDJ, {from: "0x0000000000000000000000000000000000000001"});
		const addressIVSMmkw = await VotingmXDv19v.ownableUpgrade.call(addresssZZoHSv, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingnbF8paV = await Voting.new({from: accounts[5]});
		const addresspSMYaro = accounts[1]
		const uintiM7V7WG = BigInt("1794")
		const addressBqohnWM = "0x0000000000000000000000000000000000000001"
		const stringfNerrli = "EqlbYDGUoeN2Nt"
		const stringAXeSG4Q = "YHiZ1DtOddiKe23gXQawwpK03w1C2Q"
		const stringJYAMsFf = "V4PmpQ6Ge7oS1dS44P04MwrXAHlI8ym7gAzh9FGke"
		const byteWhqU2Wk = "0x201614111a1b0512"
		const addressvs3OXM8 = accounts[2]
		const addressHrbDTt = await VotingnbF8paV.transferOwnership.call(addresspSMYaro, {from: accounts[2]});
		const uint256x8berv8 = await VotingnbF8paV.balanceOfAt.call(addressBqohnWM, uintiM7V7WG, {from: accounts[4]});
		const 
IV9GNj1 = await VotingnbF8paV.createProposal.call(addressvs3OXM8, byteWhqU2Wk, stringJYAMsFf, stringAXeSG4Q, stringfNerrli, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressmY7u6v7 = accounts[5]
		const VotingFItltcO = await Voting.new(addressmY7u6v7, {from: accounts[2]});
		const addressn2g29LB = accounts[3]
		const uintDYzWSzp = BigInt("1372")
		const uintbogipkc = BigInt("916")
		const uintuYgbc7k = BigInt("1953")
		const boolYHLScaK = await VotingFItltcO.didAddressVote.call(uintDYzWSzp, addressn2g29LB, {from: accounts[1]});
		const uint256XCXZ4Vf = await VotingFItltcO.burn.call(uintbogipkc, {from: accounts[0]});
		const uint256aRmke9l = await VotingFItltcO.approve.call(uintuYgbc7k, {from: accounts[3]});
		await VotingFItltcO.onlyMessageProcessor.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressizoVUci = accounts[2]
		const VotingYUxV7XD = await Voting.new(addressizoVUci, {from: "0x0000000000000000000000000000000000000001"});
		const uintXCGRiK5 = BigInt("1564")
		const addressRxCbMoi = accounts[3]
		const addressYPvIZQ1 = accounts[1]
		const uint5Xxmja = BigInt("765")
		const uint256bwSyzE = await VotingYUxV7XD.veto.call(uintXCGRiK5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VKXsOBo = await VotingYUxV7XD.allowance.call(addressYPvIZQ1, addressRxCbMoi, {from: accounts[0]});
		await VotingYUxV7XD.onlyExchange.call({from: accounts[4]});
		const uint256xzM9j2b = await VotingYUxV7XD.veto.call(uint5Xxmja, {from: accounts[1]});
		const uint256uDl9iIF = await VotingYUxV7XD.snapshot.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressnGIiac4 = accounts[5]
		const Votingd6teh1K = await Voting.new(addressnGIiac4, {from: accounts[1]});
		const stringiU1nHIt = "Rep5hrWzAmvK1PO1f1B3wqd"
		const stringHJlnz0z = "kDXYlSkikM"
		const stringJ6suBsc = "XfYrj44kybn"
		const byteeieicQe = "0x0002181a0c0d141709101c09091d150c0515040f0e050c0c1b10"
		const address006xHC = accounts[3]
		const uintXsaFiU4 = BigInt("25")
		const addressdL5R4qJ = accounts[0]
		const uintcMZwtAP = BigInt("1587")
		const addressa6njDWJ = accounts[5]
		const 
aODbBGR = await Votingd6teh1K.createProposal.call(address006xHC, byteeieicQe, stringJ6suBsc, stringHJlnz0z, stringiU1nHIt, {from: accounts[3]});
		await Votingd6teh1K.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressLocHbk4 = await Votingd6teh1K.burnFrom.call(addressdL5R4qJ, uintXsaFiU4, {from: accounts[4]});
		const boolNlzpXy = await Votingd6teh1K.increaseAllowance.call(addressa6njDWJ, uintcMZwtAP, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addresshZQJueO = "0x0000000000000000000000000000000000000001"
		const VotingnNwnaZ4 = await Voting.new(addresshZQJueO, {from: accounts[3]});
		const addressqwKMSCd = "0x0000000000000000000000000000000000000001"
		const uintLakPLnD = BigInt("4")
		const boolDgyzD53 = await VotingnNwnaZ4.didAddressVote.call(uintLakPLnD, addressqwKMSCd, {from: accounts[3]});
		await VotingnNwnaZ4.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressct4wrA = accounts[5]
		const Votingd6teh1K = await Voting.new(addressct4wrA, {from: accounts[1]});
		const uintjuM9Hll = BigInt("1938")
		const stringiU1nHIt = "Rep5hrWzAmvK1PO1f1B3wqd"
		const stringHJlnz0z = "kDXYlSkikM"
		const stringJ6suBsc = "XfYrj44kybn"
		const byteKNqcYOz = "0x0002181a0c0d141709101c09091d150c0515040f0e050c0c1b10"
		const addressyrZssNL = accounts[3]
		const uintEUhXbYo = BigInt("25")
		const addressoN2a13G = accounts[0]
		const uinta0AGyOC = BigInt("1587")
		const addresshkCEdRb = accounts[5]
		const uint256BIgUGzR = await Votingd6teh1K.pause.call(uintjuM9Hll, {from: accounts[0]});
		const 
aODbBGR = await Votingd6teh1K.createProposal.call(addressyrZssNL, byteKNqcYOz, stringJ6suBsc, stringHJlnz0z, stringiU1nHIt, {from: accounts[3]});
		await Votingd6teh1K.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressLocHbk4 = await Votingd6teh1K.burnFrom.call(addressoN2a13G, uintEUhXbYo, {from: accounts[4]});
		const boolNlzpXy = await Votingd6teh1K.increaseAllowance.call(addresshkCEdRb, uinta0AGyOC, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const Votingx5bsvSL = await Voting.new({from: accounts[4]});
		const uintmxbNPoh = BigInt("262")
		const addressA8sGmXh = accounts[2]
		const addresssoRv6sU = await Votingx5bsvSL.owner.call({from: accounts[5]});
		await Votingx5bsvSL.onRegistryRefresh.call({from: accounts[0]});
		const boolcUgPquJ = await Votingx5bsvSL.transfer.call(addressA8sGmXh, uintmxbNPoh, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressekqCD0O = accounts[5]
		const Votingd6teh1K = await Voting.new(addressekqCD0O, {from: accounts[1]});
		const addressxyb6Vlh = accounts[1]
		const uintT6iiTL = BigInt("25")
		const addressyCloebI = accounts[0]
		const uinttfUZKSr = BigInt("1587")
		const addressKPg4VFC = accounts[5]
		const boolXiesuJE = await Votingd6teh1K.isVotingSystem.call(addressxyb6Vlh, {from: accounts[5]});
		const addressLocHbk4 = await Votingd6teh1K.burnFrom.call(addressyCloebI, uintT6iiTL, {from: accounts[4]});
		const boolNlzpXy = await Votingd6teh1K.increaseAllowance.call(addressKPg4VFC, uinttfUZKSr, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addresskpWTEcA = "0x0000000000000000000000000000000000000001"
		const VotingnNwnaZ4 = await Voting.new(addresskpWTEcA, {from: accounts[3]});
		const boolSZ3KAqi = true
		const uintDkuGbe4 = BigInt("1502")
		const addresshOvuV3C = accounts[4]
		const uintSjvv06 = BigInt("1685")
		const addresseqWfu9v = "0x0000000000000000000000000000000000000001"
		const uintFXIrNj4 = BigInt("4")
		const uintkJGdxLq = BigInt("221")
		const addresscxOsS8R = accounts[0]
		const addressV7aB7z = accounts[0]
		const uint256emvosdE = await VotingnNwnaZ4.vote.call(uintDkuGbe4, boolSZ3KAqi, {from: accounts[3]});
		const addressQExdN2v = await VotingnNwnaZ4.updateRegistry.call(addresshOvuV3C, {from: accounts[2]});
		const uint256CIH3AEW = await VotingnNwnaZ4.totalSupplyAt.call(uintSjvv06, {from: accounts[0]});
		const boolDgyzD53 = await VotingnNwnaZ4.didAddressVote.call(uintFXIrNj4, addresseqWfu9v, {from: accounts[3]});
		const boolopfcigt = await VotingnNwnaZ4.transferFrom.call(addressV7aB7z, addresscxOsS8R, uintkJGdxLq, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressDLbnVoF = accounts[5]
		const Votingd6teh1K = await Voting.new(addressDLbnVoF, {from: accounts[1]});
		const addressiylLMss = accounts[4]
		const uintUM5VfZY = BigInt("1138")
		const addressbj3Cmg5 = accounts[2]
		const stringiU1nHIt = "Rep5hrWzAmvK1PO1f1B3wqd"
		const stringHJlnz0z = "kDXYlSkikM"
		const stringJ6suBsc = "XfYrj44kybn"
		const bytelOIvrk7 = "0x0002181a0c0d141709101c09091d150c0515040f0e050c0c1b10"
		const addressn15VnmP = accounts[5]
		const uintK9S1iGy = BigInt("76")
		const addressaZu3pYf = accounts[0]
		const addressjgsURPY = accounts[0]
		const boolOjQkfTT = await Votingd6teh1K.isValidOracleAddress.call(addressiylLMss, {from: accounts[2]});
		const booleZOn8N = await Votingd6teh1K.decreaseAllowance.call(addressbj3Cmg5, uintUM5VfZY, {from: accounts[0]});
		const 
aODbBGR = await Votingd6teh1K.createProposal.call(addressn15VnmP, bytelOIvrk7, stringJ6suBsc, stringHJlnz0z, stringiU1nHIt, {from: accounts[3]});
		const addressLocHbk4 = await Votingd6teh1K.burnFrom.call(addressaZu3pYf, uintK9S1iGy, {from: accounts[4]});
		const boolermiVCT = await Votingd6teh1K.isExchangeFactory.call(addressjgsURPY, {from: accounts[2]});
		await Votingd6teh1K.onlyOracle.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingDhbn2XT = await Voting.new({from: accounts[1]});
		const uintThQjS8a = BigInt("1762")
		const uint256uo3K2FF = await VotingDhbn2XT.pause.call(uintThQjS8a, {from: accounts[2]});
		await VotingDhbn2XT.requiresLiquidityTokenSnapshotAccess.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingN6JPrmI = await Voting.new({from: accounts[2]});
		const uintv26fc9w = BigInt("1928")
		const uintVx1WO6v = BigInt("710")
		const uint256aQAj2im = await VotingN6JPrmI.approve.call(uintv26fc9w, {from: accounts[2]});
		const uint256ywSqi4 = await VotingN6JPrmI.veto.call(uintVx1WO6v, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressoU2BZYg = "0x0000000000000000000000000000000000000001"
		const VotingnNwnaZ4 = await Voting.new(addressoU2BZYg, {from: accounts[3]});
		const uintfzFNFzm = BigInt("700")
		const boolSZ3KAqi = true
		const uintJbbVukG = BigInt("1502")
		const uintvNdGuxM = BigInt("1685")
		const uint256vPFVse = await VotingnNwnaZ4.approve.call(uintfzFNFzm, {from: accounts[3]});
		const uint256emvosdE = await VotingnNwnaZ4.vote.call(uintJbbVukG, boolSZ3KAqi, {from: accounts[3]});
		const uint256CIH3AEW = await VotingnNwnaZ4.totalSupplyAt.call(uintvNdGuxM, {from: accounts[0]});
		const addressw2NaFO1 = await VotingnNwnaZ4.getRegistryAddress.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressONQaD1 = accounts[5]
		const Votingd6teh1K = await Voting.new(addressONQaD1, {from: accounts[1]});
		const addressmfSIDkg = accounts[3]
		const addressE1fkKXd = accounts[2]
		const stringiU1nHIt = "Rep5hrWzAmvK1PO1f1B3wqd"
		const stringHJlnz0z = "kDXYlSkikM"
		const stringJ6suBsc = "XfYrj44kybn"
		const byteYRcQV9Z = "0x0002181a0c0d141709101c09091d150c0515040e0e050c0c1b10"
		const addressdUAiArV = accounts[5]
		const boolSDPjdq4 = await Votingd6teh1K.isValidStamperAddress.call(addressmfSIDkg, {from: accounts[1]});
		const addresskFXEUet = await Votingd6teh1K.updateRegistry.call(addressE1fkKXd, {from: accounts[2]});
		const 
aODbBGR = await Votingd6teh1K.createProposal.call(addressdUAiArV, byteYRcQV9Z, stringJ6suBsc, stringHJlnz0z, stringiU1nHIt, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const address0Mxewy = "0x0000000000000000000000000000000000000001"
		const VotingnNwnaZ4 = await Voting.new(address0Mxewy, {from: accounts[3]});
		const uintLFAqaA1 = BigInt("1592")
		const addressnb7A3N1 = accounts[1]
		const boolSZ3KAqi = true
		const uintgJ8pVeH = BigInt("1510")
		const uintV1We4C3 = BigInt("747")
		const addressA3UPKUc = accounts[2]
		const uintsw8W4z4 = BigInt("1931")
		const addressFOtSkD6 = "0x0000000000000000000000000000000000000001"
		const addresshctwdby = accounts[6]
		const uintuc7cO5h = BigInt("1685")
		const boolMn8v5kJ = await VotingnNwnaZ4.approve.call(addressnb7A3N1, uintLFAqaA1, {from: accounts[4]});
		const uint256emvosdE = await VotingnNwnaZ4.vote.call(uintgJ8pVeH, boolSZ3KAqi, {from: accounts[3]});
		const boolSmhm7p2 = await VotingnNwnaZ4.transfer.call(addressA3UPKUc, uintV1We4C3, {from: accounts[4]});
		const boolBtD0eKg = await VotingnNwnaZ4.mint.call(addressFOtSkD6, uintsw8W4z4, {from: accounts[2]});
		const addressQExdN2v = await VotingnNwnaZ4.updateRegistry.call(addresshctwdby, {from: accounts[2]});
		const uint256CIH3AEW = await VotingnNwnaZ4.totalSupplyAt.call(uintuc7cO5h, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressJkrE7L8 = accounts[5]
		const Votingd6teh1K = await Voting.new(addressJkrE7L8, {from: accounts[1]});
		const addressoN3MeUF = "0x0000000000000000000000000000000000000001"
		const stringiU1nHIt = "Rep5hrWzAmvK1PO1f1B3wqd"
		const stringHJlnz0z = "kDXYlSkikM"
		const stringJ6suBsc = "XfYrj44kybn"
		const bytelrBPOlX = "0x0002181a0c0d141709101c09091d150c0515040f0e050c0c1b10"
		const addressJnZB4ne = accounts[5]
		const uintdjFHJYi = BigInt("36")
		const addressE2vXOUu = accounts[0]
		const uintG0aHICI = BigInt("1914")
		const boolKjj5HR = await Votingd6teh1K.isExchangeFactory.call(addressoN3MeUF, {from: accounts[0]});
		const boolhDimF0b = await Votingd6teh1K.isOwner.call({from: accounts[3]});
		const 
aODbBGR = await Votingd6teh1K.createProposal.call(addressJnZB4ne, bytelrBPOlX, stringJ6suBsc, stringHJlnz0z, stringiU1nHIt, {from: accounts[3]});
		const addressLocHbk4 = await Votingd6teh1K.burnFrom.call(addressE2vXOUu, uintdjFHJYi, {from: accounts[4]});
		const uint256aE7gC6j = await Votingd6teh1K.pause.call(uintG0aHICI, {from: accounts[4]});
	});
})