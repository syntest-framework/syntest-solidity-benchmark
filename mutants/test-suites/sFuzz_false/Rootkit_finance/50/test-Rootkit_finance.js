const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financetSZgJqT = await Rootkit_finance.new({from: accounts[2]});
		const uintgDbDhc5 = BigInt("1879")
		const addressSvssDwd = accounts[2]
		const addressaQiufgt = accounts[5]
		const uintpgqDiPr = BigInt("59")
		const addressknXc4W = accounts[5]
		const addressTe6EEOx = accounts[3]
		const addresstQw1s2 = accounts[3]
		const booloJuWl7A = await Rootkit_financetSZgJqT.transferFrom.call(addressaQiufgt, addressSvssDwd, uintgDbDhc5, {from: accounts[2]});
		const boolDCEviri = await Rootkit_financetSZgJqT.approve.call(addressknXc4W, uintpgqDiPr, {from: accounts[5]});
		const uint256NTKHjC1 = await Rootkit_financetSZgJqT.balanceOf.call(addressTe6EEOx, {from: accounts[1]});
		const uint256juXat5i = await Rootkit_financetSZgJqT.balanceOf.call(addresstQw1s2, {from: accounts[3]});

		assert.equal(boolDCEviri, true)
		assert.equal(booloJuWl7A, false)
		assert.equal(uint256NTKHjC1, BigInt("0"))
		assert.equal(uint256juXat5i, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeSl6hEXa = await Rootkit_finance.new({from: accounts[2]});
		const addressfVe68oU = accounts[2]
		const uinton0qnra = BigInt("367")
		const addressEUTlLKn = accounts[1]
		const uint256cl2JNt = await Rootkit_financeSl6hEXa.balanceOf.call(addressfVe68oU, {from: accounts[2]});
		const boolTKON6hJ = await Rootkit_financeSl6hEXa.transfer.call(addressEUTlLKn, uinton0qnra, {from: accounts[3]});

		assert.equal(boolTKON6hJ, false)
		assert.equal(uint256cl2JNt, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeDl1u3aN = await Rootkit_finance.new({from: accounts[2]});
		const uintSGMnkk = BigInt("735")
		const addressOUCba7F = accounts[4]
		const addressBbXAIX9 = accounts[1]
		const addressC444SD = accounts[4]
		const addressBTEhPnw = accounts[3]
		const uintAMFePWu = BigInt("1638")
		const addressH9Iv8KS = accounts[2]
		const boolxNjxlXR = await Rootkit_financeDl1u3aN.transfer.call(addressOUCba7F, uintSGMnkk, {from: accounts[4]});
		const uintTAWOZKr = await Rootkit_financeDl1u3aN.allowance.call(addressC444SD, addressBbXAIX9, {from: accounts[4]});
		const uint256DcD50cR = await Rootkit_financeDl1u3aN.balanceOf.call(addressBTEhPnw, {from: accounts[1]});
		const boolNr2uB3r = await Rootkit_financeDl1u3aN.approve.call(addressH9Iv8KS, uintAMFePWu, {from: accounts[1]});

		assert.equal(boolNr2uB3r, true)
		assert.equal(boolxNjxlXR, false)
		assert.equal(uint256DcD50cR, BigInt("0"))
		assert.equal(uintTAWOZKr, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_finance4T8ZuB = await Rootkit_finance.new({from: accounts[3]});
		const uintwOduPuK = BigInt("1942")
		const addressVYzv0sf = accounts[2]
		const addressQ7L5iQo = accounts[0]
		const uintBswyvxI = BigInt("689")
		const addressNHgbv1R = accounts[1]
		const boolmelZS5Y = await Rootkit_finance4T8ZuB.approve.call(addressVYzv0sf, uintwOduPuK, {from: accounts[3]});
		const uint256aGr03PL = await Rootkit_finance4T8ZuB.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256NglbNnL = await Rootkit_finance4T8ZuB.balanceOf.call(addressQ7L5iQo, {from: accounts[3]});
		const boolGrfSRH = await Rootkit_finance4T8ZuB.approve.call(addressNHgbv1R, uintBswyvxI, {from: accounts[0]});

		assert.equal(boolGrfSRH, true)
		assert.equal(boolmelZS5Y, true)
		assert.equal(uint256NglbNnL, BigInt("0"))
		assert.equal(uint256aGr03PL, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_finance8x184L = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCfKDHuR = BigInt("1149")
		const addressJaEmIEj = accounts[4]
		const addressjXweK9I = accounts[5]
		const uintNapbxNR = BigInt("299")
		const addresscZBQmt = accounts[3]
		const addressj5gt2hz = accounts[1]
		const addressulyJCgP = accounts[3]
		const addresslfEjQHc = accounts[4]
		const boolehkk2if = await Rootkit_finance8x184L.transferFrom.call(addressjXweK9I, addressJaEmIEj, uintCfKDHuR, {from: accounts[1]});
		const boolXVtqn16 = await Rootkit_finance8x184L.transfer.call(addresscZBQmt, uintNapbxNR, {from: accounts[2]});
		const uint256vHiPwim = await Rootkit_finance8x184L.balanceOf.call(addressj5gt2hz, {from: accounts[1]});
		const uintkWORh90 = await Rootkit_finance8x184L.allowance.call(addresslfEjQHc, addressulyJCgP, {from: "0x0000000000000000000000000000000000000001"});
	});
})