const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringOQwuBbT = "tMhW8MtH"
		const stringhW1Yhx = "wIb52VvLCiIHhE4uHwTyu1nuDxW459AkJ7Xc9Uk9Huh5jZAgIzFgYMOmM"
		const uintIGwAt8o = BigInt("246")
		const WheatFarmTaUy2pU = await WheatFarm.new(stringOQwuBbT, stringhW1Yhx, uintIGwAt8o, {from: "0x0000000000000000000000000000000000000001"});
		const uintfSbiAP = BigInt("1342")
		const addressNjnldXN = accounts[0]
		const uintb8WDL8m = BigInt("640")
		const addressFthkNSa = accounts[4]
		const addressb0si5Rl = accounts[2]
		const uintB72XU06 = BigInt("40")
		const addressy5HRVUb = accounts[1]
		const addressNhXwlj1 = accounts[1]
		const uintcU2KeSD = BigInt("1452")
		const addresslcmRSHm = accounts[5]
		const boolXAj4Umx = await WheatFarmTaUy2pU.increaseAllowance.call(addressNjnldXN, uintfSbiAP, {from: accounts[0]});
		const boolrxcFIlx = await WheatFarmTaUy2pU.transferFrom.call(addressb0si5Rl, addressFthkNSa, uintb8WDL8m, {from: accounts[3]});
		const boolraR8Qly = await WheatFarmTaUy2pU.transferFrom.call(addressNhXwlj1, addressy5HRVUb, uintB72XU06, {from: accounts[0]});
		const boolOaOcwFE = await WheatFarmTaUy2pU.increaseAllowance.call(addresslcmRSHm, uintcU2KeSD, {from: accounts[3]});
	});

	it('test for WheatFarm', async () => {
		const stringDQk1GHP = "Rm3js5vXtO2JdtNa4cMqpkn3DvpLJgU3zpGBoqAo9hJLn4DIH5Nm46tWGk"
		const stringxmedErI = "qnjDhbeNsJ7gv6eqUBXSfKgLclxpwopzH0IrUrGnOwUm3DPgnfKxI1iHdzm7T9k7E90gLSF6QvxT8qgXsR"
		const uintzO6aEt = BigInt("1499")
		const WheatFarmVrXC4F = await WheatFarm.new(stringDQk1GHP, stringxmedErI, uintzO6aEt, {from: accounts[1]});
		const uintvAL1LWH = BigInt("2045")
		const addressL3N1LgN = accounts[0]
		const uintImlt0EO = BigInt("1134")
		const addressYNNdhIj = accounts[4]
		const addressZUwQ0C = accounts[1]
		const addressbW8t2sn = accounts[3]
		const addressq6R2vRV = accounts[1]
		const boolpml7G70 = await WheatFarmVrXC4F.transfer.call(addressL3N1LgN, uintvAL1LWH, {from: accounts[4]});
		const uint8BVTJ97W = await WheatFarmVrXC4F.decimals.call({from: accounts[4]});
		const boolOTD5JRO = await WheatFarmVrXC4F.approve.call(addressYNNdhIj, uintImlt0EO, {from: accounts[0]});
		const boolr1HW5Q5 = await WheatFarmVrXC4F.transferownership.call(addressZUwQ0C, {from: accounts[3]});
		const uintlSi8tsT = await WheatFarmVrXC4F.allowance.call(addressq6R2vRV, addressbW8t2sn, {from: accounts[2]});
		const uintR5vzgPz = await WheatFarmVrXC4F.totalSupply.call({from: accounts[2]});

		await expect(WheatFarmVrXC4F.transfer.call(addressL3N1LgN, uintvAL1LWH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringwzF6fPY = "t7NAM2VEzE3P2wAiigkYmXigyOaoUVp21W445pW7BD3QBcBz"
		const stringhOmfZg = "hleXx2cpRirn10jxOjjepHB2JgRPiMJu6CzispMwsqkWHQp2cFIohdeVWAd6Y5fYFlLpufxKHRB5nJOMz43KdoCN9whuqC"
		const uintMa9aseu = BigInt("483")
		const WheatFarmSfpPwL = await WheatFarm.new(stringwzF6fPY, stringhOmfZg, uintMa9aseu, {from: accounts[3]});
		const uintPK4xn4v = BigInt("1518")
		const addressh5xHo9c = accounts[3]
		const addressiT1ySIX = accounts[3]
		const uintmUSvJLH = BigInt("972")
		const address1fkNas = accounts[2]
		const addressigB81lZ = accounts[1]
		const uintvtpvAHJ = BigInt("1608")
		const addressVtEyBl7 = "0x0000000000000000000000000000000000000001"
		const uints0cp7VM = BigInt("1480")
		const addressMxoKCf = accounts[3]
		const uintZAc0CSG = BigInt("1847")
		const addresszALDsIN = accounts[2]
		const boolKvi54dh = await WheatFarmSfpPwL.transferFrom.call(addressiT1ySIX, addressh5xHo9c, uintPK4xn4v, {from: accounts[3]});
		const boolUM1vZqF = await WheatFarmSfpPwL.transferFrom.call(addressigB81lZ, address1fkNas, uintmUSvJLH, {from: accounts[3]});
		const boolbktTNKV = await WheatFarmSfpPwL.transfer.call(addressVtEyBl7, uintvtpvAHJ, {from: accounts[2]});
		const boolQ3Kx5Ju = await WheatFarmSfpPwL.transfer.call(addressMxoKCf, uints0cp7VM, {from: "0x0000000000000000000000000000000000000001"});
		const boolswN1jKx = await WheatFarmSfpPwL.transfer.call(addresszALDsIN, uintZAc0CSG, {from: accounts[4]});

		assert.equal(boolKvi54dh, true)
		await expect(WheatFarmSfpPwL.transferFrom.call(addressigB81lZ, address1fkNas, uintmUSvJLH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringX3WSUyo = "7ds7jbHIaMs5Yvm0Y9nu6Pg"
		const stringxQHBQ15 = "rsF7cJdthWBcCWEYZdkntcD8OtmqPXeX7Np95"
		const uintINs2dnE = BigInt("1135")
		const WheatFarmODkZ6XI = await WheatFarm.new(stringX3WSUyo, stringxQHBQ15, uintINs2dnE, {from: accounts[1]});
		const addressilKeBY4 = accounts[0]
		const addressBrAh3dv = accounts[3]
		const uinteba6oqW = BigInt("142")
		const addressvIH0S2p = accounts[4]
		const uintwg6XHgl = BigInt("608")
		const addressuD57nPy = "0x0000000000000000000000000000000000000001"
		const uintm6t6eUH = BigInt("459")
		const addressHfKFC89 = accounts[0]
		const uintMHH3wr = await WheatFarmODkZ6XI.allowance.call(addressBrAh3dv, addressilKeBY4, {from: "0x0000000000000000000000000000000000000001"});
		const boolZDG3r2v = await WheatFarmODkZ6XI.approve.call(addressvIH0S2p, uinteba6oqW, {from: accounts[1]});
		const boolIHYQWc0 = await WheatFarmODkZ6XI.approveAndCall.call(addressuD57nPy, uintwg6XHgl, {from: accounts[3]});
		const stringydKVWF = await WheatFarmODkZ6XI.symbol.call({from: accounts[4]});
		const boolvBvM62 = await WheatFarmODkZ6XI.approve.call(addressHfKFC89, uintm6t6eUH, {from: accounts[3]});

		assert.equal(boolZDG3r2v, true)
		assert.equal(uintMHH3wr, BigInt("0"))
		await expect(WheatFarmODkZ6XI.approveAndCall.call(addressuD57nPy, uintwg6XHgl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringUTK7EAv = "7QdESovUN8xJfnI"
		const stringTJ1Ipnd = "BWo1YXhMrOEvnhRscIdnf3gen6IlkpnQbuZlvvXguv3ro4EzPMMxu33VVYr8s8d4OohbHSSIRvE"
		const uintETaFKTk = BigInt("1186")
		const WheatFarmetX5hSL = await WheatFarm.new(stringUTK7EAv, stringTJ1Ipnd, uintETaFKTk, {from: accounts[0]});
		const uintG16wK61 = BigInt("484")
		const addressMZcCXsr = accounts[3]
		const uintninDi80 = BigInt("479")
		const addressi3cQufM = accounts[3]
		const uintc4MGPig = BigInt("1152")
		const addresswzZ15A = accounts[3]
		const uintUV90Pm6 = BigInt("386")
		const addressMx2WgwM = accounts[0]
		const addressAsbwUDR = accounts[2]
		const boolKqebbxD = await WheatFarmetX5hSL.decreaseAllowance.call(addressMZcCXsr, uintG16wK61, {from: accounts[1]});
		const boolk8GQp2t = await WheatFarmetX5hSL.decreaseAllowance.call(addressi3cQufM, uintninDi80, {from: accounts[1]});
		const boolxuDUEgv = await WheatFarmetX5hSL.transfer.call(addresswzZ15A, uintc4MGPig, {from: accounts[2]});
		const boolaWad8Lb = await WheatFarmetX5hSL.transferFrom.call(addressAsbwUDR, addressMx2WgwM, uintUV90Pm6, {from: accounts[4]});

		await expect(WheatFarmetX5hSL.decreaseAllowance.call(addressMZcCXsr, uintG16wK61, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringJU4pHao = "qruirzmqrlkqicSEPvWXqk3pgYKxMEpg6juE5eT1IUn7UMdc"
		const stringHGQLHOG = "Tq"
		const uintyDQ2nNY = BigInt("1330")
		const WheatFarmT1AK8U0 = await WheatFarm.new(stringJU4pHao, stringHGQLHOG, uintyDQ2nNY, {from: accounts[3]});
		const addressANNKtqQ = accounts[0]
		const uintV8UpWQm = BigInt("1787")
		const addressbyBh3oV = accounts[3]
		const uintOYxgNPp = BigInt("1274")
		const addressFdvShhF = accounts[3]
		const uintIvVHe4J = BigInt("1153")
		const addressu0PWZMh = accounts[4]
		const uintCmRDSVk = BigInt("357")
		const addressanFHArF = accounts[4]
		const addressNn0bUPf = accounts[1]
		const boolKmZEoSC = await WheatFarmT1AK8U0.transferownership.call(addressANNKtqQ, {from: accounts[4]});
		const boolLZotL2Y = await WheatFarmT1AK8U0.approveAndCall.call(addressbyBh3oV, uintV8UpWQm, {from: accounts[1]});
		const boolMdkMiEF = await WheatFarmT1AK8U0.decreaseAllowance.call(addressFdvShhF, uintOYxgNPp, {from: accounts[5]});
		const stringfFSzvt0 = await WheatFarmT1AK8U0.name.call({from: accounts[4]});
		const boolDI07IpH = await WheatFarmT1AK8U0.transfer.call(addressu0PWZMh, uintIvVHe4J, {from: accounts[1]});
		const boolu9iASNR = await WheatFarmT1AK8U0.transferFrom.call(addressNn0bUPf, addressanFHArF, uintCmRDSVk, {from: accounts[1]});

		await expect(WheatFarmT1AK8U0.transferownership.call(addressANNKtqQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringck7kOxM = "Iz2rHlOTBA2rXUjS9A0BP"
		const stringPedTNa8 = "X4g4Wq2Yp0emrnmggAX7KexUdaKGUBp1IBfeghP9r2bTqaq2MfvRzUZAtoFkJkoCWft9aG61wcH4crnuWhA3fxwlAI"
		const uintHh21e81 = BigInt("678")
		const WheatFarma2pJoc = await WheatFarm.new(stringck7kOxM, stringPedTNa8, uintHh21e81, {from: accounts[0]});
		const uintAaQ6zYm = BigInt("33")
		const addressMrkipNb = "0x0000000000000000000000000000000000000000"
		const uintlc15aNq = BigInt("1827")
		const addressUj9FEnc = accounts[3]
		const uintxZJf940 = BigInt("1753")
		const addressMlxwOi = accounts[0]
		const boolm5lIXkO = await WheatFarma2pJoc.transfer.call(addressMrkipNb, uintAaQ6zYm, {from: accounts[0]});
		const uintGXIQKRr = await WheatFarma2pJoc.totalSupply.call({from: accounts[3]});
		const boolMQAs7z = await WheatFarma2pJoc.approve.call(addressUj9FEnc, uintlc15aNq, {from: accounts[0]});
		const boolSPSnv1J = await WheatFarma2pJoc.approveAndCall.call(addressMlxwOi, uintxZJf940, {from: accounts[0]});

		assert.equal(boolMQAs7z, true)
		assert.equal(boolSPSnv1J, true)
		assert.equal(boolm5lIXkO, true)
		assert.equal(uintGXIQKRr, BigInt("678000000000000000000"))
	});

	it('test for WheatFarm', async () => {
		const stringck7kOxM = "Iz2rHlOTBA2rXUjS9A0BP"
		const stringPedTNa8 = "X4g4Wq2Yp0emrnmggAX7KexUdaKGUBp1IBfeghP9r2bTqaq2MfvRzUZAtoFkJkoCWft9aG61wcH4crnuWhA3fxwlAI"
		const uintvMwcrK3 = BigInt("678")
		const WheatFarma2pJoc = await WheatFarm.new(stringck7kOxM, stringPedTNa8, uintvMwcrK3, {from: accounts[0]});
		const addressemuJeno = accounts[4]
		const uintSq0dhNH = BigInt("1763")
		const addresss23P1L9 = accounts[4]
		const addressEUBoa3 = accounts[5]
		const addresseesCH8N = accounts[0]
		const uintNKGNF4Q = BigInt("684")
		const addressfHCHQlc = accounts[3]
		const address8Wx01r = accounts[5]
		const boolUF6PPF5 = await WheatFarma2pJoc.transferownership.call(addressemuJeno, {from: accounts[0]});
		const boolNnwV7Zu = await WheatFarma2pJoc.decreaseAllowance.call(addresss23P1L9, uintSq0dhNH, {from: accounts[1]});
		const boolJZHNWBs = await WheatFarma2pJoc.transferownership.call(addressEUBoa3, {from: accounts[2]});
		const stringGcHhIjU = await WheatFarma2pJoc.symbol.call({from: accounts[1]});
		const uinteV546WB = await WheatFarma2pJoc.balanceOf.call(addresseesCH8N, {from: accounts[0]});
		const boolnSZFM18 = await WheatFarma2pJoc.transferFrom.call(address8Wx01r, addressfHCHQlc, uintNKGNF4Q, {from: accounts[2]});

		assert.equal(boolUF6PPF5, true)
		await expect(WheatFarma2pJoc.decreaseAllowance.call(addresss23P1L9, uintSq0dhNH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringck7kOxM = "Iz2rHlOTBA2rXUjS9A0BP"
		const stringPedTNa8 = "X4g4Wq2Yp0emrnmggAX7KexUdaKGUBp1IBfeghP9r2bTqaq2MfvRzUZAtoFkJkoCWft9aG61wcH4crnuWhA3fxwlAI"
		const uintyUhO0aL = BigInt("678")
		const WheatFarma2pJoc = await WheatFarm.new(stringck7kOxM, stringPedTNa8, uintyUhO0aL, {from: accounts[0]});
		const uintUIzfTDE = BigInt("0")
		const addressCQ9rJtU = "0x0000000000000000000000000000000000000000"
		const uintJ2Fu3Tr = BigInt("1638")
		const addresssHl8MSW = accounts[4]
		const boolm5lIXkO = await WheatFarma2pJoc.transfer.call(addressCQ9rJtU, uintUIzfTDE, {from: accounts[0]});
		const boolrt3stK = await WheatFarma2pJoc.approveAndCall.call(addresssHl8MSW, uintJ2Fu3Tr, {from: accounts[0]});

		assert.equal(boolm5lIXkO, true)
		assert.equal(boolrt3stK, true)
	});
})