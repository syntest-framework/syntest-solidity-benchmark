const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contracthm8zv69 = await DingoInu.new({from: accounts[3]});
		const tokenstbsiqr = BigInt("647")
		const spenderuuF6Qjv = accounts[3]
		const tokensEaFVD6Y = BigInt("190")
		const toXrxaP0K = accounts[5]
		const fromGnphwfa = accounts[2]
		const tokenOwnerH1FYbDg = accounts[3]
		const tokensJJZzKle = BigInt("823")
		const toYIcVwiF = accounts[1]
		const fromDlsgmOy = accounts[4]
		const tokensPpjYlku = BigInt("1893")
		const spenderfOo2uGQ = accounts[3]
		const successsJZygo7 = await contracthm8zv69.approve.call(spenderuuF6Qjv, tokenstbsiqr, {from: accounts[1]});
		const successtgE3a6b = await contracthm8zv69.transferFrom.call(fromGnphwfa, toXrxaP0K, tokensEaFVD6Y, {from: accounts[1]});
		const balanceT0bhk0a = await contracthm8zv69.balanceOf.call(tokenOwnerH1FYbDg, {from: accounts[4]});
		const successYAnnqu = await contracthm8zv69.transferFrom.call(fromDlsgmOy, toYIcVwiF, tokensJJZzKle, {from: "0x0000000000000000000000000000000000000001"});
		const successxJETItH = await contracthm8zv69.approve.call(spenderfOo2uGQ, tokensPpjYlku, {from: accounts[0]});

		assert.equal(successsJZygo7, true)
		await expect(contracthm8zv69.transferFrom.call(fromGnphwfa, toXrxaP0K, tokensEaFVD6Y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractsoTvaPY = await DingoInu.new({from: accounts[1]});
		const tokenOwnerbKpKA3x = accounts[4]
		const tokenswtdT6FU = BigInt("846")
		const spenderyLEK5oE = accounts[2]
		const spenderJX2f9II = accounts[4]
		const tokenOwnernBZ7pF = accounts[4]
		const tokensQlmc9mt = BigInt("1480")
		const spenderysptbLL = accounts[1]
		const balanceR7PAH5J = await contractsoTvaPY.balanceOf.call(tokenOwnerbKpKA3x, {from: accounts[3]});
		const successQZmRix4 = await contractsoTvaPY.approve.call(spenderyLEK5oE, tokenswtdT6FU, {from: accounts[4]});
		const remainingazf4VN = await contractsoTvaPY.allowance.call(tokenOwnernBZ7pF, spenderJX2f9II, {from: accounts[1]});
		const successTcanJgA = await contractsoTvaPY.approve.call(spenderysptbLL, tokensQlmc9mt, {from: accounts[4]});

		assert.equal(balanceR7PAH5J, 0)
		assert.equal(remainingazf4VN, 0)
		assert.equal(successQZmRix4, true)
		assert.equal(successTcanJgA, true)
	});

	it('test for DingoInu', async () => {
		const contractJb8UG8R = await DingoInu.new({from: accounts[3]});
		const spenderIvJMg32 = accounts[1]
		const tokenOwnerRfhOeU6 = accounts[5]
		const spenderEqPooPT = "0x0000000000000000000000000000000000000001"
		const tokenOwnerYHdwGeV = "0x0000000000000000000000000000000000000001"
		const spenderZTnyqkp = "0x0000000000000000000000000000000000000001"
		const tokenOwnerBW8cdlI = accounts[4]
		const tokenOwnerNIAj953 = accounts[4]
		const remainingiMW80T = await contractJb8UG8R.allowance.call(tokenOwnerRfhOeU6, spenderIvJMg32, {from: accounts[2]});
		const remaininglkJ5Qew = await contractJb8UG8R.allowance.call(tokenOwnerYHdwGeV, spenderEqPooPT, {from: accounts[4]});
		const remainingKLPMlyM = await contractJb8UG8R.allowance.call(tokenOwnerBW8cdlI, spenderZTnyqkp, {from: accounts[5]});
		const nullmnxYFEF = await contractJb8UG8R.totalSupply.call({from: accounts[0]});
		const balanceBPoXoNw = await contractJb8UG8R.balanceOf.call(tokenOwnerNIAj953, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(balanceBPoXoNw, 0)
		assert.equal(nullmnxYFEF, 1000000000000000000000000000000)
		assert.equal(remainingKLPMlyM, 0)
		assert.equal(remainingiMW80T, 0)
		assert.equal(remaininglkJ5Qew, 0)
	});

	it('test for DingoInu', async () => {
		const contractk6lKlH = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensizE6hc = BigInt("1039")
		const tod1CegU3 = accounts[3]
		const fromPCgmPyM = accounts[3]
		const tokensGW8UzM = BigInt("1740")
		const tofMj7gP = accounts[2]
		const tokensGRUrCp9 = BigInt("279")
		const spendervnB0vvp = accounts[1]
		const spenderX7nHG7n = accounts[0]
		const tokenOwnerFxwJpt0 = accounts[3]
		const successHrMcCF = await contractk6lKlH.transferFrom.call(fromPCgmPyM, tod1CegU3, tokensizE6hc, {from: accounts[4]});
		const successaAcxZlA = await contractk6lKlH.transfer.call(tofMj7gP, tokensGW8UzM, {from: accounts[4]});
		const nullreMB7uE = await contractk6lKlH.totalSupply.call({from: accounts[1]});
		const successdvnKIAq = await contractk6lKlH.approve.call(spendervnB0vvp, tokensGRUrCp9, {from: accounts[0]});
		const remainingnrDIPWE = await contractk6lKlH.allowance.call(tokenOwnerFxwJpt0, spenderX7nHG7n, {from: accounts[5]});
	});

	it('test for DingoInu', async () => {
		const contractgE2gp8F = await DingoInu.new({from: accounts[1]});
		const tokensvlZhjE0 = BigInt("824")
		const spendermYnWZpM = accounts[4]
		const tokensugmMVG = BigInt("1860")
		const toNZsUw21 = accounts[2]
		const spenderDsMONEs = accounts[4]
		const tokenOwnerNjW0dhy = accounts[3]
		const tokensW5bsuwx = BigInt("1613")
		const toFrbFbeA = accounts[2]
		const successTJlnahY = await contractgE2gp8F.approve.call(spendermYnWZpM, tokensvlZhjE0, {from: accounts[4]});
		const successWYmWfzp = await contractgE2gp8F.transfer.call(toNZsUw21, tokensugmMVG, {from: accounts[4]});
		const remainingAQJpTDM = await contractgE2gp8F.allowance.call(tokenOwnerNjW0dhy, spenderDsMONEs, {from: accounts[0]});
		const successt5BgJde = await contractgE2gp8F.transfer.call(toFrbFbeA, tokensW5bsuwx, {from: accounts[2]});

		assert.equal(successTJlnahY, true)
		await expect(contractgE2gp8F.transfer.call(toNZsUw21, tokensugmMVG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractw05Jtsn = await DingoInu.new({from: accounts[4]});
		const tokenOwnerbn2ZsW = accounts[4]
		const tokensS8myArh = BigInt("1493")
		const toOiFkYCQ = "0x0000000000000000000000000000000000000001"
		const tokensiwPFSHH = BigInt("82")
		const toPBn6XBJ = accounts[4]
		const fromSaNjqOv = accounts[2]
		const balanceuBboQpS = await contractw05Jtsn.balanceOf.call(tokenOwnerbn2ZsW, {from: "0x0000000000000000000000000000000000000001"});
		const successLGz0Gsz = await contractw05Jtsn.transfer.call(toOiFkYCQ, tokensS8myArh, {from: accounts[4]});
		const successfKl7Mm = await contractw05Jtsn.transferFrom.call(fromSaNjqOv, toPBn6XBJ, tokensiwPFSHH, {from: accounts[3]});

		assert.equal(balanceuBboQpS, 1000000000000000000000000000000)
		assert.equal(successLGz0Gsz, true)
		await expect(contractw05Jtsn.transferFrom.call(fromSaNjqOv, toPBn6XBJ, tokensiwPFSHH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})