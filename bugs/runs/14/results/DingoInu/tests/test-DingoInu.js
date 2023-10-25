const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contracteOdWgDu = await DingoInu.new({from: accounts[3]});
		const tokensE62GGQL = BigInt("609")
		const tozejcHIk = accounts[2]
		const spenderyehOGox = accounts[2]
		const tokenOwnerd3gp4dR = accounts[0]
		const spenderz5Q1kB = accounts[0]
		const tokenOwnernit2nSW = accounts[2]
		const successEz8gVDu = await contracteOdWgDu.transfer.call(tozejcHIk, tokensE62GGQL, {from: accounts[4]});
		const remainingm4B3dE = await contracteOdWgDu.allowance.call(tokenOwnerd3gp4dR, spenderyehOGox, {from: "0x0000000000000000000000000000000000000001"});
		const remainingGaJnAv = await contracteOdWgDu.allowance.call(tokenOwnernit2nSW, spenderz5Q1kB, {from: accounts[0]});

		await expect(contracteOdWgDu.transfer.call(tozejcHIk, tokensE62GGQL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractCP1S2af = await DingoInu.new({from: accounts[4]});
		const tokensMNbrWiD = BigInt("1886")
		const spenderAiVwfQc = accounts[1]
		const tokensUI7HJqd = BigInt("334")
		const spenderLNbdk3 = accounts[3]
		const tokenskhArieC = BigInt("75")
		const spenderiQQd0Ud = accounts[2]
		const successo2JHu4F = await contractCP1S2af.approve.call(spenderAiVwfQc, tokensMNbrWiD, {from: accounts[3]});
		const success04stBR = await contractCP1S2af.approve.call(spenderLNbdk3, tokensUI7HJqd, {from: accounts[5]});
		const successxpgeqvB = await contractCP1S2af.approve.call(spenderiQQd0Ud, tokenskhArieC, {from: accounts[3]});

		assert.equal(success04stBR, true)
		assert.equal(successo2JHu4F, true)
		assert.equal(successxpgeqvB, true)
	});

	it('test for DingoInu', async () => {
		const contractxF7sZNQ = await DingoInu.new({from: accounts[2]});
		const spenderqvItwK3 = accounts[2]
		const tokenOwnerlelk2Wm = accounts[1]
		const tokensqZEME2O = BigInt("1647")
		const tos5xQXMl = accounts[2]
		const remainingRKWctUb = await contractxF7sZNQ.allowance.call(tokenOwnerlelk2Wm, spenderqvItwK3, {from: accounts[0]});
		const successqMmcEEi = await contractxF7sZNQ.transfer.call(tos5xQXMl, tokensqZEME2O, {from: accounts[0]});

		assert.equal(remainingRKWctUb, 0)
		await expect(contractxF7sZNQ.transfer.call(tos5xQXMl, tokensqZEME2O, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractjzHOIxx = await DingoInu.new({from: accounts[1]});
		const spendermX8SyPI = accounts[5]
		const tokenOwnervLuqPZK = accounts[4]
		const tokenOwnerI2VPIo4 = accounts[0]
		const spenderYW9AWqw = accounts[2]
		const tokenOwnerQBLlbTQ = accounts[4]
		const remaininglzSaFeI = await contractjzHOIxx.allowance.call(tokenOwnervLuqPZK, spendermX8SyPI, {from: accounts[0]});
		const balanceigKzZB4 = await contractjzHOIxx.balanceOf.call(tokenOwnerI2VPIo4, {from: "0x0000000000000000000000000000000000000001"});
		const remainingHyu4NFU = await contractjzHOIxx.allowance.call(tokenOwnerQBLlbTQ, spenderYW9AWqw, {from: accounts[4]});

		assert.equal(balanceigKzZB4, 0)
		assert.equal(remainingHyu4NFU, 0)
		assert.equal(remaininglzSaFeI, 0)
	});

	it('test for DingoInu', async () => {
		const contractwcqwopi = await DingoInu.new({from: accounts[4]});
		const spenderDTWzkge = accounts[4]
		const tokenOwnerCUaG3l8 = "0x0000000000000000000000000000000000000001"
		const tokensiU3C00w = BigInt("1910")
		const spendery3R9zyJ = accounts[3]
		const remainingtx2qP46 = await contractwcqwopi.allowance.call(tokenOwnerCUaG3l8, spenderDTWzkge, {from: accounts[1]});
		const nullRBViUJp = await contractwcqwopi.totalSupply.call({from: accounts[4]});
		const successtv24uG = await contractwcqwopi.approve.call(spendery3R9zyJ, tokensiU3C00w, {from: accounts[2]});

		assert.equal(nullRBViUJp, 1000000000000000000000000000000)
		assert.equal(remainingtx2qP46, 0)
		assert.equal(successtv24uG, true)
	});

	it('test for DingoInu', async () => {
		const contractBl4ITEJ = await DingoInu.new({from: accounts[2]});
		const tokensgjiaaYZ = BigInt("230")
		const spender59Zr8E = accounts[2]
		const tokensc0OAtFc = BigInt("336")
		const tos9x2j4n = accounts[3]
		const fromC8YzJST = accounts[4]
		const tokensvYVVs84 = BigInt("697")
		const spenderZDxTLSL = accounts[5]
		const spendersJFwcF = accounts[3]
		const tokenOwneritjNpWn = accounts[3]
		const tokensa73d5ty = BigInt("812")
		const toUcfSNFn = accounts[2]
		const fromxH37V7r = accounts[1]
		const tokenOwnero7OAjj9 = accounts[2]
		const successielnjTp = await contractBl4ITEJ.approve.call(spender59Zr8E, tokensgjiaaYZ, {from: accounts[2]});
		const successpTygDqY = await contractBl4ITEJ.transferFrom.call(fromC8YzJST, tos9x2j4n, tokensc0OAtFc, {from: accounts[0]});
		const successrFgwIAZ = await contractBl4ITEJ.approve.call(spenderZDxTLSL, tokensvYVVs84, {from: accounts[0]});
		const remainingnni8SjP = await contractBl4ITEJ.allowance.call(tokenOwneritjNpWn, spendersJFwcF, {from: "0x0000000000000000000000000000000000000001"});
		const successXZMlUI = await contractBl4ITEJ.transferFrom.call(fromxH37V7r, toUcfSNFn, tokensa73d5ty, {from: accounts[4]});
		const balancePQ8GNk3 = await contractBl4ITEJ.balanceOf.call(tokenOwnero7OAjj9, {from: accounts[3]});

		assert.equal(successielnjTp, true)
		await expect(contractBl4ITEJ.transferFrom.call(fromC8YzJST, tos9x2j4n, tokensc0OAtFc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractAQpR5Zg = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenOwnervhmRVzF = accounts[2]
		const tokensTxjNtb = BigInt("812")
		const topDelVM = accounts[3]
		const tokenOwnerOnEJi7J = accounts[4]
		const balanceL0wgLf8 = await contractAQpR5Zg.balanceOf.call(tokenOwnervhmRVzF, {from: accounts[5]});
		const successDOVzCLY = await contractAQpR5Zg.transfer.call(topDelVM, tokensTxjNtb, {from: accounts[0]});
		const balanceqOljtdQ = await contractAQpR5Zg.balanceOf.call(tokenOwnerOnEJi7J, {from: accounts[4]});
	});

	it('test for DingoInu', async () => {
		const contractmBDqTh1 = await DingoInu.new({from: accounts[4]});
		const tokenshcpQHlt = BigInt("277")
		const toN0q89od = accounts[2]
		const tokenOwnerF4Y1q15 = accounts[5]
		const tokensKEkqAIE = BigInt("481")
		const spenderJyuSkcG = accounts[5]
		const tokensWO8xpl = BigInt("734")
		const torr1fGa2 = accounts[0]
		const fromTCEOVY = "0x0000000000000000000000000000000000000001"
		const spenderw5eAAil = accounts[3]
		const tokenOwnerMbUTfgg = accounts[4]
		const successefeaFe = await contractmBDqTh1.transfer.call(toN0q89od, tokenshcpQHlt, {from: accounts[4]});
		const balanceZ01Qk1f = await contractmBDqTh1.balanceOf.call(tokenOwnerF4Y1q15, {from: accounts[3]});
		const successl5BoJT = await contractmBDqTh1.approve.call(spenderJyuSkcG, tokensKEkqAIE, {from: accounts[3]});
		const successkwC3HeN = await contractmBDqTh1.transferFrom.call(fromTCEOVY, torr1fGa2, tokensWO8xpl, {from: accounts[1]});
		const remainingWgrYIBX = await contractmBDqTh1.allowance.call(tokenOwnerMbUTfgg, spenderw5eAAil, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(balanceZ01Qk1f, 0)
		assert.equal(successefeaFe, true)
		assert.equal(successl5BoJT, true)
		await expect(contractmBDqTh1.transferFrom.call(fromTCEOVY, torr1fGa2, tokensWO8xpl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})