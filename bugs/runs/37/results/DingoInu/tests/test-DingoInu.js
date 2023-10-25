const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractVpTG4iI = await DingoInu.new({from: accounts[0]});
		const tokensBcDa5Pu = BigInt("1125")
		const spenderpbTKNS = accounts[0]
		const spenderk59zNtG = accounts[4]
		const tokenOwnerjNMytdX = accounts[4]
		const successkXAvKu = await contractVpTG4iI.approve.call(spenderpbTKNS, tokensBcDa5Pu, {from: accounts[0]});
		const remaininggurgiT5 = await contractVpTG4iI.allowance.call(tokenOwnerjNMytdX, spenderk59zNtG, {from: accounts[5]});

		assert.equal(remaininggurgiT5, 0)
		assert.equal(successkXAvKu, true)
	});

	it('test for DingoInu', async () => {
		const contractQjP6h2Z = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenOwnerioTzATj = accounts[2]
		const tokensGq5riJx = BigInt("2035")
		const toOUHvjFn = "0x0000000000000000000000000000000000000001"
		const spenderCaMHzse = accounts[1]
		const tokenOwnerMCBISOL = accounts[3]
		const balanceH7u4I4a = await contractQjP6h2Z.balanceOf.call(tokenOwnerioTzATj, {from: accounts[3]});
		const successvMd7y7b = await contractQjP6h2Z.transfer.call(toOUHvjFn, tokensGq5riJx, {from: accounts[1]});
		const remainingYw0Ona = await contractQjP6h2Z.allowance.call(tokenOwnerMCBISOL, spenderCaMHzse, {from: accounts[4]});
	});

	it('test for DingoInu', async () => {
		const contractYFF9Hb0 = await DingoInu.new({from: accounts[4]});
		const tokensa9X1VPE = BigInt("1813")
		const todteKRRP = accounts[1]
		const fromZWKAakr = "0x0000000000000000000000000000000000000001"
		const spenderYOdmv5 = accounts[5]
		const tokenOwnerq4LWbCz = accounts[2]
		const successH4dCfWR = await contractYFF9Hb0.transferFrom.call(fromZWKAakr, todteKRRP, tokensa9X1VPE, {from: accounts[0]});
		const remainingIkjEhf = await contractYFF9Hb0.allowance.call(tokenOwnerq4LWbCz, spenderYOdmv5, {from: accounts[3]});

		await expect(contractYFF9Hb0.transferFrom.call(fromZWKAakr, todteKRRP, tokensa9X1VPE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractPszFDaq = await DingoInu.new({from: accounts[0]});
		const tokenOwnerOX0if69 = accounts[0]
		const tokensNTIGD5O = BigInt("681")
		const spenderM5lhEmC = accounts[2]
		const tokenOwnerwMBKbx = accounts[1]
		const tokenOwnerr3eMj9o = accounts[3]
		const balanceip1kfwY = await contractPszFDaq.balanceOf.call(tokenOwnerOX0if69, {from: accounts[4]});
		const successNcp6Yem = await contractPszFDaq.approve.call(spenderM5lhEmC, tokensNTIGD5O, {from: accounts[2]});
		const balancebJbYUO = await contractPszFDaq.balanceOf.call(tokenOwnerwMBKbx, {from: accounts[3]});
		const balanceGsfyXl6 = await contractPszFDaq.balanceOf.call(tokenOwnerr3eMj9o, {from: accounts[4]});

		assert.equal(balanceGsfyXl6, 0)
		assert.equal(balancebJbYUO, 0)
		assert.equal(balanceip1kfwY, 1000000000000000000000000000000)
		assert.equal(successNcp6Yem, true)
	});

	it('test for DingoInu', async () => {
		const contract2nmUcW = await DingoInu.new({from: accounts[3]});
		const tokensVC0HYuA = BigInt("271")
		const toLHZd1ps = accounts[5]
		const tokensrK1PNg1 = BigInt("492")
		const tonQwRpyt = accounts[3]
		const nullwchjGuz = await contract2nmUcW.totalSupply.call({from: accounts[4]});
		const successOqIs8ft = await contract2nmUcW.transfer.call(toLHZd1ps, tokensVC0HYuA, {from: accounts[1]});
		const successOsmDOKo = await contract2nmUcW.transfer.call(tonQwRpyt, tokensrK1PNg1, {from: accounts[2]});

		assert.equal(nullwchjGuz, 1000000000000000000000000000000)
		await expect(contract2nmUcW.transfer.call(toLHZd1ps, tokensVC0HYuA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractiCxzze = await DingoInu.new({from: accounts[0]});
		const tokensy76n5ur = BigInt("790")
		const toFjXb7TI = accounts[1]
		const tokenslTsZtUZ = BigInt("1405")
		const toFRDQVqp = accounts[4]
		const tokensGOdfuil = BigInt("1125")
		const spenderykMhZqX = accounts[2]
		const successFluDWQ0 = await contractiCxzze.transfer.call(toFjXb7TI, tokensy76n5ur, {from: accounts[0]});
		const successtpd1gfn = await contractiCxzze.transfer.call(toFRDQVqp, tokenslTsZtUZ, {from: accounts[4]});
		const successLtAmp0 = await contractiCxzze.approve.call(spenderykMhZqX, tokensGOdfuil, {from: accounts[0]});

		assert.equal(successFluDWQ0, true)
		await expect(contractiCxzze.transfer.call(toFRDQVqp, tokenslTsZtUZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})