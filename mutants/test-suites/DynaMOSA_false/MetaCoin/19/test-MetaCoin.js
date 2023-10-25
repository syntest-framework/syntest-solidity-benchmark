const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinSPCOt9U = await MetaCoin.new({from: accounts[3]});
		const uintpaBEJ71 = BigInt("1577")
		const addressos9V8RD = accounts[2]
		const uintHYkPjhC = BigInt("1870")
		const addressqSHaX33 = accounts[4]
		const uintj5rBvyH = BigInt("1512")
		const addressNRKFLL = accounts[5]
		const uintFNqbzgi = BigInt("1331")
		const addressaXBsIFt = "0x0000000000000000000000000000000000000001"
		const uintUsYiSV6 = BigInt("556")
		const addresssKcJ2tG = accounts[4]
		const boolaoAeJ4H = await MetaCoinSPCOt9U.sendCoin.call(addressos9V8RD, uintpaBEJ71, {from: accounts[0]});
		const boolWxQyoJc = await MetaCoinSPCOt9U.sendCoin.call(addressqSHaX33, uintHYkPjhC, {from: accounts[1]});
		const boolt346cji = await MetaCoinSPCOt9U.sendCoin.call(addressNRKFLL, uintj5rBvyH, {from: "0x0000000000000000000000000000000000000001"});
		const boolpXJhg0w = await MetaCoinSPCOt9U.sendCoin.call(addressaXBsIFt, uintFNqbzgi, {from: accounts[4]});
		const boolU1XXIKx = await MetaCoinSPCOt9U.sendCoin.call(addresssKcJ2tG, uintUsYiSV6, {from: accounts[3]});

		assert.equal(boolU1XXIKx, true)
		assert.equal(boolWxQyoJc, false)
		assert.equal(boolaoAeJ4H, false)
		assert.equal(boolpXJhg0w, false)
		assert.equal(boolt346cji, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinMTnWynL = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyXT9jSm = BigInt("1168")
		const addressuWU6Zuk = accounts[0]
		const uintEluuOYz = BigInt("292")
		const addressMZvZUIj = accounts[3]
		const uintMRu75VT = BigInt("583")
		const addressDeDqWmx = accounts[0]
		const uintAux5CoD = BigInt("1795")
		const addressn84ycri = accounts[2]
		const uintUj5aqT = BigInt("406")
		const addressiMlM2Bq = accounts[1]
		const boolk8dbbyg = await MetaCoinMTnWynL.sendCoin.call(addressuWU6Zuk, uintyXT9jSm, {from: accounts[2]});
		const boolTwrraNq = await MetaCoinMTnWynL.sendCoin.call(addressMZvZUIj, uintEluuOYz, {from: accounts[2]});
		const boolYCpuXUX = await MetaCoinMTnWynL.sendCoin.call(addressDeDqWmx, uintMRu75VT, {from: accounts[1]});
		const boolYFXkVzf = await MetaCoinMTnWynL.sendCoin.call(addressn84ycri, uintAux5CoD, {from: accounts[0]});
		const boolhN9kYzG = await MetaCoinMTnWynL.sendCoin.call(addressiMlM2Bq, uintUj5aqT, {from: accounts[2]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoin9a1l59 = await MetaCoin.new({from: accounts[3]});
		const uintyPCTO10 = BigInt("0")
		const addressMH9lHgz = accounts[2]
		const boolFyrxqw = await MetaCoin9a1l59.sendCoin.call(addressMH9lHgz, uintyPCTO10, {from: accounts[3]});

		assert.equal(boolFyrxqw, true)
	});
})