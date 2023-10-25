const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressnzp5bSq = accounts[2]
		const BAEGA0uDOS = await BAE.new(addressnzp5bSq, {from: accounts[3]});
		const uintQxDyDeP = BigInt("784")
		const uintxppTzxG = BigInt("920")
		const uint256acRnloj = await BAEGA0uDOS.buy.call(uintQxDyDeP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VhiB9Hi = await BAEGA0uDOS.setAuctionFee.call(uintxppTzxG, {from: accounts[4]});

		await expect(BAEGA0uDOS.buy.call(uintQxDyDeP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressfQ6T2gz = accounts[3]
		const BAEfK2vCLZ = await BAE.new(addressfQ6T2gz, {from: accounts[3]});
		const uint10FKIB = BigInt("1264")
		const uintseYTPtN = BigInt("1567")
		const uintsYciYfk = BigInt("1197")
		const uintYzuM7TR = BigInt("1410")
		const uint1d2xNt = BigInt("161")
		const uint256HIaH8HB = await BAEfK2vCLZ.resetAuction.call(uintsYciYfk, uintseYTPtN, uint10FKIB, {from: accounts[2]});
		const uint256a0xZ7cZ = await BAEfK2vCLZ.bid.call(uintYzuM7TR, {from: accounts[1]});
		const uint256M7xq9uS = await BAEfK2vCLZ.setAuctionFee.call(uint1d2xNt, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEfK2vCLZ.resetAuction.call(uintsYciYfk, uintseYTPtN, uint10FKIB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressQfATVm4 = accounts[2]
		const BAEfwdSb9V = await BAE.new(addressQfATVm4, {from: accounts[4]});
		const uintG2AaYR5 = BigInt("1764")
		const uintjOoKZLP = BigInt("547")
		const uintHbJYWDO = BigInt("74")
		const uintFxVpnKn = BigInt("1947")
		const uintxGM3XkX = BigInt("608")
		const uintDrOoeTf = BigInt("127")
		const uintxcvbpqS = BigInt("588")
		const uintC5uZx2 = BigInt("1153")
		const uintkWwFl0X = BigInt("83")
		const uintbBLUwmY = BigInt("881")
		const uintH0cYClg = BigInt("799")
		const uintUUiydf = BigInt("1526")
		const uint256vP8vy26 = await BAEfwdSb9V.createAuction.call(uintFxVpnKn, uintHbJYWDO, uintjOoKZLP, uintG2AaYR5, {from: accounts[0]});
		const uint256rn3N4NL = await BAEfwdSb9V.resetAuction.call(uintxcvbpqS, uintDrOoeTf, uintxGM3XkX, {from: accounts[0]});
		const uint256KY4FxFX = await BAEfwdSb9V.setAuctionFee.call(uintC5uZx2, {from: accounts[4]});
		const uint256aRJp1Fi = await BAEfwdSb9V.setAuctionFee.call(uintkWwFl0X, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hOKu4xS = await BAEfwdSb9V.resetAuction.call(uintUUiydf, uintH0cYClg, uintbBLUwmY, {from: accounts[0]});

		await expect(BAEfwdSb9V.createAuction.call(uintFxVpnKn, uintHbJYWDO, uintjOoKZLP, uintG2AaYR5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressOmsxwcN = accounts[1]
		const BAENQ3hG4n = await BAE.new(addressOmsxwcN, {from: accounts[2]});
		const uintQG9SlZ5 = BigInt("355")
		const uintEjSNaLo = BigInt("1058")
		const uintCkX1XX8 = BigInt("1425")
		const uintat6fXhQ = BigInt("619")
		const uinteagKETx = BigInt("1809")
		const uintKp5lguA = BigInt("1989")
		const uintTRjFyWg = BigInt("98")
		const uintQHxW9TS = BigInt("140")
		const uintKe5F4ol = BigInt("1609")
		const uintpBNV3l = BigInt("471")
		const uint256DAgwcS = await BAENQ3hG4n.setAuctionFee.call(uintQG9SlZ5, {from: accounts[0]});
		const uint256NLEIcm1 = await BAENQ3hG4n.resetAuction.call(uintat6fXhQ, uintCkX1XX8, uintEjSNaLo, {from: accounts[4]});
		const uint256GNUOKa = await BAENQ3hG4n.setAuctionFee.call(uinteagKETx, {from: accounts[0]});
		const uint256GmFAxe0 = await BAENQ3hG4n.concludeAuction.call(uintKp5lguA, {from: accounts[4]});
		const uint256Owr90He = await BAENQ3hG4n.createAuction.call(uintpBNV3l, uintKe5F4ol, uintQHxW9TS, uintTRjFyWg, {from: accounts[3]});

		await expect(BAENQ3hG4n.setAuctionFee.call(uintQG9SlZ5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresscOksKsd = accounts[1]
		const BAEvZgKy0C = await BAE.new(addresscOksKsd, {from: "0x0000000000000000000000000000000000000001"});
		const uintCD0NeTw = BigInt("71")
		const uintKPZJ9g4 = BigInt("445")
		const uintUzmA6H = BigInt("626")
		const uintEkegFsh = BigInt("1286")
		const uintDGq8vIR = BigInt("1867")
		const uinthXuwlZ1 = BigInt("1885")
		const uintfs1AwUo = BigInt("1393")
		const uintcopMI0p = BigInt("982")
		const uintvbBGe1q = BigInt("1966")
		const uintsMoRlto = BigInt("1083")
		const uintnasLSKW = BigInt("1473")
		const uintcSDCYPl = BigInt("1813")
		const uintZUIqoWD = BigInt("1413")
		const uintbg2ObCp = BigInt("602")
		const uinteIdECB = BigInt("1460")
		const uint256Oxs0DAu = await BAEvZgKy0C.changePrintFee.call(uintCD0NeTw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VORG3e6 = await BAEvZgKy0C.createAuction.call(uintDGq8vIR, uintEkegFsh, uintUzmA6H, uintKPZJ9g4, {from: accounts[5]});
		const uint256FLfeVC = await BAEvZgKy0C.setAuctionFee.call(uinthXuwlZ1, {from: accounts[1]});
		const uint256rDWlKll = await BAEvZgKy0C.bid.call(uintfs1AwUo, {from: accounts[1]});
		const uint256RpMdXKe = await BAEvZgKy0C.createAuction.call(uintnasLSKW, uintsMoRlto, uintvbBGe1q, uintcopMI0p, {from: accounts[0]});
		const uint256b1tjaMx = await BAEvZgKy0C.createAuction.call(uinteIdECB, uintbg2ObCp, uintZUIqoWD, uintcSDCYPl, {from: accounts[1]});
	});

	it('test for BAE', async () => {
		const addressaZvk6Wy = accounts[5]
		const BAECQDinkl = await BAE.new(addressaZvk6Wy, {from: accounts[3]});
		const uintEALuSuE = BigInt("1301")
		const uintqJK0M4K = BigInt("1089")
		const uintNneLiBe = BigInt("1657")
		const uintzdAx9dR = BigInt("726")
		const uintYc23kTJ = BigInt("1602")
		const uintDupCw26 = BigInt("816")
		const uint57ECMY = BigInt("794")
		const uintnPbkrT2 = BigInt("868")
		const uintz2a8BxO = BigInt("531")
		const uint256Roab3fB = await BAECQDinkl.bid.call(uintEALuSuE, {from: accounts[3]});
		const uint256rvJoy8e = await BAECQDinkl.setAuctionFee.call(uintqJK0M4K, {from: accounts[1]});
		const uint256cZHA2TF = await BAECQDinkl.createAuction.call(uintDupCw26, uintYc23kTJ, uintzdAx9dR, uintNneLiBe, {from: accounts[1]});
		const uint256RqrZteN = await BAECQDinkl.bid.call(uint57ECMY, {from: accounts[5]});
		const uint256OMTZFVz = await BAECQDinkl.setAuctionFee.call(uintnPbkrT2, {from: accounts[3]});
		const uint256jcuX6a3 = await BAECQDinkl.buy.call(uintz2a8BxO, {from: accounts[1]});

		await expect(BAECQDinkl.bid.call(uintEALuSuE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresscF0snej = accounts[2]
		const BAEzt9VwkJ = await BAE.new(addresscF0snej, {from: accounts[2]});
		const uintBa8w1sV = BigInt("1261")
		const uintwtPl28 = BigInt("61")
		const uinthLXoG2v = BigInt("894")
		const uintJlktzTW = BigInt("221")
		const uinti9C1VIb = BigInt("564")
		const uintO4bkDsB = BigInt("1029")
		const uintT0l3lWI = BigInt("333")
		const uintCfHtJe = BigInt("1596")
		const uintuptAxjj = BigInt("789")
		const uintB65WfEd = BigInt("965")
		const uint256tj9xBYa = await BAEzt9VwkJ.concludeAuction.call(uintBa8w1sV, {from: accounts[4]});
		const uint256DwchDzJ = await BAEzt9VwkJ.resetAuction.call(uintJlktzTW, uinthLXoG2v, uintwtPl28, {from: accounts[2]});
		const uint256y5XArE = await BAEzt9VwkJ.changePrintFee.call(uinti9C1VIb, {from: accounts[4]});
		const uint256W4Q8ZYM = await BAEzt9VwkJ.createAuction.call(uintuptAxjj, uintCfHtJe, uintT0l3lWI, uintO4bkDsB, {from: accounts[5]});
		const uint256h3PprVD = await BAEzt9VwkJ.setAuctionFee.call(uintB65WfEd, {from: accounts[4]});

		await expect(BAEzt9VwkJ.concludeAuction.call(uintBa8w1sV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})