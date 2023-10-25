const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addresshvSWd5L = accounts[0]
		const BAEL6GqDiQ = await BAE.new(addresshvSWd5L, {from: accounts[3]});
		const uintO6n2GoN = BigInt("351")
		const uintvb3cBc2 = BigInt("1941")
		const uintM5SErDD = BigInt("594")
		const uintqkWzjGr = BigInt("1873")
		const uintDzjBI7N = BigInt("1093")
		const uintOg00Jnv = BigInt("1854")
		const uinth7Mg5IK = BigInt("1327")
		const uintwSh27B = BigInt("1438")
		const uintpZnKqlM = BigInt("1016")
		const uintK71NW5k = BigInt("1277")
		const uinta0RYlKM = BigInt("922")
		const uintJ1C2k3Y = BigInt("790")
		const uintGZDoHpN = BigInt("1237")
		const uint256ELUfCTz = await BAEL6GqDiQ.resetAuction.call(uintM5SErDD, uintvb3cBc2, uintO6n2GoN, {from: accounts[0]});
		const uint256mR8lvN1 = await BAEL6GqDiQ.buy.call(uintqkWzjGr, {from: accounts[1]});
		const uint256Oi4x40e = await BAEL6GqDiQ.setAuctionFee.call(uintDzjBI7N, {from: accounts[1]});
		const uint256EMELe3o = await BAEL6GqDiQ.resetAuction.call(uintwSh27B, uinth7Mg5IK, uintOg00Jnv, {from: accounts[3]});
		const uint256B5lSRSE = await BAEL6GqDiQ.createAuction.call(uintJ1C2k3Y, uinta0RYlKM, uintK71NW5k, uintpZnKqlM, {from: accounts[0]});
		const uint256uf6wdKe = await BAEL6GqDiQ.setAuctionFee.call(uintGZDoHpN, {from: accounts[0]});

		await expect(BAEL6GqDiQ.resetAuction.call(uintM5SErDD, uintvb3cBc2, uintO6n2GoN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressTje7Ir5 = accounts[0]
		const BAEkWvxPdH = await BAE.new(addressTje7Ir5, {from: accounts[3]});
		const uintn2EAhP8 = BigInt("1731")
		const uintI0r6pOy = BigInt("2023")
		const uintGzBk5Ph = BigInt("1549")
		const uintkAgie93 = BigInt("991")
		const uintWJdq7Ox = BigInt("1359")
		const uintm73FtpX = BigInt("375")
		const uintTMbTOMR = BigInt("1933")
		const uintvxbtx22 = BigInt("1842")
		const uint256oQA1uqn = await BAEkWvxPdH.createAuction.call(uintkAgie93, uintGzBk5Ph, uintI0r6pOy, uintn2EAhP8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QRjaAdy = await BAEkWvxPdH.createAuction.call(uintvxbtx22, uintTMbTOMR, uintm73FtpX, uintWJdq7Ox, {from: accounts[2]});

		await expect(BAEkWvxPdH.createAuction.call(uintkAgie93, uintGzBk5Ph, uintI0r6pOy, uintn2EAhP8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressvNMoX3d = accounts[0]
		const BAEtqVJurq = await BAE.new(addressvNMoX3d, {from: "0x0000000000000000000000000000000000000001"});
		const uintPPM61xg = BigInt("710")
		const uintEPeSgzF = BigInt("776")
		const uintqFjGQKS = BigInt("197")
		const uinthKbvsJd = BigInt("1284")
		const uint62yaEY = BigInt("1845")
		const uintUWg3lwV = BigInt("1143")
		const uint256A2MmZyg = await BAEtqVJurq.setAuctionFee.call(uintPPM61xg, {from: accounts[0]});
		const uint256uKhjUi7 = await BAEtqVJurq.createAuction.call(uint62yaEY, uinthKbvsJd, uintqFjGQKS, uintEPeSgzF, {from: accounts[2]});
		const uint256nT4KVv = await BAEtqVJurq.bid.call(uintUWg3lwV, {from: accounts[3]});
	});

	it('test for BAE', async () => {
		const addresstiyyjIV = accounts[1]
		const BAEATf2gq1 = await BAE.new(addresstiyyjIV, {from: accounts[2]});
		const uintG0kA5II = BigInt("1199")
		const uintqHWeXHY = BigInt("1296")
		const uintYiq0RB5 = BigInt("1759")
		const uintoWHzd2Z = BigInt("1257")
		const uintJQ7H4W6 = BigInt("383")
		const uintgSxmuAf = BigInt("796")
		const uintTGgl8CU = BigInt("102")
		const uint256OXFC4iS = await BAEATf2gq1.buy.call(uintG0kA5II, {from: accounts[1]});
		const uint256MDWJZrJ = await BAEATf2gq1.createAuction.call(uintJQ7H4W6, uintoWHzd2Z, uintYiq0RB5, uintqHWeXHY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256V0WBAaa = await BAEATf2gq1.bid.call(uintgSxmuAf, {from: accounts[0]});
		const uint256ay3jMbu = await BAEATf2gq1.buy.call(uintTGgl8CU, {from: accounts[1]});

		await expect(BAEATf2gq1.buy.call(uintG0kA5II, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressUpTsP0 = "0x0000000000000000000000000000000000000001"
		const BAEF9aNftJ = await BAE.new(addressUpTsP0, {from: accounts[4]});
		const uintzNdBdMA = BigInt("523")
		const uintntmsaTg = BigInt("468")
		const uintzbveFxR = BigInt("63")
		const uintvl6wSml = BigInt("1607")
		const uintyFtwzar = BigInt("1686")
		const uintusKmtK3 = BigInt("344")
		const uintQDtBox = BigInt("1184")
		const uinte8Mnjo1 = BigInt("102")
		const uintJtlEF9D = BigInt("1607")
		const uintbfhBUUj = BigInt("377")
		const uintJoWL5ph = BigInt("579")
		const uintUKbsW3p = BigInt("1927")
		const uintaynxFGG = BigInt("303")
		const uintRMReNha = BigInt("961")
		const uint256dgZGp16 = await BAEF9aNftJ.setAuctionFee.call(uintzNdBdMA, {from: accounts[1]});
		const uint256r7zYKQ = await BAEF9aNftJ.bid.call(uintntmsaTg, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AgUdCH5 = await BAEF9aNftJ.createAuction.call(uintusKmtK3, uintyFtwzar, uintvl6wSml, uintzbveFxR, {from: accounts[3]});
		const uint256coHCOzc = await BAEF9aNftJ.createAuction.call(uintbfhBUUj, uintJtlEF9D, uinte8Mnjo1, uintQDtBox, {from: accounts[3]});
		const uint256EwmIWQY = await BAEF9aNftJ.createAuction.call(uintRMReNha, uintaynxFGG, uintUKbsW3p, uintJoWL5ph, {from: accounts[3]});

		await expect(BAEF9aNftJ.setAuctionFee.call(uintzNdBdMA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressB0A3TF = accounts[4]
		const BAES62nmZO = await BAE.new(addressB0A3TF, {from: accounts[0]});
		const uintSOugQQA = BigInt("998")
		const uintR1DwQx = BigInt("520")
		const uinteTWIPLG = BigInt("306")
		const uintBjMd0Ol = BigInt("120")
		const uintS7gIkf = BigInt("152")
		const uintkclSrwP = BigInt("1714")
		const uintF9NBezC = BigInt("874")
		const uint6WmRGs = BigInt("1751")
		const uintUAyxeeZ = BigInt("1498")
		const uint256wFPrPuL = await BAES62nmZO.bid.call(uintSOugQQA, {from: accounts[4]});
		const uint256G5Pjvej = await BAES62nmZO.createAuction.call(uintS7gIkf, uintBjMd0Ol, uinteTWIPLG, uintR1DwQx, {from: accounts[4]});
		const uint256hrmzyKi = await BAES62nmZO.resetAuction.call(uint6WmRGs, uintF9NBezC, uintkclSrwP, {from: accounts[2]});
		const uint256Ntk3DKc = await BAES62nmZO.setAuctionFee.call(uintUAyxeeZ, {from: accounts[2]});

		await expect(BAES62nmZO.bid.call(uintSOugQQA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressLQrkcqp = accounts[0]
		const BAEkWvxPdH = await BAE.new(addressLQrkcqp, {from: accounts[3]});
		const uintKC94cr = BigInt("1362")
		const uintsxgYxHF = BigInt("1731")
		const uinte7Gj0LA = BigInt("2023")
		const uintrl8AicW = BigInt("1549")
		const uintCwSJQe = BigInt("1003")
		const uintXZENuFB = BigInt("879")
		const uinteeowxcY = BigInt("345")
		const uintqWYcmDb = BigInt("1359")
		const uintyOTndbt = BigInt("375")
		const uintBYdoLy5 = BigInt("1933")
		const uintkPTSqn3 = BigInt("1842")
		const uint256bi2x6X = await BAEkWvxPdH.concludeAuction.call(uintKC94cr, {from: accounts[0]});
		const uint256oQA1uqn = await BAEkWvxPdH.createAuction.call(uintCwSJQe, uintrl8AicW, uinte7Gj0LA, uintsxgYxHF, {from: "0x0000000000000000000000000000000000000001"});
		const uint2564uFsfE = await BAEkWvxPdH.setAuctionFee.call(uintXZENuFB, {from: accounts[2]});
		const uint256CRzo9fi = await BAEkWvxPdH.buy.call(uinteeowxcY, {from: accounts[3]});
		const uint256QRjaAdy = await BAEkWvxPdH.createAuction.call(uintkPTSqn3, uintBYdoLy5, uintyOTndbt, uintqWYcmDb, {from: accounts[2]});

		await expect(BAEkWvxPdH.concludeAuction.call(uintKC94cr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})