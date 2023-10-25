const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressiJ5Pk8A = accounts[4]
		const BAEmjLMUlj = await BAE.new(addressiJ5Pk8A, {from: accounts[0]});
		const uintJKM3pD = BigInt("327")
		const uintdEEkX2t = BigInt("1934")
		const uintrXrOqoY = BigInt("1449")
		const uintqw8VqaF = BigInt("1314")
		const uintx27Ccbg = BigInt("134")
		const uint2562jTkp4 = await BAEmjLMUlj.buy.call(uintJKM3pD, {from: accounts[2]});
		const uint256qXVlnKZ = await BAEmjLMUlj.resetAuction.call(uintqw8VqaF, uintrXrOqoY, uintdEEkX2t, {from: accounts[1]});
		const uint256HTOKZlG = await BAEmjLMUlj.setAuctionFee.call(uintx27Ccbg, {from: accounts[0]});

		await expect(BAEmjLMUlj.buy.call(uintJKM3pD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresshBUWT7f = accounts[2]
		const BAEDVaHds = await BAE.new(addresshBUWT7f, {from: accounts[1]});
		const uintIBPmii5 = BigInt("281")
		const uinttokPTNq = BigInt("295")
		const uint256oZ6nwER = await BAEDVaHds.setAuctionFee.call(uintIBPmii5, {from: accounts[4]});
		const uint256glXED4R = await BAEDVaHds.bid.call(uinttokPTNq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEDVaHds.setAuctionFee.call(uintIBPmii5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressv3cR1Dp = accounts[4]
		const BAEVvjFrkd = await BAE.new(addressv3cR1Dp, {from: accounts[4]});
		const uint892loZ = BigInt("17")
		const uintIfBfMCZ = BigInt("1603")
		const uintz4I2UwZ = BigInt("1504")
		const uintEfzVfwh = BigInt("1560")
		const uintH3lkk0 = BigInt("1338")
		const uintNIGxEI = BigInt("632")
		const uint256RORdyrk = await BAEVvjFrkd.bid.call(uint892loZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OKngR2K = await BAEVvjFrkd.changePrintFee.call(uintIfBfMCZ, {from: accounts[2]});
		const uint256mAxYlRh = await BAEVvjFrkd.createAuction.call(uintNIGxEI, uintH3lkk0, uintEfzVfwh, uintz4I2UwZ, {from: accounts[2]});

		await expect(BAEVvjFrkd.bid.call(uint892loZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressu6qLFyz = accounts[3]
		const BAEakzgEoe = await BAE.new(addressu6qLFyz, {from: accounts[1]});
		const uintV5KRUFh = BigInt("1934")
		const uintwYmZeR9 = BigInt("534")
		const uintyTOlkxe = BigInt("1000")
		const uintE1YAmRd = BigInt("1128")
		const uintj69kAyt = BigInt("1006")
		const uintrkQcRB = BigInt("1598")
		const uintlJilPy6 = BigInt("2003")
		const uintpsKPem6 = BigInt("1799")
		const uintFa6ppey = BigInt("1020")
		const uintacSD3n8 = BigInt("1051")
		const uint256GtzGFjy = await BAEakzgEoe.createAuction.call(uintE1YAmRd, uintyTOlkxe, uintwYmZeR9, uintV5KRUFh, {from: accounts[3]});
		const uint256UOk9zE = await BAEakzgEoe.resetAuction.call(uintlJilPy6, uintrkQcRB, uintj69kAyt, {from: accounts[2]});
		const uint256Q4fu78k = await BAEakzgEoe.setAuctionFee.call(uintpsKPem6, {from: accounts[4]});
		const uint256pnG8Gq2 = await BAEakzgEoe.bid.call(uintFa6ppey, {from: accounts[1]});
		const uint256313CVP = await BAEakzgEoe.bid.call(uintacSD3n8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEakzgEoe.createAuction.call(uintE1YAmRd, uintyTOlkxe, uintwYmZeR9, uintV5KRUFh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressPXYWQOL = accounts[5]
		const BAEjIsahsl = await BAE.new(addressPXYWQOL, {from: accounts[1]});
		const uints0ABOhh = BigInt("1979")
		const uintYpPKF2s = BigInt("1493")
		const uintlaxmSMI = BigInt("1149")
		const uintGxVTrnl = BigInt("282")
		const uint256K19oat2 = await BAEjIsahsl.concludeAuction.call(uints0ABOhh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256enUnaD5 = await BAEjIsahsl.setAuctionFee.call(uintYpPKF2s, {from: accounts[2]});
		const uint256hWLyvO = await BAEjIsahsl.buy.call(uintlaxmSMI, {from: accounts[2]});
		const uint256nKuOxN1 = await BAEjIsahsl.bid.call(uintGxVTrnl, {from: accounts[0]});

		await expect(BAEjIsahsl.concludeAuction.call(uints0ABOhh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressE299CYO = accounts[4]
		const BAEN5UDzF = await BAE.new(addressE299CYO, {from: accounts[5]});
		const uintvWislyg = BigInt("1126")
		const uintfKOxfUV = BigInt("323")
		const uintnv3oFrN = BigInt("449")
		const uintEZm4jLZ = BigInt("86")
		const uintcJVHhU3 = BigInt("659")
		const uint256qyu4EJH = await BAEN5UDzF.resetAuction.call(uintnv3oFrN, uintfKOxfUV, uintvWislyg, {from: accounts[0]});
		const uint256r04pPzJ = await BAEN5UDzF.changePrintFee.call(uintEZm4jLZ, {from: accounts[4]});
		const uint256vgfT8J = await BAEN5UDzF.setAuctionFee.call(uintcJVHhU3, {from: accounts[3]});

		await expect(BAEN5UDzF.resetAuction.call(uintnv3oFrN, uintfKOxfUV, uintvWislyg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresscOahLIz = accounts[1]
		const BAEmmtpv0a = await BAE.new(addresscOahLIz, {from: "0x0000000000000000000000000000000000000001"});
		const uintbpfhPp = BigInt("1007")
		const uintNSmll3U = BigInt("1174")
		const uintt7gp9z6 = BigInt("696")
		const uintx5ZK3Bd = BigInt("1051")
		const uintazkGCwJ = BigInt("1902")
		const uintkDsZ7BK = BigInt("900")
		const uintYwJkeAA = BigInt("1036")
		const uint256PNO0tZK = await BAEmmtpv0a.concludeAuction.call(uintbpfhPp, {from: accounts[3]});
		const uint256C100l23 = await BAEmmtpv0a.bid.call(uintNSmll3U, {from: accounts[1]});
		const uint256GbH2LOX = await BAEmmtpv0a.buy.call(uintt7gp9z6, {from: accounts[1]});
		const uint256odeQFSP = await BAEmmtpv0a.buy.call(uintx5ZK3Bd, {from: accounts[3]});
		const uint256wv6OOWY = await BAEmmtpv0a.resetAuction.call(uintYwJkeAA, uintkDsZ7BK, uintazkGCwJ, {from: accounts[0]});
	});
})