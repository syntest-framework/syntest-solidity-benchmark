const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractk0Wvaq9 = await ERC20.new({from: accounts[2]});
		const value0qVfTt = BigInt("1193")
		const spenderLOnJtI = accounts[1]
		const valueidRqWpq = BigInt("655")
		const tovcv9jNu = accounts[4]
		const frommQe1j4I = "0x0000000000000000000000000000000000000001"
		const ownerX3cCQJ2 = accounts[1]
		const valuegYwZcai = BigInt("186")
		const spenderiKY6n9S = accounts[4]
		const valuefcXNDpb = BigInt("149")
		const spenderTUroYdr = accounts[4]
		const nullxHOpzhR = await contractk0Wvaq9.approve.call(spenderLOnJtI, value0qVfTt, {from: accounts[1]});
		const nulljNgBDFN = await contractk0Wvaq9.transferFrom.call(frommQe1j4I, tovcv9jNu, valueidRqWpq, {from: accounts[4]});
		const nullkWyyFz9 = await contractk0Wvaq9.balanceOf.call(ownerX3cCQJ2, {from: accounts[5]});
		const null8dAsU2 = await contractk0Wvaq9.approve.call(spenderiKY6n9S, valuegYwZcai, {from: accounts[3]});
		const nullvctJTFY = await contractk0Wvaq9.approve.call(spenderTUroYdr, valuefcXNDpb, {from: accounts[0]});

		assert.equal(nullxHOpzhR, true)
		await expect(contractk0Wvaq9.transferFrom.call(frommQe1j4I, tovcv9jNu, valueidRqWpq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractJiIDHjd = await ERC20.new({from: accounts[0]});
		const addedValuerzaOeQI = BigInt("1462")
		const spendertzRUjLq = accounts[3]
		const valuem9zWe7W = BigInt("436")
		const toVD7HpmB = accounts[2]
		const ownertonKe3 = accounts[2]
		const valueAwz3QjP = BigInt("1957")
		const toxJ3ORhl = accounts[2]
		const fromBZtyml = accounts[1]
		const addedValueIZpTUkF = BigInt("1328")
		const spenderKJZsrb = "0x0000000000000000000000000000000000000001"
		const nullEtaYZU = await contractJiIDHjd.increaseAllowance.call(spendertzRUjLq, addedValuerzaOeQI, {from: accounts[3]});
		const nullyYrikg = await contractJiIDHjd.transfer.call(toVD7HpmB, valuem9zWe7W, {from: accounts[3]});
		const nullNU9qOiT = await contractJiIDHjd.balanceOf.call(ownertonKe3, {from: "0x0000000000000000000000000000000000000001"});
		const nullrp7Pvcp = await contractJiIDHjd.transferFrom.call(fromBZtyml, toxJ3ORhl, valueAwz3QjP, {from: accounts[0]});
		const nullUSQcKpY = await contractJiIDHjd.increaseAllowance.call(spenderKJZsrb, addedValueIZpTUkF, {from: accounts[0]});

		assert.equal(nullEtaYZU, true)
		await expect(contractJiIDHjd.transfer.call(toVD7HpmB, valuem9zWe7W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contracthecJRs6 = await ERC20.new({from: accounts[2]});
		const spenderxwBvppD = accounts[0]
		const ownerSJh6hRs = accounts[0]
		const addedValueG4jwnoR = BigInt("611")
		const spenderLv45NQI = accounts[2]
		const addedValuergOKSGM = BigInt("2010")
		const spendergzxzgA7 = accounts[4]
		const nullAkZmlCW = await contracthecJRs6.allowance.call(ownerSJh6hRs, spenderxwBvppD, {from: accounts[0]});
		const nullu5mhHpE = await contracthecJRs6.increaseAllowance.call(spenderLv45NQI, addedValueG4jwnoR, {from: accounts[1]});
		const nullVUUOibN = await contracthecJRs6.increaseAllowance.call(spendergzxzgA7, addedValuergOKSGM, {from: accounts[0]});

		assert.equal(nullAkZmlCW, 0)
		assert.equal(nullVUUOibN, true)
		assert.equal(nullu5mhHpE, true)
	});

	it('test for ERC20', async () => {
		const contractRnTsDaj = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addedValuecRM4mu = BigInt("612")
		const spenderYPKbkEO = accounts[3]
		const valueih2bVF8 = BigInt("718")
		const toerHMW1e = accounts[3]
		const fromdLatP8y = accounts[2]
		const nullTn1auCA = await contractRnTsDaj.increaseAllowance.call(spenderYPKbkEO, addedValuecRM4mu, {from: accounts[1]});
		const nullXoVrQME = await contractRnTsDaj.transferFrom.call(fromdLatP8y, toerHMW1e, valueih2bVF8, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ERC20', async () => {
		const contractukO9vLe = await ERC20.new({from: accounts[3]});
		const ownerpS9MYF9 = accounts[3]
		const valueh1MM3cO = BigInt("1674")
		const tovvqjKuv = accounts[3]
		const valuewGAwgIK = BigInt("1063")
		const spenderrVnvDfV = accounts[4]
		const subtractedValuedUspAtt = BigInt("1844")
		const spenderf5RSH0P = accounts[0]
		const valuedcFTZoF = BigInt("664")
		const tod8xn27W = "0x0000000000000000000000000000000000000001"
		const nullwi3YKuH = await contractukO9vLe.balanceOf.call(ownerpS9MYF9, {from: "0x0000000000000000000000000000000000000001"});
		const nullUD5HqpZ = await contractukO9vLe.transfer.call(tovvqjKuv, valueh1MM3cO, {from: accounts[2]});
		const nullE8BFbJW = await contractukO9vLe.approve.call(spenderrVnvDfV, valuewGAwgIK, {from: accounts[0]});
		const nullfLPcA3z = await contractukO9vLe.decreaseAllowance.call(spenderf5RSH0P, subtractedValuedUspAtt, {from: accounts[2]});
		const nullyIN8TR9 = await contractukO9vLe.transfer.call(tod8xn27W, valuedcFTZoF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullwi3YKuH, 0)
		await expect(contractukO9vLe.transfer.call(tovvqjKuv, valueh1MM3cO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractppmck2J = await ERC20.new({from: accounts[3]});
		const spenderZQq7eg = accounts[2]
		const ownerBRlFDRl = accounts[1]
		const ownerEbDHi13 = accounts[1]
		const addedValueInqOWJ1 = BigInt("1670")
		const spenderlnfBwI = accounts[2]
		const valueaiB5NZ5 = BigInt("1820")
		const toeK5tVnN = accounts[0]
		const valueiWgTWiJ = BigInt("470")
		const toFhCrVtF = "0x0000000000000000000000000000000000000001"
		const fromnI1b3Md = "0x0000000000000000000000000000000000000001"
		const nullokLNRFM = await contractppmck2J.totalSupply.call({from: accounts[5]});
		const nullJaX9YGq = await contractppmck2J.allowance.call(ownerBRlFDRl, spenderZQq7eg, {from: accounts[0]});
		const nullXG3oAWn = await contractppmck2J.balanceOf.call(ownerEbDHi13, {from: accounts[0]});
		const nulluper90X = await contractppmck2J.increaseAllowance.call(spenderlnfBwI, addedValueInqOWJ1, {from: accounts[0]});
		const nulltN2sJBJ = await contractppmck2J.transfer.call(toeK5tVnN, valueaiB5NZ5, {from: accounts[3]});
		const nullmDDbf5e = await contractppmck2J.transferFrom.call(fromnI1b3Md, toFhCrVtF, valueiWgTWiJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullJaX9YGq, 0)
		assert.equal(nullXG3oAWn, 0)
		assert.equal(nullokLNRFM, 0)
		assert.equal(nulluper90X, true)
		await expect(contractppmck2J.transfer.call(toeK5tVnN, valueaiB5NZ5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractUVmj5A3 = await ERC20.new({from: accounts[0]});
		const valueNsk4fVJ = BigInt("1171")
		const spenderFTTA2V = accounts[3]
		const addedValueB9x3nY0 = BigInt("259")
		const spenderwdXbf27 = accounts[0]
		const spenderFiEC4f6 = accounts[2]
		const ownerdHuq2Ul = accounts[4]
		const subtractedValueQMhVTx7 = BigInt("1203")
		const spenderKN3Fz8w = accounts[5]
		const ownerYNiS5yq = accounts[2]
		const valuegqk34uO = BigInt("1386")
		const spenderw8S5EuG = accounts[3]
		const nullJQ89yfq = await contractUVmj5A3.approve.call(spenderFTTA2V, valueNsk4fVJ, {from: "0x0000000000000000000000000000000000000001"});
		const nullewJX8GO = await contractUVmj5A3.increaseAllowance.call(spenderwdXbf27, addedValueB9x3nY0, {from: accounts[3]});
		const nulliUUhJMX = await contractUVmj5A3.allowance.call(ownerdHuq2Ul, spenderFiEC4f6, {from: accounts[5]});
		const nullfXOR8PI = await contractUVmj5A3.decreaseAllowance.call(spenderKN3Fz8w, subtractedValueQMhVTx7, {from: accounts[2]});
		const nullEfIjaez = await contractUVmj5A3.balanceOf.call(ownerYNiS5yq, {from: accounts[0]});
		const nullMkQJTJ8 = await contractUVmj5A3.approve.call(spenderw8S5EuG, valuegqk34uO, {from: accounts[1]});

		assert.equal(nullJQ89yfq, true)
		assert.equal(nullewJX8GO, true)
		assert.equal(nulliUUhJMX, 0)
		await expect(contractUVmj5A3.decreaseAllowance.call(spenderKN3Fz8w, subtractedValueQMhVTx7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})