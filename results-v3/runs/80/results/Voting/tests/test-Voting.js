const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const VotingzwiyMv = await Voting.new({from: accounts[2]});
		const uintfenOUy0 = BigInt("658")
		const uintCPg41hM = BigInt("1584")
		const addressXUyLTZ5 = accounts[1]
		const uintJHYEzOU = BigInt("48")
		const addressbdnKHv4 = accounts[3]
		const uint256t7o56KE = await VotingzwiyMv.veto.call(uintfenOUy0, {from: accounts[2]});
		const uint2568UCLxZ = await VotingzwiyMv.balanceOfAt.call(addressXUyLTZ5, uintCPg41hM, {from: accounts[1]});
		await VotingzwiyMv.onlyExchange.call({from: accounts[3]});
		const boolg1KDJnp = await VotingzwiyMv.transfer.call(addressbdnKHv4, uintJHYEzOU, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressXknTNu2 = accounts[3]
		const Votingjyssh3j = await Voting.new(addressXknTNu2, {from: accounts[0]});
		const addresstMiqyUr = accounts[1]
		const uintxe4GHke = BigInt("1513")
		const addressID8Rdtd = await Votingjyssh3j.ownableUpgrade.call(addresstMiqyUr, {from: accounts[2]});
		await Votingjyssh3j.renounceMinter.call({from: accounts[0]});
		await Votingjyssh3j.onlyOwner.call({from: accounts[0]});
		await Votingjyssh3j.onlyOwner.call({from: accounts[1]});
		const uint256W2bI9Xr = await Votingjyssh3j.resolve.call(uintxe4GHke, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressH6xeJDg = accounts[0]
		const Votingk9vrBC = await Voting.new(addressH6xeJDg, {from: accounts[2]});
		const stringO4ouflV = "iQLacH0kt43YimnGl4Sz9UPBuK2Vz"
		const stringFs1hBon = "3w3FOuIe2tyJmrZ5VzCuYUeg586qUHlMzJasRixMrwhDfpMLvbxgZdaMqU2cgcV3wgMOd6Rn3cLQUrY"
		const stringwrLrnc = "otPe2nqlozP9cJJxgT7F2dDDLsHDvRzq7YyVNQ34CYoCoNCImQhmjxscTVVOL9fKplQun5"
		const bytej47dkp0 = "0x1b13121711171c1a07041c070d"
		const addressDem2URi = accounts[1]
		const 
Jg4s6ku = await Votingk9vrBC.createProposal.call(addressDem2URi, bytej47dkp0, stringwrLrnc, stringFs1hBon, stringO4ouflV, {from: accounts[2]});
		await Votingk9vrBC.onlyVotingSystem.call({from: accounts[0]});
		const boolZ68QvP4 = await Votingk9vrBC.isOwner.call({from: accounts[4]});
		const uint256oOPAwB = await Votingk9vrBC.totalSupply.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressykJ916 = accounts[3]
		const VotingAgn1H9s = await Voting.new(addressykJ916, {from: accounts[5]});
		const uintuVS85tT = BigInt("361")
		const addressCLVEroO = accounts[2]
		const uintolIW29v = BigInt("266")
		const addressKNa86tx = accounts[0]
		const uintRdjR2VJ = BigInt("479")
		const stringKUljMJk = "jyhoqM"
		const stringpCVWGwe = "gnq0ncYjrB3PcSzDeQgblb"
		const stringBy4PgwA = "ahbo51Fs0Cn1oDQV68HrzwKsTHJIEgs8OtIKr6Ec4Px8XwG9RjYXRYin0Xry"
		const byteIGQK8p4 = "0x191f06191f160d150914161907131f"
		const addressxoFYw7R = accounts[3]
		const uint256RwXcETK = await VotingAgn1H9s.balanceOfAt.call(addressCLVEroO, uintuVS85tT, {from: accounts[2]});
		const boolCnVsA85 = await VotingAgn1H9s.increaseAllowance.call(addressKNa86tx, uintolIW29v, {from: accounts[2]});
		const uint256sjYeFr = await VotingAgn1H9s.totalSupply.call({from: accounts[2]});
		await VotingAgn1H9s.renounceMinter.call({from: accounts[5]});
		const uint256F5guMn0 = await VotingAgn1H9s.pause.call(uintRdjR2VJ, {from: "0x0000000000000000000000000000000000000001"});
		const 
xfr16WZ = await VotingAgn1H9s.createProposal.call(addressxoFYw7R, byteIGQK8p4, stringBy4PgwA, stringpCVWGwe, stringKUljMJk, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressYDz0COV = accounts[4]
		const VotingBmXoyxH = await Voting.new(addressYDz0COV, {from: accounts[1]});
		const addressT4KERfI = accounts[4]
		const uintTUYDcFs = BigInt("1489")
		const addressZEpKtNK = accounts[0]
		const addresssoENnDs = accounts[2]
		const uintx2v42d = BigInt("1470")
		const addressMbmvQ2C = accounts[4]
		const boolQjMbigT = await VotingBmXoyxH.isVotingSystem.call(addressT4KERfI, {from: accounts[1]});
		const boolbp3Fcu6 = await VotingBmXoyxH.transferFrom.call(addresssoENnDs, addressZEpKtNK, uintTUYDcFs, {from: accounts[3]});
		const addressru9krJy = await VotingBmXoyxH.burnFrom.call(addressMbmvQ2C, uintx2v42d, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingGN5Gysp = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const addressCy1SlXD = accounts[5]
		const addressjcYoj5r = accounts[4]
		const addressSxqOpB9 = accounts[5]
		const addressI0NyFqC = await VotingGN5Gysp.addMinter.call(addressCy1SlXD, {from: accounts[3]});
		const addressKbWP8FV = await VotingGN5Gysp.transferOwnership.call(addressjcYoj5r, {from: accounts[2]});
		await VotingGN5Gysp.nonReentrant.call({from: accounts[5]});
		const addresstiJZ2JQ = await VotingGN5Gysp.getRegistryAddress.call({from: accounts[4]});
		const boolg2LUsaD = await VotingGN5Gysp.isValidOracleAddress.call(addressSxqOpB9, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addresswQj29k6 = accounts[0]
		const VotingNELey3i = await Voting.new(addresswQj29k6, {from: accounts[0]});
		const addressK4leDWW = accounts[1]
		const uints6Tw3QK = BigInt("748")
		const address6KfR1S = accounts[4]
		const uintmWwaQq = BigInt("1024")
		const addressyQ3fizU = accounts[1]
		const addressO4Yfm0H = accounts[0]
		const boolFm66rJb = await VotingNELey3i.isOwner.call({from: accounts[5]});
		const boolACVSBl4 = await VotingNELey3i.isExchangeFactory.call(addressK4leDWW, {from: accounts[1]});
		const addressqcw4K8 = await VotingNELey3i.burnFrom.call(address6KfR1S, uints6Tw3QK, {from: accounts[0]});
		const boolkIJ44bW = await VotingNELey3i.transfer.call(addressyQ3fizU, uintmWwaQq, {from: accounts[5]});
		const boolbHmvDrb = await VotingNELey3i.isValidOracleAddress.call(addressO4Yfm0H, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressnMBmCwY = accounts[3]
		const VotingAgn1H9s = await Voting.new(addressnMBmCwY, {from: accounts[5]});
		const boolfaNr1zR = true
		const uintk8QdVa7 = BigInt("1746")
		const uintiA30qWJ = BigInt("361")
		const addresswcjgDGP = accounts[2]
		const uintAUrgI9v = BigInt("266")
		const addressNttarML = accounts[0]
		const uintb3HJvAj = BigInt("479")
		const stringKUljMJk = "jyhoqM"
		const stringpCVWGwe = "gnq0ncYjrB3PcSzDeQgblb"
		const stringBy4PgwA = "ahbo51Fs0Cn1oDQV68HrzwKsTHJIEgs8OtIKr6Ec4Px8XwG9RjYXRYin0Xry"
		const byteVv618rS = "0x191f06191f160d150914161907131f"
		const addresszHCTNPT = accounts[3]
		const uint256k81NxK7 = await VotingAgn1H9s.vote.call(uintk8QdVa7, boolfaNr1zR, {from: accounts[2]});
		const uint256RwXcETK = await VotingAgn1H9s.balanceOfAt.call(addresswcjgDGP, uintiA30qWJ, {from: accounts[2]});
		await VotingAgn1H9s.onlyMessageProcessor.call({from: accounts[1]});
		const boolCnVsA85 = await VotingAgn1H9s.increaseAllowance.call(addressNttarML, uintAUrgI9v, {from: accounts[2]});
		const uint256sjYeFr = await VotingAgn1H9s.totalSupply.call({from: accounts[2]});
		await VotingAgn1H9s.renounceMinter.call({from: accounts[5]});
		const uint256F5guMn0 = await VotingAgn1H9s.pause.call(uintb3HJvAj, {from: "0x0000000000000000000000000000000000000001"});
		const 
xfr16WZ = await VotingAgn1H9s.createProposal.call(addresszHCTNPT, byteVv618rS, stringBy4PgwA, stringpCVWGwe, stringKUljMJk, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressR5WSyQM = accounts[0]
		const Votingk9vrBC = await Voting.new(addressR5WSyQM, {from: accounts[2]});
		const addressBvZvTFw = accounts[2]
		const stringO4ouflV = "iQLacH0kt43YimnGl4Sz9UPBuK2Vz"
		const stringFs1hBon = "3w3FOuIe2tyJmrZ5VzCuYUeg586qUHlMzJasRixMrwhDfpMLvbxgZdaMqU2cgcV3wgMOd6Rn3cLQUrY"
		const stringwrLrnc = "otPe2nqlozP9cJJxgT7F2dDDLsHDvRzq7YyVNQ34CYoCoNCImQhmjxscTVVOL9fKplQun5"
		const byteCOVLtbt = "0x1b13141711171c1a07041c070d"
		const addressO1v7OIw = accounts[1]
		const addressiqU1P1Q = accounts[2]
		const booleJxXZHw = await Votingk9vrBC.isValidStamperAddress.call(addressBvZvTFw, {from: accounts[3]});
		const 
Jg4s6ku = await Votingk9vrBC.createProposal.call(addressO1v7OIw, byteCOVLtbt, stringwrLrnc, stringFs1hBon, stringO4ouflV, {from: accounts[2]});
		await Votingk9vrBC.onlyVotingSystem.call({from: accounts[0]});
		const boolZ68QvP4 = await Votingk9vrBC.isOwner.call({from: accounts[4]});
		const addressyxMloS = await Votingk9vrBC.transferOwnership.call(addressiqU1P1Q, {from: accounts[0]});
		const uint256oOPAwB = await Votingk9vrBC.totalSupply.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addresse33LJLH = accounts[0]
		const Votingk9vrBC = await Voting.new(addresse33LJLH, {from: accounts[2]});
		const uintHJtvchU = BigInt("1976")
		const addressUk3wzZZ = accounts[5]
		const stringO4ouflV = "iQLacH0kt43YimnGl4Sz9UPBuK2Vz"
		const stringFs1hBon = "3w3FOuIe2tyJmrZ5VzCuYUeg586qUHlMzJasRixMrwhDfpMLvbxgZdaMqU2cgcV3wgMOd6Rn3cLQUrY"
		const stringwrLrnc = "otPe2nqlozP9cJJxgT7F2dDDLsHDvRzqZYyVNQ34CYoCoNCImQhmjxscTVVOL9fKplQun5"
		const bytedIRSp60 = "0x1b13121711171c1a07041c070d"
		const addressKFdWLsp = accounts[0]
		const boolXnxhUru = await Votingk9vrBC.approve.call(addressUk3wzZZ, uintHJtvchU, {from: accounts[1]});
		const 
Jg4s6ku = await Votingk9vrBC.createProposal.call(addressKFdWLsp, bytedIRSp60, stringwrLrnc, stringFs1hBon, stringO4ouflV, {from: accounts[2]});
		const boolZ68QvP4 = await Votingk9vrBC.isOwner.call({from: accounts[4]});
		const uint256oOPAwB = await Votingk9vrBC.totalSupply.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressYPjdBdM = accounts[2]
		const VotingvsecSlI = await Voting.new(addressYPjdBdM, {from: accounts[1]});
		const addressyYpiOZ1 = accounts[2]
		const uintcKXCtdx = BigInt("1553")
		const uintqhpkiXa = BigInt("68")
		const boolreQT3w = await VotingvsecSlI.didAddressVote.call(uintcKXCtdx, addressyYpiOZ1, {from: accounts[1]});
		const uint256ku2Y6uZ = await VotingvsecSlI.approve.call(uintqhpkiXa, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressZ2tWjv = accounts[3]
		const VotingAgn1H9s = await Voting.new(addressZ2tWjv, {from: accounts[5]});
		const uinto2qTDZp = BigInt("952")
		const boolfaNr1zR = true
		const uintYJfhY4l = BigInt("1746")
		const uintJ3lyJ6n = BigInt("393")
		const addressf6wefhX = accounts[0]
		const uinthpARmsW = BigInt("266")
		const addressHxt9nkC = accounts[0]
		const uintFHAZRVc = BigInt("309")
		const addressFTieea4 = accounts[5]
		const addressZTj4cLR = "0x0000000000000000000000000000000000000001"
		const uintsQ5Jwl3 = BigInt("479")
		const uintljzL5cw = BigInt("493")
		const address7MH9tZ = accounts[3]
		const stringKUljMJk = "jyhoqM"
		const stringpCVWGwe = "gnq0ncYjrB3PcSzDeQgblb"
		const stringBy4PgwA = "ahbo51Fs0Cn1oDQV68HrzwKsTHJIEgs8OtIKr6Ec4Px8XwG9RjYXRYin0Xry"
		const bytezDALz13 = "0x191f06191f160d150914161907131f"
		const addressDFm48rz = accounts[3]
		const uint256QpWYCW0 = await VotingAgn1H9s.approve.call(uinto2qTDZp, {from: accounts[5]});
		const uint256k81NxK7 = await VotingAgn1H9s.vote.call(uintYJfhY4l, boolfaNr1zR, {from: accounts[2]});
		const uint256RwXcETK = await VotingAgn1H9s.balanceOfAt.call(addressf6wefhX, uintJ3lyJ6n, {from: accounts[2]});
		const uint256RxsAoyB = await VotingAgn1H9s.snapshot.call({from: accounts[0]});
		await VotingAgn1H9s.onlyMessageProcessor.call({from: accounts[1]});
		const boolCnVsA85 = await VotingAgn1H9s.increaseAllowance.call(addressHxt9nkC, uinthpARmsW, {from: accounts[2]});
		const boolmcbF7S1 = await VotingAgn1H9s.transferFrom.call(addressZTj4cLR, addressFTieea4, uintFHAZRVc, {from: accounts[1]});
		const uint256sjYeFr = await VotingAgn1H9s.totalSupply.call({from: accounts[2]});
		await VotingAgn1H9s.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await VotingAgn1H9s.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
		const uint256F5guMn0 = await VotingAgn1H9s.pause.call(uintsQ5Jwl3, {from: "0x0000000000000000000000000000000000000001"});
		const uint2562UEyWE = await VotingAgn1H9s.balanceOfAt.call(address7MH9tZ, uintljzL5cw, {from: accounts[1]});
		const 
xfr16WZ = await VotingAgn1H9s.createProposal.call(addressDFm48rz, bytezDALz13, stringBy4PgwA, stringpCVWGwe, stringKUljMJk, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const Votingw3AYm6S = await Voting.new({from: accounts[4]});
		const uintZWLREc = BigInt("1851")
		const uintt6lnle6 = BigInt("1097")
		const addressWnzS2Gc = accounts[2]
		const uint256HmRioXR = await Votingw3AYm6S.burn.call(uintZWLREc, {from: accounts[2]});
		const booluQEICHW = await Votingw3AYm6S.transfer.call(addressWnzS2Gc, uintt6lnle6, {from: accounts[0]});
		await Votingw3AYm6S.onlyVotingSystem.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingAX1lE0J = await Voting.new({from: accounts[5]});
		const uint0CwxPU = BigInt("1085")
		const addressvspwigR = accounts[1]
		await VotingAX1lE0J.onlyVotingSystem.call({from: accounts[4]});
		const boolQL0hZPH = await VotingAX1lE0J.transfer.call(addressvspwigR, uint0CwxPU, {from: accounts[2]});
		const uint8tQOdesk = await VotingAX1lE0J.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await VotingAX1lE0J.onlyOracle.call({from: accounts[5]});
		await VotingAX1lE0J.onlyOracle.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingoKiaau6 = await Voting.new({from: accounts[1]});
		const uintNcFLhok = BigInt("323")
		const addressPpbxRfq = accounts[1]
		const uintdbi0hWm = BigInt("844")
		const addressSFtwRx = accounts[1]
		const booldglOTT2 = await VotingoKiaau6.mint.call(addressPpbxRfq, uintNcFLhok, {from: accounts[0]});
		await VotingoKiaau6.onlyMessageProcessor.call({from: accounts[1]});
		await VotingoKiaau6.renounceMinter.call({from: accounts[1]});
		const boolKriyTi = await VotingoKiaau6.increaseAllowance.call(addressSFtwRx, uintdbi0hWm, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressd3mEHj8 = accounts[3]
		const VotingAgn1H9s = await Voting.new(addressd3mEHj8, {from: accounts[5]});
		const addressURMCDdv = accounts[2]
		const boolfaNr1zR = true
		const uint2cIbnr = BigInt("1746")
		const uintgWqpy1G = BigInt("393")
		const addressb7i5skN = accounts[3]
		const uintUtckzgW = BigInt("241")
		const addressKaQBinO = accounts[0]
		const uintS9KHzZv = BigInt("479")
		const stringKUljMJk = "jyhoqM"
		const stringpCVWGwe = "gnq0ncYjrB3PcSzDeQgblb"
		const stringBy4PgwA = "ahbo51Fs0Cn1oDQV68HrzwKsTHJIEgs8OtIKr6Ec4Px8XwG9jYXRYin0Xry"
		const bytey58vysJ = "0x191f06191f160d150914161907131f"
		const addressH2tGGBm = accounts[3]
		const addressmPGMlcz = await VotingAgn1H9s.ownableUpgrade.call(addressURMCDdv, {from: accounts[5]});
		const uint256k81NxK7 = await VotingAgn1H9s.vote.call(uint2cIbnr, boolfaNr1zR, {from: accounts[2]});
		const uint256RwXcETK = await VotingAgn1H9s.balanceOfAt.call(addressb7i5skN, uintgWqpy1G, {from: accounts[2]});
		await VotingAgn1H9s.onlyMessageProcessor.call({from: accounts[1]});
		const boolCnVsA85 = await VotingAgn1H9s.increaseAllowance.call(addressKaQBinO, uintUtckzgW, {from: accounts[2]});
		await VotingAgn1H9s.renounceOwnership.call({from: accounts[0]});
		const uint256sjYeFr = await VotingAgn1H9s.totalSupply.call({from: accounts[2]});
		const uint256F5guMn0 = await VotingAgn1H9s.pause.call(uintS9KHzZv, {from: "0x0000000000000000000000000000000000000001"});
		const 
xfr16WZ = await VotingAgn1H9s.createProposal.call(addressH2tGGBm, bytey58vysJ, stringBy4PgwA, stringpCVWGwe, stringKUljMJk, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressYhattg0 = accounts[1]
		const VotingH7XWCBn = await Voting.new(addressYhattg0, {from: accounts[1]});
		const addressObdzte = "0x0000000000000000000000000000000000000001"
		const uintBqO4XfU = BigInt("153")
		const addressAZwEDvQ = "0x0000000000000000000000000000000000000001"
		const addressSZSDjRB = accounts[4]
		const addressL0TIcaD = await VotingH7XWCBn.owner.call({from: accounts[1]});
		const boolcolPcIy = await VotingH7XWCBn.isValidOracleAddress.call(addressObdzte, {from: accounts[0]});
		const boolzXv8Vj = await VotingH7XWCBn.transferFrom.call(addressSZSDjRB, addressAZwEDvQ, uintBqO4XfU, {from: accounts[5]});
		await VotingH7XWCBn.requiresLiquidityTokenSnapshotAccess.call({from: accounts[2]});
		await VotingH7XWCBn.onlyMinter.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addresspd3HGRN = accounts[0]
		const Votingk9vrBC = await Voting.new(addresspd3HGRN, {from: accounts[2]});
		const addressmkxEkrI = "0x0000000000000000000000000000000000000001"
		const stringO4ouflV = "iQLacH0kt43YimnGl4Sz9UPBuK2Vz"
		const stringFs1hBon = "3w3FOuIe2tyJmrZ5VzCuYUeg586qUHlMzJasRixMrwhDfpMLvbxgZdaMqU2cgcV3wgMOd6Rn3cLQUrY"
		const stringwrLrnc = "otPe2nqlozP9cJJxgT7F2dDDLsHDvRzqZYyVNQ34CYoCoNCImQhmjxscTVVOL9fKplQun5"
		const byteOhr1kpZ = "0x1b13121711171c1a07041c070d"
		const addressCyYMuMh = accounts[3]
		const uintphMpOwZ = BigInt("677")
		const addresstLxTegY = accounts[0]
		const boolbNR4hNf = await Votingk9vrBC.isValidVerifierAddress.call(addressmkxEkrI, {from: accounts[0]});
		const 
Jg4s6ku = await Votingk9vrBC.createProposal.call(addressCyYMuMh, byteOhr1kpZ, stringwrLrnc, stringFs1hBon, stringO4ouflV, {from: accounts[2]});
		const boollyGRkVC = await Votingk9vrBC.transfer.call(addresstLxTegY, uintphMpOwZ, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotinghfOwQml = await Voting.new({from: accounts[0]});
		const addresseVzUJK6 = accounts[4]
		const uintVSy8XhS = BigInt("1254")
		const addressL9yBX8z = accounts[4]
		const boolwk40w44 = await VotinghfOwQml.isOwner.call({from: accounts[2]});
		const boolDJpMcrH = await VotinghfOwQml.isMinter.call(addresseVzUJK6, {from: accounts[1]});
		const boolJnzWuRM = await VotinghfOwQml.transfer.call(addressL9yBX8z, uintVSy8XhS, {from: accounts[0]});
	});
})