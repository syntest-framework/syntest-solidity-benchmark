const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressMjoN8eu = accounts[4]
		const uintBMRz0VJ = BigInt("1062")
		const DatrixoEquityTokenvdkH0ti = await DatrixoEquityToken.new(addressMjoN8eu, uintBMRz0VJ, {from: accounts[1]});
		const uintbtFtDG = BigInt("859")
		const addresspL0J4U9 = accounts[2]
		const addressarrayW6GbvhF = await DatrixoEquityTokenvdkH0ti.getShareholdersArray.call({from: accounts[4]});
		const addressarrayuvzcCt = await DatrixoEquityTokenvdkH0ti.getShareholdersArray.call({from: accounts[0]});
		await DatrixoEquityTokenvdkH0ti.afterStartTime.call({from: accounts[2]});
		const boolwmLgg3k = await DatrixoEquityTokenvdkH0ti.transfer.call(addresspL0J4U9, uintbtFtDG, {from: accounts[4]});

		assert.equal(addressarrayW6GbvhF, )
		assert.equal(addressarrayuvzcCt, )
		await expect(DatrixoEquityTokenvdkH0ti.afterStartTime.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressb4VUm6v = accounts[4]
		const uintjIYdTg = BigInt("938")
		const DatrixoEquityTokeniOFXeWX = await DatrixoEquityToken.new(addressb4VUm6v, uintjIYdTg, {from: accounts[5]});
		const addressPV6igOL = accounts[1]
		const addressarrayZKCSvNB = await DatrixoEquityTokeniOFXeWX.getShareholdersArray.call({from: accounts[4]});
		const boolS4f2ilj = await DatrixoEquityTokeniOFXeWX.removeShareholder.call(addressPV6igOL, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokeniOFXeWX.afterStartTime.call({from: accounts[0]});

		assert.equal(addressarrayZKCSvNB, )
		await expect(DatrixoEquityTokeniOFXeWX.removeShareholder.call(addressPV6igOL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresswakvJeq = accounts[1]
		const uintcP2azOZ = BigInt("1660")
		const DatrixoEquityTokennyg9I3s = await DatrixoEquityToken.new(addresswakvJeq, uintcP2azOZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintzCZY8Ch = BigInt("1592")
		const addressZvyGXMb = accounts[0]
		await DatrixoEquityTokennyg9I3s.onlyOwner.call({from: accounts[0]});
		const boolY4FhHij = await DatrixoEquityTokennyg9I3s.transfer.call(addressZvyGXMb, uintzCZY8Ch, {from: accounts[2]});
		await DatrixoEquityTokennyg9I3s.afterStartTime.call({from: accounts[0]});
		const addressarrayVH4zMwX = await DatrixoEquityTokennyg9I3s.getShareholdersArray.call({from: accounts[1]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addresshZy2V8o = accounts[4]
		const uintiOu7sB = BigInt("1965")
		const DatrixoEquityTokenTgis20Z = await DatrixoEquityToken.new(addresshZy2V8o, uintiOu7sB, {from: accounts[4]});
		const addressQUuDSB6 = accounts[2]
		const addressXXVBkEl = accounts[1]
		const boolnsWEQb = await DatrixoEquityTokenTgis20Z.removeShareholder.call(addressQUuDSB6, {from: accounts[4]});
		const addressarrayAQohK8j = await DatrixoEquityTokenTgis20Z.getShareholdersArray.call({from: accounts[0]});
		const boolQAhTzeZ = await DatrixoEquityTokenTgis20Z.removeShareholder.call(addressXXVBkEl, {from: accounts[4]});

		await expect(DatrixoEquityTokenTgis20Z.removeShareholder.call(addressQUuDSB6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressaAEmucw = accounts[2]
		const uintWvX4DCO = BigInt("1674")
		const DatrixoEquityTokenoVVjKne = await DatrixoEquityToken.new(addressaAEmucw, uintWvX4DCO, {from: accounts[3]});
		const uintH6oGYG3 = BigInt("288")
		const addresscXaOrCy = accounts[0]
		const addressZNDGsnJ = accounts[4]
		const addresseLeKEcC = accounts[0]
		const addressp8klxUC = accounts[3]
		const boolQD13oX1 = await DatrixoEquityTokenoVVjKne.transfer.call(addresscXaOrCy, uintH6oGYG3, {from: accounts[2]});
		const boolwlVDkkc = await DatrixoEquityTokenoVVjKne.removeShareholder.call(addressZNDGsnJ, {from: accounts[4]});
		const boolvKAWn5T = await DatrixoEquityTokenoVVjKne.removeShareholder.call(addresseLeKEcC, {from: accounts[4]});
		await DatrixoEquityTokenoVVjKne.afterStartTime.call({from: accounts[4]});
		const boolVwDjDDk = await DatrixoEquityTokenoVVjKne.removeShareholder.call(addressp8klxUC, {from: accounts[3]});
		await DatrixoEquityTokenoVVjKne.onlyOwner.call({from: accounts[4]});

		assert.equal(boolQD13oX1, true)
		await expect(DatrixoEquityTokenoVVjKne.removeShareholder.call(addressZNDGsnJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressA6F1Eds = "0x0000000000000000000000000000000000000001"
		const uintbR8F8ks = BigInt("1528")
		const DatrixoEquityTokenhP30kjx = await DatrixoEquityToken.new(addressA6F1Eds, uintbR8F8ks, {from: accounts[4]});
		const uint4bkx5Q = BigInt("606")
		const addressXql4PID = accounts[2]
		const addressIjAOtgM = accounts[4]
		const uintDmDhmMJ = BigInt("407")
		const addresswbPvWUh = accounts[3]
		const addressarraym3e6Cx8 = await DatrixoEquityTokenhP30kjx.getShareholdersArray.call({from: accounts[1]});
		const boolyVo2yyP = await DatrixoEquityTokenhP30kjx.transferFrom.call(addressIjAOtgM, addressXql4PID, uint4bkx5Q, {from: "0x0000000000000000000000000000000000000001"});
		const boolXCbPuF = await DatrixoEquityTokenhP30kjx.transfer.call(addresswbPvWUh, uintDmDhmMJ, {from: accounts[4]});

		assert.equal(addressarraym3e6Cx8, )
		await expect(DatrixoEquityTokenhP30kjx.transferFrom.call(addressIjAOtgM, addressXql4PID, uint4bkx5Q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressTtRjyj = "0x0000000000000000000000000000000000000001"
		const uintjIbYRSb = BigInt("1528")
		const DatrixoEquityTokenhP30kjx = await DatrixoEquityToken.new(addressTtRjyj, uintjIbYRSb, {from: accounts[4]});
		const uintrfoitrz = BigInt("606")
		const addressXx1M82K = accounts[3]
		const addresswPYjtnz = "0x0000000000000000000000000000000000000001"
		const uintvQ1gfkh = BigInt("407")
		const address8Swqv5 = accounts[3]
		const uintUICoY7u = BigInt("463")
		const addressG5ukH1K = accounts[5]
		const addressT8Ya2sm = accounts[0]
		const addressarraym3e6Cx8 = await DatrixoEquityTokenhP30kjx.getShareholdersArray.call({from: accounts[1]});
		const boolyVo2yyP = await DatrixoEquityTokenhP30kjx.transferFrom.call(addresswPYjtnz, addressXx1M82K, uintrfoitrz, {from: "0x0000000000000000000000000000000000000001"});
		const boolXCbPuF = await DatrixoEquityTokenhP30kjx.transfer.call(address8Swqv5, uintvQ1gfkh, {from: accounts[4]});
		const boolU1qZhOY = await DatrixoEquityTokenhP30kjx.transferFrom.call(addressT8Ya2sm, addressG5ukH1K, uintUICoY7u, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarraym3e6Cx8, )
		assert.equal(boolyVo2yyP, true)
		await expect(DatrixoEquityTokenhP30kjx.transfer.call(address8Swqv5, uintvQ1gfkh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressuIj0fCi = accounts[4]
		const uintMmQZHzc = BigInt("1965")
		const DatrixoEquityTokenTgis20Z = await DatrixoEquityToken.new(addressuIj0fCi, uintMmQZHzc, {from: accounts[4]});
		const addressl6Z7Fve = "0x0000000000000000000000000000000000000000"
		const boolnsWEQb = await DatrixoEquityTokenTgis20Z.removeShareholder.call(addressl6Z7Fve, {from: accounts[4]});

		await expect(DatrixoEquityTokenTgis20Z.removeShareholder.call(addressl6Z7Fve, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressZUNwZRK = accounts[4]
		const uintlcoz6k = BigInt("1965")
		const DatrixoEquityTokenTgis20Z = await DatrixoEquityToken.new(addressZUNwZRK, uintlcoz6k, {from: accounts[4]});
		const uintAiWr7QQ = BigInt("897")
		const addressolulmFT = "0x0000000000000000000000000000000000000001"
		const addressarray7IFpaF = await DatrixoEquityTokenTgis20Z.getShareholdersArray.call({from: accounts[5]});
		const uinteweLhQO = await DatrixoEquityTokenTgis20Z.setStart.call(uintAiWr7QQ, {from: accounts[4]});
		await DatrixoEquityTokenTgis20Z.afterStartTime.call({from: accounts[4]});
		const boolnsWEQb = await DatrixoEquityTokenTgis20Z.removeShareholder.call(addressolulmFT, {from: accounts[4]});

		assert.equal(addressarray7IFpaF, )
		await expect(DatrixoEquityTokenTgis20Z.afterStartTime.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresspGrwrbf = accounts[2]
		const uintfhCoexw = BigInt("80")
		const DatrixoEquityTokenHxF0D72 = await DatrixoEquityToken.new(addresspGrwrbf, uintfhCoexw, {from: accounts[4]});
		const uintiiMO53E = BigInt("311")
		const addressXlfbWhI = accounts[3]
		const uint920m23 = await DatrixoEquityTokenHxF0D72.setStart.call(uintiiMO53E, {from: accounts[2]});
		await DatrixoEquityTokenHxF0D72.onlyOwner.call({from: accounts[1]});
		const boolI5Rap7 = await DatrixoEquityTokenHxF0D72.removeShareholder.call(addressXlfbWhI, {from: accounts[3]});
		await DatrixoEquityTokenHxF0D72.afterStartTime.call({from: accounts[4]});

		await expect(DatrixoEquityTokenHxF0D72.setStart.call(uintiiMO53E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressiRYAcGT = accounts[3]
		const uintkXKTbZX = BigInt("790")
		const DatrixoEquityTokenxrXfobz = await DatrixoEquityToken.new(addressiRYAcGT, uintkXKTbZX, {from: accounts[1]});
		const uintDUDzWj9 = BigInt("993")
		const addresseMaH58 = accounts[3]
		const uintW20uudH = BigInt("1188")
		const addressnc9pysE = accounts[0]
		const uintbrMqvWS = BigInt("1224")
		const addressqrdOQck = accounts[0]
		const addressGU5ZKjJ = accounts[0]
		const uintE9kHM80 = BigInt("807")
		const addressN6HeIO = "0x0000000000000000000000000000000000000001"
		const boolKV56rZK = await DatrixoEquityTokenxrXfobz.transfer.call(addresseMaH58, uintDUDzWj9, {from: accounts[3]});
		const addressarrayvy45Psx = await DatrixoEquityTokenxrXfobz.getShareholdersArray.call({from: accounts[4]});
		const booloNX0eUN = await DatrixoEquityTokenxrXfobz.transfer.call(addressnc9pysE, uintW20uudH, {from: accounts[5]});
		const boolq7g1d85 = await DatrixoEquityTokenxrXfobz.transferFrom.call(addressGU5ZKjJ, addressqrdOQck, uintbrMqvWS, {from: accounts[4]});
		const boolTRMaaJ = await DatrixoEquityTokenxrXfobz.transfer.call(addressN6HeIO, uintE9kHM80, {from: accounts[4]});

		await expect(DatrixoEquityTokenxrXfobz.transfer.call(addresseMaH58, uintDUDzWj9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})