const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintGUR5Afy = BigInt("995")
		const stringkaFsjX5 = "ozhKtDQNYPDeCxPwA1RDvFqMMslWHv2MIdt4Ssmoj2zp2TTL9eXs1g8KePeAbnpx"
		const stringeRfX0Sg = "s73aoJSuo9wz8XChuj6xb3tFV3wY49VczPYI4lpjbRsjFKpWnAka7AuF7YiNBE"
		const uintt8I6COA = BigInt("1757")
		const TetherTokenXp4xvKv = await TetherToken.new(uintGUR5Afy, stringkaFsjX5, stringeRfX0Sg, uintt8I6COA, {from: accounts[1]});
		const addressKLvhLHY = accounts[3]
		const addressLx26zzt = accounts[4]
		const uintBSUtHc = BigInt("1390")
		const addressnkTbGkS = accounts[3]
		const addresstqgLPBO = accounts[3]
		const uintKJHSstG = BigInt("74")
		const uintNCBQfEM = BigInt("1864")
		const uintgr9HwqT = await TetherTokenXp4xvKv.allowance.call(addressLx26zzt, addressKLvhLHY, {from: accounts[4]});
//		const addressLlmw7Ef = await TetherTokenXp4xvKv.transferFrom.call(addresstqgLPBO, addressnkTbGkS, uintBSUtHc, {from: accounts[3]});
//		const uintHWjcam = await TetherTokenXp4xvKv.redeem.call(uintKJHSstG, {from: accounts[2]});
//		const uintaoDDQO5 = await TetherTokenXp4xvKv.issue.call(uintNCBQfEM, {from: accounts[3]});

		assert.equal(uintgr9HwqT, BigInt("0"))
		await expect(TetherTokenXp4xvKv.transferFrom.call(addresstqgLPBO, addressnkTbGkS, uintBSUtHc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintCM1JrdN = BigInt("600")
		const stringLBisVhg = "JHVXWYE3uy2ojTKRqGOo"
		const stringb3Uonn = "hXnUjP24AdmazLRmtogUNeMV3XL3FnSOLAzfi5r22Ga5kGDlf51wZvQc5D21XwUpgw5NMX3mdYhkpKhXbwG"
		const uintZ701z8p = BigInt("1746")
		const TetherTokenw5qXZHH = await TetherToken.new(uintCM1JrdN, stringLBisVhg, stringb3Uonn, uintZ701z8p, {from: accounts[5]});
		const uinty2Flf9L = BigInt("883")
		const addresssWRzgKJ = accounts[3]
		const addressl1BZfzA = accounts[5]
		const addressQAPAM3T = accounts[2]
//		const uintT56LBZ = await TetherTokenw5qXZHH.issue.call(uinty2Flf9L, {from: accounts[4]});
//		const uintCXqZpif = await TetherTokenw5qXZHH.allowance.call(addressl1BZfzA, addresssWRzgKJ, {from: accounts[3]});
//		const uintABsfKEH = await TetherTokenw5qXZHH.totalSupply.call({from: accounts[3]});
//		const addressTe4IQPB = await TetherTokenw5qXZHH.deprecate.call(addressQAPAM3T, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokenw5qXZHH.issue.call(uinty2Flf9L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintwuJKbd2 = BigInt("219")
		const stringIm7VOJ4 = "oRJMb6"
		const stringwOFjIRM = "x4fVacfuxGx"
		const uintjd5qxA = BigInt("246")
		const TetherTokenIyBKOZQ = await TetherToken.new(uintwuJKbd2, stringIm7VOJ4, stringwOFjIRM, uintjd5qxA, {from: accounts[1]});
		const uintrC3ru4o = BigInt("828")
		const uintK83hiLc = BigInt("491")
		const addressUq2nyxH = accounts[0]
		const addressJFBt5d = accounts[0]
		const uintQh3C4My = BigInt("525")
		const addressFREau1u = accounts[2]
//		const uintYqyfFKc = await TetherTokenIyBKOZQ.setParams.call(uintK83hiLc, uintrC3ru4o, {from: accounts[0]});
//		const addressQc9xGhI = await TetherTokenIyBKOZQ.deprecate.call(addressUq2nyxH, {from: accounts[2]});
//		const uintQS1uf4b = await TetherTokenIyBKOZQ.totalSupply.call({from: accounts[0]});
//		const addressRo0ZNUQ = await TetherTokenIyBKOZQ.deprecate.call(addressJFBt5d, {from: accounts[4]});
//		const addressCZ0myv = await TetherTokenIyBKOZQ.approve.call(addressFREau1u, uintQh3C4My, {from: accounts[3]});

		await expect(TetherTokenIyBKOZQ.setParams.call(uintK83hiLc, uintrC3ru4o, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintZdXH8J = BigInt("422")
		const stringkxnY2H = "hE9THoYDMkz71IUNW2osfQAjSM9cf1XLYjle0R1csYpMS4PpzO4JXOL9M9x2fAleDabsR"
		const stringwZwm8Qu = "6qWXXQzlaxd25wVaxzLv7gFxwq8t7qDii1pJFLLw5YKKwb1aXgD"
		const uintznepYIK = BigInt("960")
		const TetherTokenV0Ag079 = await TetherToken.new(uintZdXH8J, stringkxnY2H, stringwZwm8Qu, uintznepYIK, {from: accounts[2]});
		const uintPt71Nil = BigInt("2010")
		const addressBejDwcZ = accounts[0]
		const uintyx6BuN8 = BigInt("909")
		const addresstkTsRqc = accounts[0]
		const addresspuU9kdJ = accounts[0]
		const uintfORKklP = BigInt("404")
		const addressY36xtaM = accounts[2]
		const uintywwKfQ = BigInt("13")
		const addressnQ3SYkp = accounts[3]
		const addresssuSCzG = accounts[3]
		const uintOovC3I9 = BigInt("154")
		const addressMFr5fnd = accounts[0]
//		const addressvRFO1bo = await TetherTokenV0Ag079.transfer.call(addressBejDwcZ, uintPt71Nil, {from: "0x0000000000000000000000000000000000000001"});
//		const uint7XNgwq = await TetherTokenV0Ag079.totalSupply.call({from: accounts[2]});
//		const addresslvZP3XJ = await TetherTokenV0Ag079.transferFrom.call(addresspuU9kdJ, addresstkTsRqc, uintyx6BuN8, {from: accounts[4]});
//		const addressABnyiwD = await TetherTokenV0Ag079.transfer.call(addressY36xtaM, uintfORKklP, {from: accounts[2]});
//		const addressqrZSP5D = await TetherTokenV0Ag079.transferFrom.call(addresssuSCzG, addressnQ3SYkp, uintywwKfQ, {from: accounts[0]});
//		const addressCQtE4bE = await TetherTokenV0Ag079.approve.call(addressMFr5fnd, uintOovC3I9, {from: accounts[3]});

		await expect(TetherTokenV0Ag079.transfer.call(addressBejDwcZ, uintPt71Nil, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintjnMUtr = BigInt("211")
		const stringWwEAj0 = "K9SJLqCFCKhI8gf0cA2YR3Ls8xYv1K5cxvAOUUBhFn5e7CLK3B5RRPFsab7Lv"
		const stringnlKofxA = "wnp1UPPMcMve9qpNsARFsMsd6Z2NnqdQueYgmVCuxiPkeaa"
		const uintWSNdUTA = BigInt("1621")
		const TetherTokenGdAZg4y = await TetherToken.new(uintjnMUtr, stringWwEAj0, stringnlKofxA, uintWSNdUTA, {from: accounts[1]});
		const addresswaq6mph = accounts[2]
		const uintLyWiiY5 = BigInt("841")
		const uintxNCO1h = BigInt("1204")
		const uintLoXyFvP = BigInt("205")
		const addresspdbDb4 = accounts[4]
		const uintopITqj = BigInt("1156")
		const uintJH9hYz8 = BigInt("1923")
		const uintHXfsy6C = BigInt("238")
		const addresssquMpDJ = accounts[4]
		const uintCZBY6Y6 = await TetherTokenGdAZg4y.balanceOf.call(addresswaq6mph, {from: accounts[2]});
//		const uintEJBrEZy = await TetherTokenGdAZg4y.issue.call(uintLyWiiY5, {from: accounts[4]});
//		const uintsnx39Ed = await TetherTokenGdAZg4y.setParams.call(uintLoXyFvP, uintxNCO1h, {from: accounts[1]});
//		const addressAaXaOsD = await TetherTokenGdAZg4y.deprecate.call(addresspdbDb4, {from: accounts[4]});
//		const uintI36pJnc = await TetherTokenGdAZg4y.setParams.call(uintJH9hYz8, uintopITqj, {from: accounts[3]});
//		const addressy1Z1A2g = await TetherTokenGdAZg4y.transfer.call(addresssquMpDJ, uintHXfsy6C, {from: accounts[5]});

		assert.equal(uintCZBY6Y6, BigInt("0"))
		await expect(TetherTokenGdAZg4y.issue.call(uintLyWiiY5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintZ7FAgRZ = BigInt("628")
		const stringLaJq7WS = "kw9Nyt9nJgrIQWFEx23BsQl0kdgOhl1klWDMQLXsYrzsIOP5nNA"
		const stringcOJmI9q = "eFdQNvxhtJG0pVnHcBscNcucxW2ZyogJ"
		const uintjGhYJKX = BigInt("1631")
		const TetherTokenK0egqe = await TetherToken.new(uintZ7FAgRZ, stringLaJq7WS, stringcOJmI9q, uintjGhYJKX, {from: "0x0000000000000000000000000000000000000001"});
		const addressTqAtJpT = accounts[0]
		const addressef9VHTg = accounts[3]
		const uinta0o8372 = BigInt("696")
		const addressIW9gzSm = accounts[3]
		const addressYiY6Ffe = accounts[2]
		const addressVaKHbV9 = accounts[0]
		const uinttdIWR0t = await TetherTokenK0egqe.allowance.call(addressef9VHTg, addressTqAtJpT, {from: accounts[2]});
		const addresspZGbBhG = await TetherTokenK0egqe.approve.call(addressIW9gzSm, uinta0o8372, {from: accounts[1]});
		const uintLIZKk1X = await TetherTokenK0egqe.allowance.call(addressVaKHbV9, addressYiY6Ffe, {from: accounts[2]});
		const uintqw7IuGj = await TetherTokenK0egqe.totalSupply.call({from: accounts[1]});
	});

	it('test for TetherToken', async () => {
		const uintMz5p4uJ = BigInt("571")
		const stringwgwFQZQ = "A4WOfKyD2G88BASTdKQbEF6XeD4HAP8f4PtkMPDUEm67eYGbr19UpOhukmeg8MrPLMaSIf4wDFO1yhTvx0Web2cA7"
		const stringcpemjnk = "OYqDvalZnOq4cERYqj1bNwNwcGs6rHuHgnjpdzHIcqxmevUcGPLFXJqIaTlEoWsHOycb"
		const uintkGEem46 = BigInt("949")
		const TetherTokendFPAuXX = await TetherToken.new(uintMz5p4uJ, stringwgwFQZQ, stringcpemjnk, uintkGEem46, {from: accounts[2]});
		const uintEu0ZjPq = BigInt("81")
		const addresswoQ5bp4 = accounts[2]
		const uintm9TfiI5 = BigInt("989")
		const addressEagypyk = accounts[1]
		const addressjk492PB = accounts[4]
		const addressxxlBef2 = accounts[2]
//		const uintbsvm33D = await TetherTokendFPAuXX.redeem.call(uintEu0ZjPq, {from: accounts[4]});
//		const uinthO7q2AV = await TetherTokendFPAuXX.balanceOf.call(addresswoQ5bp4, {from: accounts[1]});
//		const uintCYMwIdI = await TetherTokendFPAuXX.totalSupply.call({from: accounts[4]});
//		const addressRl0bFl7 = await TetherTokendFPAuXX.transferFrom.call(addressjk492PB, addressEagypyk, uintm9TfiI5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint6If1J5 = await TetherTokendFPAuXX.balanceOf.call(addressxxlBef2, {from: accounts[3]});

		await expect(TetherTokendFPAuXX.redeem.call(uintEu0ZjPq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintQWAcrf1 = BigInt("211")
		const stringWwEAj0 = "K9SJLqCFCKhI8gf0cA2YR3Ls8xYv1K5cxvAOUUBhFn5e7CLK3B5RRPFsab7Lv"
		const stringnlKofxA = "wnp1UPPMcMve9qpNsARFsMsd6Z2NnqdQueYgmVCuxiPkeaa"
		const uinthR88tOT = BigInt("1621")
		const TetherTokenGdAZg4y = await TetherToken.new(uintQWAcrf1, stringWwEAj0, stringnlKofxA, uinthR88tOT, {from: accounts[1]});
		const address7JAJPN = accounts[2]
		const uintr9bdHj = BigInt("1204")
		const uintknwQaSh = BigInt("205")
		const addressIKkdMU4 = accounts[4]
		const uintBavBWov = BigInt("1156")
		const uintoHPeTkE = BigInt("1923")
		const uintcKgbUA2 = BigInt("238")
		const addressMKdmWzT = accounts[4]
		const uintCZBY6Y6 = await TetherTokenGdAZg4y.balanceOf.call(address7JAJPN, {from: accounts[2]});
//		const uintsnx39Ed = await TetherTokenGdAZg4y.setParams.call(uintknwQaSh, uintr9bdHj, {from: accounts[1]});
//		const addressAaXaOsD = await TetherTokenGdAZg4y.deprecate.call(addressIKkdMU4, {from: accounts[4]});
//		const uintI36pJnc = await TetherTokenGdAZg4y.setParams.call(uintoHPeTkE, uintBavBWov, {from: accounts[3]});
//		const addressy1Z1A2g = await TetherTokenGdAZg4y.transfer.call(addressMKdmWzT, uintcKgbUA2, {from: accounts[5]});

		assert.equal(uintCZBY6Y6, BigInt("0"))
		await expect(TetherTokenGdAZg4y.setParams.call(uintknwQaSh, uintr9bdHj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintjl6ubSj = BigInt("1144")
		const stringZJ4lgnj = "miFbpYNAm3TTf"
		const stringAeSGgWt = "uGCrH7Kwv98coVDlDAkB8yEA5ZQLosF54nAXW8hMXfiuxdrOUC2bnI2BpcEWAhpAlnKSto8aIB9q5"
		const uintpBmZKSQ = BigInt("1034")
		const TetherTokenHeXrQPP = await TetherToken.new(uintjl6ubSj, stringZJ4lgnj, stringAeSGgWt, uintpBmZKSQ, {from: accounts[0]});
		const addressHJBNHBo = accounts[0]
		const uintZ7za87n = BigInt("1959")
		const uintI4H8sAJ = BigInt("279")
		const uintNqv7NwA = BigInt("220")
//		const addresssFSffLy = await TetherTokenHeXrQPP.deprecate.call(addressHJBNHBo, {from: accounts[1]});
//		const uintA0ZA3sc = await TetherTokenHeXrQPP.issue.call(uintZ7za87n, {from: accounts[4]});
//		const uintK0uLm0b = await TetherTokenHeXrQPP.issue.call(uintI4H8sAJ, {from: accounts[5]});
//		const uintumJbGrP = await TetherTokenHeXrQPP.issue.call(uintNqv7NwA, {from: accounts[3]});

		await expect(TetherTokenHeXrQPP.deprecate.call(addressHJBNHBo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintSANtRh = BigInt("422")
		const stringkxnY2H = "hE9THoYDMkz71IUNW2osfQAjSM9cf1XLYjle0R1csYpMS4PpzO4JXOL9M9x2fAleDabsR"
		const stringwZwm8Qu = "6qWXXQzlaxd25wVaxzLv7gFxwq8t7qDii1pJFLLw5YKKwb1aXgD"
		const uintMACWZ84 = BigInt("960")
		const TetherTokenV0Ag079 = await TetherToken.new(uintSANtRh, stringkxnY2H, stringwZwm8Qu, uintMACWZ84, {from: accounts[2]});
		const uintZoTDlK9 = BigInt("404")
		const addresssXJDIYc = accounts[2]
		const uintAuAVUpg = BigInt("13")
		const addressU32td6 = accounts[3]
		const addressiEcdqxD = accounts[3]
		const uintM2oOfaS = BigInt("154")
		const addressDhDlC0P = accounts[0]
		const uint7XNgwq = await TetherTokenV0Ag079.totalSupply.call({from: accounts[2]});
		const addressABnyiwD = await TetherTokenV0Ag079.transfer.call(addresssXJDIYc, uintZoTDlK9, {from: accounts[2]});
//		const addressqrZSP5D = await TetherTokenV0Ag079.transferFrom.call(addressiEcdqxD, addressU32td6, uintAuAVUpg, {from: accounts[0]});
//		const addressCQtE4bE = await TetherTokenV0Ag079.approve.call(addressDhDlC0P, uintM2oOfaS, {from: accounts[3]});

		assert.equal(uint7XNgwq, BigInt("422"))
		await expect(TetherTokenV0Ag079.transferFrom.call(addressiEcdqxD, addressU32td6, uintAuAVUpg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintGgxHzBe = BigInt("1144")
		const stringZJ4lgnj = "miFbpYNAm3TTf"
		const stringAeSGgWt = "uGCrH7Kwv98coVDlDAkB8yEA5ZQLosF54nAXW8hMXfiuxdrOUC2bnI2BpcEWAhpAlnKSto8aIB9q5"
		const uintb2c0lLz = BigInt("1034")
		const TetherTokenHeXrQPP = await TetherToken.new(uintGgxHzBe, stringZJ4lgnj, stringAeSGgWt, uintb2c0lLz, {from: accounts[0]});
		const uintmVI2p3B = BigInt("1608")
		const addressnNwJ7YZ = accounts[2]
		const uintoGSVvZg = BigInt("220")
		const uintkWQrwK0 = await TetherTokenHeXrQPP.totalSupply.call({from: accounts[4]});
		const addressnncZxIl = await TetherTokenHeXrQPP.approve.call(addressnNwJ7YZ, uintmVI2p3B, {from: "0x0000000000000000000000000000000000000001"});
//		const uintumJbGrP = await TetherTokenHeXrQPP.issue.call(uintoGSVvZg, {from: accounts[3]});

		assert.equal(uintkWQrwK0, BigInt("1144"))
		await expect(TetherTokenHeXrQPP.issue.call(uintoGSVvZg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintYFUYZQd = BigInt("1144")
		const stringZJ4lgnj = "miFbpYNAm3TTf"
		const stringAeSGgWt = "uGCrH7Kwv98coVDlDAkB8yEA5ZQLosF54nAXW8hMXfiuxdrOUC2bnI2BpcEWAhpAlnKSto8aIB9q5"
		const uintOBDoDJv = BigInt("1034")
		const TetherTokenHeXrQPP = await TetherToken.new(uintYFUYZQd, stringZJ4lgnj, stringAeSGgWt, uintOBDoDJv, {from: accounts[0]});
		const uintud59k9 = BigInt("1978")
		const uint5iEAOo = BigInt("605")
		const uintq9D9rE = BigInt("1200")
		const uintQo2xVNO = BigInt("947")
		const uintPHxhy6L = BigInt("1965")
		const uintFmDOTW = BigInt("1174")
		const uintIHl4FtW = await TetherTokenHeXrQPP.issue.call(uintud59k9, {from: accounts[0]});
//		const uintjgk1bGx = await TetherTokenHeXrQPP.redeem.call(uint5iEAOo, {from: accounts[4]});
//		const uintGxecph = await TetherTokenHeXrQPP.setParams.call(uintQo2xVNO, uintq9D9rE, {from: accounts[4]});
//		const uintNLGa07o = await TetherTokenHeXrQPP.issue.call(uintPHxhy6L, {from: accounts[3]});
//		const uintK0uLm0b = await TetherTokenHeXrQPP.issue.call(uintFmDOTW, {from: accounts[5]});

		await expect(TetherTokenHeXrQPP.redeem.call(uint5iEAOo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintsaVqxpM = BigInt("1144")
		const stringZJ4lgnj = "miFbpYNAm3TTf"
		const stringAeSGgWt = "uGCrH7Kwv98coVDlDAkB8yEA5ZQLosF54nAXW8hMXfiuxdrOUC2bnI2BpcEWAhpAlnKSto8aIB9q5"
		const uintHcYItxt = BigInt("1034")
		const TetherTokenHeXrQPP = await TetherToken.new(uintsaVqxpM, stringZJ4lgnj, stringAeSGgWt, uintHcYItxt, {from: accounts[0]});
		const uintZjjbWGt = BigInt("136")
		const address3gH5T5 = accounts[2]
		const uintUm9Y4cI = BigInt("103")
		const uintrmcoCUh = BigInt("225")
		const uintMvhj8WZ = BigInt("122")
		const addressiN44DT = accounts[2]
		const addressMgUuWcI = accounts[5]
		const addressYNdMpFf = await TetherTokenHeXrQPP.approve.call(address3gH5T5, uintZjjbWGt, {from: accounts[0]});
		const uintRVwSav5 = await TetherTokenHeXrQPP.redeem.call(uintUm9Y4cI, {from: accounts[0]});
//		const uintumJbGrP = await TetherTokenHeXrQPP.issue.call(uintrmcoCUh, {from: accounts[3]});
//		const addressR0j1Fcv = await TetherTokenHeXrQPP.transferFrom.call(addressMgUuWcI, addressiN44DT, uintMvhj8WZ, {from: accounts[3]});

		await expect(TetherTokenHeXrQPP.issue.call(uintrmcoCUh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintcSc9Jzp = BigInt("726")
		const stringAw0jrZa = "RvwxPp0q1qhBmHe2icnmNbqrMnr7YLVykKEZFS6mH4"
		const stringiakkxEa = "2svIlo0ugv4DhbkE4AEeDkG1PXnUTDD6ri5bZ2xWRSo1BPLl4JsTLFAmk6FetMHlGLFC"
		const uintEktopvU = BigInt("1041")
		const TetherTokenM1g390a = await TetherToken.new(uintcSc9Jzp, stringAw0jrZa, stringiakkxEa, uintEktopvU, {from: accounts[0]});
		const addressQiwmF0G = accounts[3]
		const addressoedxYQ = accounts[2]
		const uintoIbE0kf = BigInt("1976")
		const uintdMYxNpd = BigInt("1437")
		const addressziEJua5 = accounts[2]
		const addressu17OLTt = accounts[3]
		const uintmwJetce = BigInt("1099")
		const addressXhBvMA0 = accounts[3]
		const addressgplBSal = accounts[2]
		const addresscvsIyak = await TetherTokenM1g390a.deprecate.call(addressQiwmF0G, {from: accounts[0]});
		const uintBRvjaz = await TetherTokenM1g390a.balanceOf.call(addressoedxYQ, {from: accounts[0]});
//		const uintbsGkZV8 = await TetherTokenM1g390a.redeem.call(uintoIbE0kf, {from: accounts[0]});
//		const addresszDZ5vOt = await TetherTokenM1g390a.transferFrom.call(addressu17OLTt, addressziEJua5, uintdMYxNpd, {from: accounts[1]});
//		const addressX57z6BG = await TetherTokenM1g390a.transferFrom.call(addressgplBSal, addressXhBvMA0, uintmwJetce, {from: accounts[2]});

		assert.equal(uintBRvjaz, BigInt("0"))
		await expect(TetherTokenM1g390a.redeem.call(uintoIbE0kf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})