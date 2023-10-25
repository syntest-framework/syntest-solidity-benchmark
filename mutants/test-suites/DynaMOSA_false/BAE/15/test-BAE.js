const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressuXPG9tM = accounts[3]
		const BAEMEumUJa = await BAE.new(addressuXPG9tM, {from: accounts[1]});
		const uintZStia4n = BigInt("1362")
		const uint8lGsWG = BigInt("2039")
		const uintmAF1L44 = BigInt("501")
		const uintEGX4P2p = BigInt("710")
		const uintsTDXxAw = BigInt("262")
//		const uint256q5pliOM = await BAEMEumUJa.buy.call(uintZStia4n, {from: accounts[0]});
//		const uint256GfT6owt = await BAEMEumUJa.setAuctionFee.call(uint8lGsWG, {from: accounts[1]});
//		const uint256FVWJ1z9 = await BAEMEumUJa.buy.call(uintmAF1L44, {from: accounts[2]});
//		const uint256nBoqaIG = await BAEMEumUJa.bid.call(uintEGX4P2p, {from: accounts[1]});
//		const uint256ZPJzqgi = await BAEMEumUJa.setAuctionFee.call(uintsTDXxAw, {from: accounts[1]});

		await expect(BAEMEumUJa.buy.call(uintZStia4n, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressUhlCWWD = "0x0000000000000000000000000000000000000001"
		const BAEHKPMW4P = await BAE.new(addressUhlCWWD, {from: accounts[2]});
		const uintBqeLsvw = BigInt("143")
		const uintd6ndZ2M = BigInt("231")
		const uintLcepJXt = BigInt("375")
		const uintR7rxduI = BigInt("1988")
//		const uint256RGfEZeN = await BAEHKPMW4P.changePrintFee.call(uintBqeLsvw, {from: accounts[0]});
//		const uint256vWtqyE5 = await BAEHKPMW4P.buy.call(uintd6ndZ2M, {from: accounts[4]});
//		const uint256hpgwhXd = await BAEHKPMW4P.setAuctionFee.call(uintLcepJXt, {from: accounts[1]});
//		const uint256ScucaxY = await BAEHKPMW4P.buy.call(uintR7rxduI, {from: accounts[2]});

		await expect(BAEHKPMW4P.changePrintFee.call(uintBqeLsvw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressiRWCGDO = accounts[4]
		const BAEt7jDgb = await BAE.new(addressiRWCGDO, {from: accounts[3]});
		const uintaeQ6ChK = BigInt("910")
		const uintFtdQ8Mg = BigInt("453")
		const uintGPHSRTC = BigInt("131")
		const uintexZFW4D = BigInt("1801")
		const uintyh7WFY6 = BigInt("1814")
		const uintjOMPWy5 = BigInt("1161")
		const uintCVzFvfw = BigInt("2001")
		const uintiXdzoGx = BigInt("1930")
		const uintyiLrL56 = BigInt("1298")
		const uintsJrLxdt = BigInt("1472")
		const uintzxcBoEi = BigInt("257")
		const uintXpOH7tM = BigInt("850")
//		const uint256IBqwyTN = await BAEt7jDgb.bid.call(uintaeQ6ChK, {from: accounts[3]});
//		const uint256OyIQpV = await BAEt7jDgb.resetAuction.call(uintexZFW4D, uintGPHSRTC, uintFtdQ8Mg, {from: accounts[1]});
//		const uint256kUWrFtQ = await BAEt7jDgb.buy.call(uintyh7WFY6, {from: accounts[0]});
//		const uint256aHwFq9L = await BAEt7jDgb.createAuction.call(uintyiLrL56, uintiXdzoGx, uintCVzFvfw, uintjOMPWy5, {from: accounts[0]});
//		const uint256ea6NjLO = await BAEt7jDgb.resetAuction.call(uintXpOH7tM, uintzxcBoEi, uintsJrLxdt, {from: accounts[5]});

		await expect(BAEt7jDgb.bid.call(uintaeQ6ChK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressphHJgi8 = accounts[5]
		const BAEeyz7bpv = await BAE.new(addressphHJgi8, {from: accounts[4]});
		const uintY3mDnWr = BigInt("418")
		const uintuPwomtR = BigInt("893")
		const uintRL8DEj1 = BigInt("553")
		const uintzLxNjEk = BigInt("1439")
		const uintS7CJyAh = BigInt("35")
		const uintU3PPUF5 = BigInt("209")
//		const uint256jPxNYDs = await BAEeyz7bpv.resetAuction.call(uintRL8DEj1, uintuPwomtR, uintY3mDnWr, {from: accounts[2]});
//		const uint256sCkFLmm = await BAEeyz7bpv.resetAuction.call(uintU3PPUF5, uintS7CJyAh, uintzLxNjEk, {from: accounts[3]});

		await expect(BAEeyz7bpv.resetAuction.call(uintRL8DEj1, uintuPwomtR, uintY3mDnWr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressfFdCA8H = accounts[3]
		const BAEMEumUJa = await BAE.new(addressfFdCA8H, {from: accounts[1]});
		const uintzgLqyPn = BigInt("38")
		const uintUaHToW9 = BigInt("1362")
		const uinteVVP3HJ = BigInt("2039")
		const uintD5QbJ4L = BigInt("501")
		const uintci5uV3 = BigInt("639")
		const uintcNqfrXN = BigInt("112")
		const uintuCONsJr = BigInt("386")
		const uintvpM2VMB = BigInt("714")
		const uintDlnmdhm = BigInt("1674")
		const uintiHNCLhF = BigInt("235")
		const uintDDH2URd = BigInt("1247")
		const uintXb0pl5 = BigInt("262")
//		const uint256d9ltTgg = await BAEMEumUJa.concludeAuction.call(uintzgLqyPn, {from: accounts[3]});
//		const uint256q5pliOM = await BAEMEumUJa.buy.call(uintUaHToW9, {from: accounts[0]});
//		const uint256GfT6owt = await BAEMEumUJa.setAuctionFee.call(uinteVVP3HJ, {from: accounts[1]});
//		const uint256FVWJ1z9 = await BAEMEumUJa.buy.call(uintD5QbJ4L, {from: accounts[2]});
//		const uint256rWvy69 = await BAEMEumUJa.resetAuction.call(uintuCONsJr, uintcNqfrXN, uintci5uV3, {from: accounts[5]});
//		const uint256nBoqaIG = await BAEMEumUJa.bid.call(uintvpM2VMB, {from: accounts[1]});
//		const uint256SUXHUuE = await BAEMEumUJa.resetAuction.call(uintDDH2URd, uintiHNCLhF, uintDlnmdhm, {from: accounts[1]});
//		const uint256ZPJzqgi = await BAEMEumUJa.setAuctionFee.call(uintXb0pl5, {from: accounts[1]});

		await expect(BAEMEumUJa.concludeAuction.call(uintzgLqyPn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresszXQwZZw = accounts[3]
		const BAEDVaZbv = await BAE.new(addresszXQwZZw, {from: "0x0000000000000000000000000000000000000001"});
		const uintOdFQyI = BigInt("1023")
		const uintF6NGDqu = BigInt("1931")
		const uintTP2m0Q = BigInt("1831")
		const uinttN8W7Hf = BigInt("466")
		const uintp2UumH = BigInt("778")
		const uint256RrwHDe9 = await BAEDVaZbv.buy.call(uintOdFQyI, {from: accounts[0]});
		const uint256lWxCgoF = await BAEDVaZbv.setAuctionFee.call(uintF6NGDqu, {from: accounts[3]});
		const uint256DLjsXU5 = await BAEDVaZbv.concludeAuction.call(uintTP2m0Q, {from: accounts[1]});
		const uint256MvKdiQM = await BAEDVaZbv.setAuctionFee.call(uinttN8W7Hf, {from: accounts[0]});
		const uint256qvscB5i = await BAEDVaZbv.changePrintFee.call(uintp2UumH, {from: accounts[4]});
	});

	it('test for BAE', async () => {
		const addressjQnfWgi = accounts[0]
		const BAEhhxc8jE = await BAE.new(addressjQnfWgi, {from: accounts[4]});
		const uintU3m6oS = BigInt("1520")
		const uintzIcOw7G = BigInt("823")
		const uintjhMDXyV = BigInt("2008")
		const uintPy6QCNh = BigInt("1934")
		const uintvYrPtRJ = BigInt("1125")
		const uintcyu78dL = BigInt("1807")
		const uintV2AXSN0 = BigInt("1363")
		const uintiLmMwe = BigInt("804")
		const uintYPwQFi = BigInt("491")
		const uintBVHLHox = BigInt("956")
		const uintp5AxzBr = BigInt("232")
//		const uint256l2uagD = await BAEhhxc8jE.createAuction.call(uintPy6QCNh, uintjhMDXyV, uintzIcOw7G, uintU3m6oS, {from: accounts[1]});
//		const uint256Bz7QQL = await BAEhhxc8jE.resetAuction.call(uintV2AXSN0, uintcyu78dL, uintvYrPtRJ, {from: accounts[2]});
//		const uint256wVB2OFC = await BAEhhxc8jE.bid.call(uintiLmMwe, {from: accounts[5]});
//		const uint256vs59lHx = await BAEhhxc8jE.resetAuction.call(uintp5AxzBr, uintBVHLHox, uintYPwQFi, {from: accounts[4]});

		await expect(BAEhhxc8jE.createAuction.call(uintPy6QCNh, uintjhMDXyV, uintzIcOw7G, uintU3m6oS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})