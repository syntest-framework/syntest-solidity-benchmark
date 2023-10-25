const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addresse8McZ48 = accounts[4]
		const addressiPBBxPm = accounts[0]
		const addressvqY7zu = accounts[2]
		const addressHf7c08h = accounts[1]
		const uintI0yj3mh = BigInt("2030")
		const FairStockEquityKUUAKOB = await FairStockEquity.new(addresse8McZ48, addressiPBBxPm, addressvqY7zu, addressHf7c08h, uintI0yj3mh, {from: "0x0000000000000000000000000000000000000001"});
		const uintxY58ZN = BigInt("1831")
		const uinttrAXIfl = BigInt("363")
		const addresstMlgtf = "0x0000000000000000000000000000000000000001"
		const uintnKn2HD9 = BigInt("256")
		const uintaQKtfA2 = BigInt("102")
		const uintnNzEnZo = BigInt("2029")
		const uintFmJCjP8 = BigInt("367")
		const addressMPfVeui = accounts[1]
		const uintJeJCBNI = BigInt("50")
		const uinthPcWnmk = BigInt("758")
		const addresswhiEGO0 = accounts[0]
		const addressxXgWPVy = await FairStockEquityKUUAKOB.setModule.call(addresstMlgtf, uinttrAXIfl, uintxY58ZN, {from: accounts[2]});
		const addressUvief4 = await FairStockEquityKUUAKOB.business.call(addressMPfVeui, uintFmJCjP8, uintnNzEnZo, uintaQKtfA2, uintnKn2HD9, {from: "0x0000000000000000000000000000000000000001"});
		const addressx6T4sXD = await FairStockEquityKUUAKOB.setModule.call(addresswhiEGO0, uinthPcWnmk, uintJeJCBNI, {from: accounts[2]});
	});

	it('test for FairStockEquity', async () => {
		const addresszfKcXZf = accounts[2]
		const addressSVjlBwA = "0x0000000000000000000000000000000000000001"
		const addressVa5jYKS = accounts[4]
		const addresszOzmyEF = accounts[4]
		const uintCTeNOiN = BigInt("183")
		const FairStockEquityu8tHrAL = await FairStockEquity.new(addresszfKcXZf, addressSVjlBwA, addressVa5jYKS, addresszOzmyEF, uintCTeNOiN, {from: accounts[0]});
		const bool1RLuNe = false
		const addressfGx9lll = accounts[3]
		const uintYqHfHq5 = BigInt("1201")
		const addressa4z7Bj = await FairStockEquityu8tHrAL.setLPT.call(addressfGx9lll, bool1RLuNe, {from: accounts[0]});
		const uint256Jq4Uegu = await FairStockEquityu8tHrAL.setProfitPercentBonus.call(uintYqHfHq5, {from: accounts[2]});
		await FairStockEquityu8tHrAL.withdrawMT.call({from: accounts[3]});

		await expect(FairStockEquityu8tHrAL.setProfitPercentBonus.call(uintYqHfHq5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslXXHNU6 = accounts[1]
		const addressop4Hk61 = accounts[3]
		const addresssrFs5m0 = accounts[2]
		const addressGPUyRk5 = "0x0000000000000000000000000000000000000001"
		const uintiP8mxkj = BigInt("1898")
		const FairStockEquitydnxRr6g = await FairStockEquity.new(addresslXXHNU6, addressop4Hk61, addresssrFs5m0, addressGPUyRk5, uintiP8mxkj, {from: accounts[3]});
		const uintFRVJZIo = BigInt("1622")
		const addressym6BNHf = accounts[4]
		const addressvnh24eo = await FairStockEquitydnxRr6g.depositLPT.call(addressym6BNHf, uintFRVJZIo, {from: accounts[2]});
		await FairStockEquitydnxRr6g.onlyDataSource.call({from: accounts[4]});
		await FairStockEquitydnxRr6g.withdrawBonus.call({from: accounts[5]});

		await expect(FairStockEquitydnxRr6g.depositLPT.call(addressym6BNHf, uintFRVJZIo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressxVmuCP1 = "0x0000000000000000000000000000000000000001"
		const addressdz4H5yH = accounts[1]
		const addressce2r2Q = accounts[3]
		const address7Qy07I = "0x0000000000000000000000000000000000000001"
		const uintdCGOmPa = BigInt("246")
		const FairStockEquityFeLfCPb = await FairStockEquity.new(addressxVmuCP1, addressdz4H5yH, addressce2r2Q, address7Qy07I, uintdCGOmPa, {from: accounts[3]});
		const uintjZltleD = BigInt("1587")
		const uintdhTQ2Tr = BigInt("1864")
		const uintxSD8VTq = BigInt("1070")
		const addressGu2aRGs = accounts[3]
		const uint256EU7a8QA = await FairStockEquityFeLfCPb.depositBonus.call(uintjZltleD, {from: accounts[2]});
		const uint256qOv7cHx = await FairStockEquityFeLfCPb.getCostAmount.call(uintdhTQ2Tr, {from: accounts[5]});
		const addresslpxTmQY = await FairStockEquityFeLfCPb.depositLPT.call(addressGu2aRGs, uintxSD8VTq, {from: accounts[0]});

		await expect(FairStockEquityFeLfCPb.depositBonus.call(uintjZltleD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresskbpYfqB = accounts[4]
		const addresszTRqZX9 = accounts[0]
		const addressqZYYW4D = accounts[3]
		const addressbgPz6e0 = accounts[0]
		const uintXBMbJp1 = BigInt("555")
		const FairStockEquityfoRknuU = await FairStockEquity.new(addresskbpYfqB, addresszTRqZX9, addressqZYYW4D, addressbgPz6e0, uintXBMbJp1, {from: accounts[5]});
		const uintoYsjk8n = BigInt("1536")
		const uintJyIUhCb = BigInt("20")
		const uintrKX8Fxt = BigInt("672")
		const uintMwmLS9K = BigInt("1171")
		const uintefWuRGa = BigInt("380")
		const uintdWoWm7x = BigInt("1909")
		const uintQalQ1lg = BigInt("459")
		const uintwLLZDO = BigInt("1161")
		const uintTv6NJvU = BigInt("860")
		const uintI3wVqGE = BigInt("1870")
		await FairStockEquityfoRknuU.withdrawMT.call({from: accounts[0]});
		const uint256l6j1IA5 = await FairStockEquityfoRknuU.setDegree.call(uintefWuRGa, uintMwmLS9K, uintrKX8Fxt, uintJyIUhCb, uintoYsjk8n, {from: accounts[4]});
		await FairStockEquityfoRknuU.withdrawBonus.call({from: accounts[0]});
		await FairStockEquityfoRknuU.f.call({from: accounts[3]});
		const uint256M2qEAJF = await FairStockEquityfoRknuU.setDegree.call(uintI3wVqGE, uintTv6NJvU, uintwLLZDO, uintQalQ1lg, uintdWoWm7x, {from: accounts[1]});

		await expect(FairStockEquityfoRknuU.withdrawMT.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressijIvWhC = accounts[2]
		const addressgdAqqpD = accounts[0]
		const addressUjU2rjg = accounts[1]
		const addresslvVzIU2 = accounts[4]
		const uintdj6hNto = BigInt("1129")
		const FairStockEquityjy7HY4E = await FairStockEquity.new(addressijIvWhC, addressgdAqqpD, addressUjU2rjg, addresslvVzIU2, uintdj6hNto, {from: accounts[5]});
		const boolriSD8cA = true
		const addressWVE6yEc = "0x0000000000000000000000000000000000000001"
		const uintRLQBAm6 = BigInt("1912")
		const addresssf5vAVV = await FairStockEquityjy7HY4E.setLPT.call(addressWVE6yEc, boolriSD8cA, {from: accounts[4]});
		await FairStockEquityjy7HY4E.withdrawMT.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ggUexJo = await FairStockEquityjy7HY4E.setProfitPercentBonus.call(uintRLQBAm6, {from: accounts[5]});

		await expect(FairStockEquityjy7HY4E.setLPT.call(addressWVE6yEc, boolriSD8cA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressw9l0joV = "0x0000000000000000000000000000000000000001"
		const addressLXDQ3a = accounts[1]
		const addressdYQKgr0 = accounts[3]
		const addressQWd6baa = "0x0000000000000000000000000000000000000001"
		const uintK2PyoqZ = BigInt("246")
		const FairStockEquityFeLfCPb = await FairStockEquity.new(addressw9l0joV, addressLXDQ3a, addressdYQKgr0, addressQWd6baa, uintK2PyoqZ, {from: accounts[3]});
		const uintfmdAwhU = BigInt("123")
		const uintyuRtNkC = BigInt("1070")
		const addressZuPRwpR = accounts[3]
		const uint256qOv7cHx = await FairStockEquityFeLfCPb.getCostAmount.call(uintfmdAwhU, {from: accounts[5]});
		const addresslpxTmQY = await FairStockEquityFeLfCPb.depositLPT.call(addressZuPRwpR, uintyuRtNkC, {from: accounts[0]});

		await expect(FairStockEquityFeLfCPb.depositLPT.call(addressZuPRwpR, uintyuRtNkC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressUU5BRWG = accounts[2]
		const addressusqzHGQ = accounts[0]
		const addresshY0m95I = accounts[1]
		const addressQQEOEGl = accounts[4]
		const uint30DEac = BigInt("1129")
		const FairStockEquityjy7HY4E = await FairStockEquity.new(addressUU5BRWG, addressusqzHGQ, addresshY0m95I, addressQQEOEGl, uint30DEac, {from: accounts[5]});
		const uintCMKWKp9 = BigInt("716")
		const uintIRc4kB = BigInt("588")
		const uintTiaK7VT = BigInt("182")
		const uinty57NqO = BigInt("1566")
		const addressYuJgfvC = accounts[1]
		const boolriSD8cA = true
		const addressix0RLrE = "0x0000000000000000000000000000000000000001"
		const uintkVLUVXn = BigInt("1953")
		await FairStockEquityjy7HY4E.onlyDataSource.call({from: accounts[4]});
		const addressyx5Ew0E = await FairStockEquityjy7HY4E.business.call(addressYuJgfvC, uinty57NqO, uintTiaK7VT, uintIRc4kB, uintCMKWKp9, {from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquityjy7HY4E.withdrawMT.call({from: "0x0000000000000000000000000000000000000001"});
		const addresssf5vAVV = await FairStockEquityjy7HY4E.setLPT.call(addressix0RLrE, boolriSD8cA, {from: accounts[4]});
		await FairStockEquityjy7HY4E.withdrawMT.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ggUexJo = await FairStockEquityjy7HY4E.setProfitPercentBonus.call(uintkVLUVXn, {from: accounts[5]});

		await expect(FairStockEquityjy7HY4E.onlyDataSource.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdjzAn5D = accounts[4]
		const addressAPhX0wc = accounts[0]
		const addressOpflEqG = accounts[3]
		const addressG1aOgFY = "0x0000000000000000000000000000000000000001"
		const uintEoqFOBW = BigInt("2019")
		const FairStockEquityqiTJuZi = await FairStockEquity.new(addressdjzAn5D, addressAPhX0wc, addressOpflEqG, addressG1aOgFY, uintEoqFOBW, {from: accounts[3]});
		const uintG47iU5C = BigInt("197")
		const uintDRT24gq = BigInt("357")
		const uintWYshUyD = BigInt("1044")
		const uintkzrBi3 = BigInt("1969")
		const uintklUoyFs = BigInt("1995")
		const uintRH2Dt4w = BigInt("1726")
		const uintcK5zmXH = BigInt("363")
		const uintNGyoccA = BigInt("193")
		const uintzfW2vA3 = BigInt("1452")
		const uintfpZB0SM = BigInt("1935")
		const uint256Jze9XKG = await FairStockEquityqiTJuZi.getCostAmount.call(uintG47iU5C, {from: accounts[0]});
		const uint256S9w5UUE = await FairStockEquityqiTJuZi.reduceShare.call(uintDRT24gq, {from: accounts[3]});
		const uint256thmPQSA = await FairStockEquityqiTJuZi.setDegree.call(uintcK5zmXH, uintRH2Dt4w, uintklUoyFs, uintkzrBi3, uintWYshUyD, {from: accounts[2]});
		const uint256SOmD81G = await FairStockEquityqiTJuZi.setProfitPercentBonus.call(uintNGyoccA, {from: accounts[2]});
		const uint256pWeJ8Wt = await FairStockEquityqiTJuZi.invest.call(uintzfW2vA3, {from: accounts[1]});
		const uint256DRvP2F = await FairStockEquityqiTJuZi.invest.call(uintfpZB0SM, {from: accounts[3]});

		await expect(FairStockEquityqiTJuZi.reduceShare.call(uintDRT24gq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressUHSS8z4 = accounts[4]
		const addressa092qs5 = accounts[0]
		const addressWUMZpuT = accounts[3]
		const addressZNFghwK = "0x0000000000000000000000000000000000000001"
		const uintFmyBvh = BigInt("2019")
		const FairStockEquityqiTJuZi = await FairStockEquity.new(addressUHSS8z4, addressa092qs5, addressWUMZpuT, addressZNFghwK, uintFmyBvh, {from: accounts[3]});
		const uintetUK0U8 = BigInt("1145")
		const uintP5b7u5w = BigInt("997")
		const addressXqgeqPB = accounts[4]
		const uintiIfaXwB = BigInt("1053")
		const addressARNbbi = accounts[4]
		const uintUA17HO3 = BigInt("1044")
		const uintuytmCa9 = BigInt("1969")
		const uintW3Y3swp = BigInt("1995")
		const uinttjMKz2G = BigInt("1726")
		const uintj0HJmFe = BigInt("1805")
		const addressH9MLuQ6 = await FairStockEquityqiTJuZi.withdrawMTCallback.call(addressXqgeqPB, uintP5b7u5w, uintetUK0U8, {from: accounts[2]});
		const addressCQnT0Dl = await FairStockEquityqiTJuZi.withdrawLPT.call(addressARNbbi, uintiIfaXwB, {from: accounts[2]});
		await FairStockEquityqiTJuZi.withdrawBonus.call({from: accounts[1]});
		const uint256thmPQSA = await FairStockEquityqiTJuZi.setDegree.call(uintj0HJmFe, uinttjMKz2G, uintW3Y3swp, uintuytmCa9, uintUA17HO3, {from: accounts[2]});

		await expect(FairStockEquityqiTJuZi.withdrawMTCallback.call(addressXqgeqPB, uintP5b7u5w, uintetUK0U8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressN1Advhc = accounts[4]
		const address9cPykW = accounts[0]
		const addressJEVZZl0 = accounts[3]
		const address6AEk2v = "0x0000000000000000000000000000000000000001"
		const uinthKw77u4 = BigInt("2019")
		const FairStockEquityqiTJuZi = await FairStockEquity.new(addressN1Advhc, address9cPykW, addressJEVZZl0, address6AEk2v, uinthKw77u4, {from: accounts[3]});
		const uintXykIjW6 = BigInt("986")
		const uintkQtV8Sp = BigInt("1044")
		const uintP1TeMMd = BigInt("1969")
		const uintFc22jb0 = BigInt("1351")
		const uintYJAEBo7 = BigInt("1726")
		const uintdxeE4K4 = BigInt("363")
		const uint256PWIuTEJ = await FairStockEquityqiTJuZi.invest.call(uintXykIjW6, {from: accounts[0]});
		const uint256thmPQSA = await FairStockEquityqiTJuZi.setDegree.call(uintdxeE4K4, uintYJAEBo7, uintFc22jb0, uintP1TeMMd, uintkQtV8Sp, {from: accounts[2]});

		await expect(FairStockEquityqiTJuZi.invest.call(uintXykIjW6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZovZ6l = accounts[0]
		const addressC1z6E3z = accounts[1]
		const addressJdfV9R1 = "0x0000000000000000000000000000000000000001"
		const addresskLNGdKo = accounts[4]
		const uintkukZBQ = BigInt("1332")
		const FairStockEquityLNBjXsU = await FairStockEquity.new(addressZovZ6l, addressC1z6E3z, addressJdfV9R1, addresskLNGdKo, uintkukZBQ, {from: accounts[5]});
		const uintree22Zf = BigInt("177")
		const uintXtNaknr = BigInt("470")
		const uint3waiU0 = BigInt("1308")
		const uintfekyFbZ = BigInt("140")
		const addressEKv7l4F = accounts[3]
		const uintw0s52wq = BigInt("1721")
		const addresstiS9Zhb = await FairStockEquityLNBjXsU.business.call(addressEKv7l4F, uintfekyFbZ, uint3waiU0, uintXtNaknr, uintree22Zf, {from: "0x0000000000000000000000000000000000000001"});
		const uint2561Eab8V = await FairStockEquityLNBjXsU.reduceShare.call(uintw0s52wq, {from: accounts[1]});

		await expect(FairStockEquityLNBjXsU.business.call(addressEKv7l4F, uintfekyFbZ, uint3waiU0, uintXtNaknr, uintree22Zf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressvBGao5i = accounts[2]
		const addressQqL8SRs = accounts[2]
		const addressiWRO8E1 = accounts[4]
		const addressnaDn9vC = accounts[1]
		const uintx5mAs1o = BigInt("59")
		const FairStockEquityIfpP8rt = await FairStockEquity.new(addressvBGao5i, addressQqL8SRs, addressiWRO8E1, addressnaDn9vC, uintx5mAs1o, {from: accounts[1]});
		const boolwSXd8vl = false
		const addresslo9tMoj = accounts[1]
		const uintgif9wR9 = BigInt("683")
		await FairStockEquityIfpP8rt.withdrawPJ.call({from: accounts[1]});
		const addressCFBysn6 = await FairStockEquityIfpP8rt.setLPT.call(addresslo9tMoj, boolwSXd8vl, {from: accounts[4]});
		const uint256ehMeGSE = await FairStockEquityIfpP8rt.setProfitPercentMT.call(uintgif9wR9, {from: accounts[1]});
		await FairStockEquityIfpP8rt.onlyDataSource.call({from: accounts[3]});

		await expect(FairStockEquityIfpP8rt.withdrawPJ.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressD92yUa = "0x0000000000000000000000000000000000000001"
		const addressWEN7Syr = accounts[1]
		const addressKjOqykS = accounts[3]
		const addresslKuA0L3 = "0x0000000000000000000000000000000000000001"
		const uintBbg98Zl = BigInt("246")
		const FairStockEquityFeLfCPb = await FairStockEquity.new(addressD92yUa, addressWEN7Syr, addressKjOqykS, addresslKuA0L3, uintBbg98Zl, {from: accounts[3]});
		const uintkTKGp6B = BigInt("377")
		const uintRFtpOYM = BigInt("301")
		const uinthmln3UW = BigInt("1105")
		const uintLo9J1aX = BigInt("1610")
		const uintjPyPIWE = BigInt("1905")
		const addressq9JxxfC = accounts[2]
		const uintnHpaJcL = BigInt("2044")
		const uintuDQnCL1 = BigInt("1589")
		const uintTQYFn2r = BigInt("1070")
		const addressn5FySe5 = accounts[3]
		const uintWhDhlMP = BigInt("322")
		const uint256qOv7cHx = await FairStockEquityFeLfCPb.getCostAmount.call(uintkTKGp6B, {from: accounts[5]});
		await FairStockEquityFeLfCPb.withdrawBonus.call({from: accounts[3]});
		const addressRivH6o = await FairStockEquityFeLfCPb.business.call(addressq9JxxfC, uintjPyPIWE, uintLo9J1aX, uinthmln3UW, uintRFtpOYM, {from: accounts[1]});
		const uint2567B55Y3 = await FairStockEquityFeLfCPb.setProfitPercentPJ.call(uintnHpaJcL, {from: accounts[0]});
		const uint256vt7tO4w = await FairStockEquityFeLfCPb.getCostAmount.call(uintuDQnCL1, {from: accounts[0]});
		const addresslpxTmQY = await FairStockEquityFeLfCPb.depositLPT.call(addressn5FySe5, uintTQYFn2r, {from: accounts[0]});
		const uint256bDZPXZW = await FairStockEquityFeLfCPb.setProfitPercentPJ.call(uintWhDhlMP, {from: accounts[5]});

		await expect(FairStockEquityFeLfCPb.withdrawBonus.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslw4wL79 = "0x0000000000000000000000000000000000000001"
		const addressszKkeb9 = accounts[1]
		const addressoibfCTN = accounts[3]
		const addressGC1LR2K = "0x0000000000000000000000000000000000000001"
		const uintjoQmHq3 = BigInt("246")
		const FairStockEquityFeLfCPb = await FairStockEquity.new(addresslw4wL79, addressszKkeb9, addressoibfCTN, addressGC1LR2K, uintjoQmHq3, {from: accounts[3]});
		const uinth7GyM7O = BigInt("1240")
		const addressQRtezb2 = accounts[3]
		const uintV4kwhdC = BigInt("2033")
		const addressXCpPrnf = accounts[1]
		const uintOVSimoA = BigInt("128")
		const addressWFoGWLj = await FairStockEquityFeLfCPb.withdrawLPT.call(addressQRtezb2, uinth7GyM7O, {from: accounts[4]});
		const addressLfTfSf4 = await FairStockEquityFeLfCPb.depositLPT.call(addressXCpPrnf, uintV4kwhdC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qOv7cHx = await FairStockEquityFeLfCPb.getCostAmount.call(uintOVSimoA, {from: accounts[5]});

		await expect(FairStockEquityFeLfCPb.withdrawLPT.call(addressQRtezb2, uinth7GyM7O, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressXwsuzo = accounts[0]
		const addressOLJyuHE = accounts[1]
		const addressEWWxkBS = "0x0000000000000000000000000000000000000001"
		const addressU1C1t0m = accounts[4]
		const uintgJF0v85 = BigInt("1332")
		const FairStockEquityLNBjXsU = await FairStockEquity.new(addressXwsuzo, addressOLJyuHE, addressEWWxkBS, addressU1C1t0m, uintgJF0v85, {from: accounts[5]});
		const uintdV9NFmA = BigInt("177")
		const uintkYhkOCg = BigInt("470")
		const uintVJf8nvP = BigInt("1308")
		const uintcl2tmL6 = BigInt("127")
		const address2VXOnX = "0x0000000000000000000000000000000000000001"
		const uintyJyNCZB = BigInt("701")
		await FairStockEquityLNBjXsU.f.call({from: "0x0000000000000000000000000000000000000001"});
		const addresstiS9Zhb = await FairStockEquityLNBjXsU.business.call(address2VXOnX, uintcl2tmL6, uintVJf8nvP, uintkYhkOCg, uintdV9NFmA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tTsiAgz = await FairStockEquityLNBjXsU.setProfitPercentMT.call(uintyJyNCZB, {from: accounts[2]});

		await expect(FairStockEquityLNBjXsU.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDm3EB10 = accounts[0]
		const address3lJEaP = accounts[1]
		const addressNyI00tR = "0x0000000000000000000000000000000000000001"
		const addressxVFkauP = accounts[4]
		const uintByltv4H = BigInt("1332")
		const FairStockEquityLNBjXsU = await FairStockEquity.new(addressDm3EB10, address3lJEaP, addressNyI00tR, addressxVFkauP, uintByltv4H, {from: accounts[5]});
		const uintGjS7HC = BigInt("177")
		const uintjYrUoGk = BigInt("470")
		const uintgjS6WH = BigInt("1308")
		const uintXsyfGzn = BigInt("0")
		const addressYIbcXhC = "0x0000000000000000000000000000000000000001"
		const addresstiS9Zhb = await FairStockEquityLNBjXsU.business.call(addressYIbcXhC, uintXsyfGzn, uintgjS6WH, uintjYrUoGk, uintGjS7HC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityLNBjXsU.business.call(addressYIbcXhC, uintXsyfGzn, uintgjS6WH, uintjYrUoGk, uintGjS7HC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressAM4aRd7 = "0x0000000000000000000000000000000000000001"
		const addresszKSJqBO = accounts[1]
		const addressh8v7MB2 = accounts[3]
		const addressdsxuGNr = "0x0000000000000000000000000000000000000001"
		const uinthg3h3Yu = BigInt("246")
		const FairStockEquityFeLfCPb = await FairStockEquity.new(addressAM4aRd7, addresszKSJqBO, addressh8v7MB2, addressdsxuGNr, uinthg3h3Yu, {from: accounts[3]});
		const uintPkvROxk = BigInt("108")
		const uintVWmuqnd = BigInt("1977")
		const uintPPOEYwE = BigInt("675")
		const addressXFhGZJm = accounts[5]
		const uint256qOv7cHx = await FairStockEquityFeLfCPb.getCostAmount.call(uintPkvROxk, {from: accounts[5]});
		const addressVy1hiEL = await FairStockEquityFeLfCPb.withdrawMTCallback.call(addressXFhGZJm, uintPPOEYwE, uintVWmuqnd, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityFeLfCPb.withdrawMTCallback.call(addressXFhGZJm, uintPPOEYwE, uintVWmuqnd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressO0VntSP = accounts[0]
		const addressplzIkfc = accounts[1]
		const addressZGYl6LX = "0x0000000000000000000000000000000000000001"
		const addresssO1cO9Z = accounts[4]
		const uintjcdozIv = BigInt("1332")
		const FairStockEquityLNBjXsU = await FairStockEquity.new(addressO0VntSP, addressplzIkfc, addressZGYl6LX, addresssO1cO9Z, uintjcdozIv, {from: accounts[5]});
		const uintFQz65k1 = BigInt("1328")
		const uintSZExrIn = BigInt("1802")
		const addressQIe9qRj = accounts[3]
		const uintsE3LztW = BigInt("177")
		const uintoQppAim = BigInt("470")
		const uintmvE5c5N = BigInt("1298")
		const uintUdIxse = BigInt("8")
		const address2uAbhF = accounts[4]
		const uintpfydwvF = BigInt("1769")
		const addressdUlCKA = await FairStockEquityLNBjXsU.setModule.call(addressQIe9qRj, uintSZExrIn, uintFQz65k1, {from: accounts[5]});
		const addresstiS9Zhb = await FairStockEquityLNBjXsU.business.call(address2uAbhF, uintUdIxse, uintmvE5c5N, uintoQppAim, uintsE3LztW, {from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquityLNBjXsU.checkStart.call({from: accounts[0]});
		const uint256MtCEGpQ = await FairStockEquityLNBjXsU.bonus.call(uintpfydwvF, {from: accounts[0]});
		await FairStockEquityLNBjXsU.onlyDataSource.call({from: accounts[0]});

		await expect(FairStockEquityLNBjXsU.business.call(address2uAbhF, uintUdIxse, uintmvE5c5N, uintoQppAim, uintsE3LztW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressomJG0iL = accounts[3]
		const addressb59f4Fu = accounts[5]
		const addressBLH2rrF = accounts[3]
		const address8bk1Mo = accounts[0]
		const uintdvY4lbr = BigInt("316")
		const FairStockEquity5c3ZiE = await FairStockEquity.new(addressomJG0iL, addressb59f4Fu, addressBLH2rrF, address8bk1Mo, uintdvY4lbr, {from: accounts[2]});
		const uintTmxOrkC = BigInt("226")
		const uintMkReihc = BigInt("444")
		const uintC10lOYl = BigInt("1792")
		const uinthN5VmAg = BigInt("1007")
		const uintooCHVCb = BigInt("1580")
		const uintmNOTha = BigInt("353")
		const addressgIUpAKb = accounts[3]
		const uint256uBOVW3t = await FairStockEquity5c3ZiE.bonus.call(uintTmxOrkC, {from: accounts[0]});
		const uint256n6kIA6y = await FairStockEquity5c3ZiE.setProfitPercentMT.call(uintMkReihc, {from: accounts[2]});
		const addressCoMPWqv = await FairStockEquity5c3ZiE.business.call(addressgIUpAKb, uintmNOTha, uintooCHVCb, uinthN5VmAg, uintC10lOYl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquity5c3ZiE.bonus.call(uintTmxOrkC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address2k1p1I = accounts[4]
		const addressMtylBDh = accounts[2]
		const addressTEF26Fd = accounts[1]
		const addressgDLxjqV = accounts[2]
		const uintVIIMEeS = BigInt("336")
		const FairStockEquitylflqGjV = await FairStockEquity.new(address2k1p1I, addressMtylBDh, addressTEF26Fd, addressgDLxjqV, uintVIIMEeS, {from: accounts[0]});
		const uint10H7Tt = BigInt("1133")
		const uintWKwExG = BigInt("1786")
		const uintpR92N1B = BigInt("176")
		const addressQlsgu61 = accounts[0]
		const uint256N0lgQOO = await FairStockEquitylflqGjV.getCostAmount.call(uint10H7Tt, {from: accounts[1]});
		const addressOe6P7xR = await FairStockEquitylflqGjV.withdrawBonusCallback.call(addressQlsgu61, uintpR92N1B, uintWKwExG, {from: accounts[2]});

		await expect(FairStockEquitylflqGjV.withdrawBonusCallback.call(addressQlsgu61, uintpR92N1B, uintWKwExG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})