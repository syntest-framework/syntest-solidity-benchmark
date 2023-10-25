const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintzr5O1hj = BigInt("189")
		const stringCYuXxa = "5WuThy0dJ6v418Ch5EnuHVJS3qm15Bp"
		const stringXSSWsgx = "aYIs9bislEvyfnK3Zxpg9wEsFM"
		const uintMRT2gyh = BigInt("910")
		const TetherTokenPB14H3J = await TetherToken.new(uintzr5O1hj, stringCYuXxa, stringXSSWsgx, uintMRT2gyh, {from: accounts[3]});
		const uintXxvgQEU = BigInt("950")
		const addressjImWSYv = "0x0000000000000000000000000000000000000001"
		const addresspxfjNa1 = accounts[1]
		const uintCJH1ac3 = BigInt("875")
		const addressq1mMXsc = accounts[4]
		const addressfgZhccN = accounts[4]
		const uintKH3SqOX = BigInt("1223")
		const uintQg5YWqz = BigInt("732")
		const addressX3Eex6x = await TetherTokenPB14H3J.transferFrom.call(addresspxfjNa1, addressjImWSYv, uintXxvgQEU, {from: accounts[2]});
		const uintqypQlsZ = await TetherTokenPB14H3J.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressWzokbPS = await TetherTokenPB14H3J.transferFrom.call(addressfgZhccN, addressq1mMXsc, uintCJH1ac3, {from: accounts[0]});
		const uintrosGzjg = await TetherTokenPB14H3J.redeem.call(uintKH3SqOX, {from: accounts[1]});
		const uintzDrb1R6 = await TetherTokenPB14H3J.redeem.call(uintQg5YWqz, {from: accounts[1]});

		await expect(TetherTokenPB14H3J.transferFrom.call(addresspxfjNa1, addressjImWSYv, uintXxvgQEU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintGffsAHp = BigInt("339")
		const stringiIVU2FN = "N2raGRQ7fiSMQm9W2OcPbWbj24ZZsxEnMLufdRd4bsxuqqG1SyJXxCxcnIbsA1yXiTJACp8IFMv8sder"
		const stringxuRAu04 = "51xd1lAiXFFTbz6qmpDIl7qlDsEdPaIQrNnx7xBnapw9mpPTsbap17o3e"
		const uintXsV7hxg = BigInt("1826")
		const TetherTokensbh7HBp = await TetherToken.new(uintGffsAHp, stringiIVU2FN, stringxuRAu04, uintXsV7hxg, {from: accounts[0]});
		const addressL5dZAXB = "0x0000000000000000000000000000000000000001"
		const uintTpWd9zp = BigInt("573")
		const uintb4zaJn0 = BigInt("535")
		const addresstK04wZ = accounts[1]
		const uintfNUijIc = BigInt("254")
		const addressaq9K8Jq = accounts[0]
		const uintdw5PF3Q = BigInt("547")
		const addressBYnxkJW = accounts[2]
		const address5TR2at = accounts[1]
		const addressBaMj7Z2 = await TetherTokensbh7HBp.deprecate.call(addressL5dZAXB, {from: accounts[5]});
		const uintDAj2LHC = await TetherTokensbh7HBp.redeem.call(uintTpWd9zp, {from: accounts[3]});
		const addressuSkhCCR = await TetherTokensbh7HBp.approve.call(addresstK04wZ, uintb4zaJn0, {from: accounts[4]});
		const addressJytC3bH = await TetherTokensbh7HBp.approve.call(addressaq9K8Jq, uintfNUijIc, {from: accounts[2]});
		const addressjyjTKLY = await TetherTokensbh7HBp.transferFrom.call(address5TR2at, addressBYnxkJW, uintdw5PF3Q, {from: accounts[0]});

		await expect(TetherTokensbh7HBp.deprecate.call(addressL5dZAXB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintpdDCfF = BigInt("128")
		const string8HjK7F = "rkCg6m5TDVZPfs0LT7C7jN"
		const stringM6LCsUU = "uP0"
		const uintyWBXVN = BigInt("922")
		const TetherTokenhTBWs9z = await TetherToken.new(uintpdDCfF, string8HjK7F, stringM6LCsUU, uintyWBXVN, {from: accounts[3]});
		const uintqvPHLmZ = BigInt("1540")
		const addressUhQcLVt = "0x0000000000000000000000000000000000000001"
		const uintU1D4vUS = BigInt("1935")
		const uintKjBSoUh = BigInt("243")
		const uintvUHvzDF = await TetherTokenhTBWs9z.redeem.call(uintqvPHLmZ, {from: accounts[5]});
		const uintdUOIVv7 = await TetherTokenhTBWs9z.balanceOf.call(addressUhQcLVt, {from: accounts[0]});
		const uintiuNfWAi = await TetherTokenhTBWs9z.redeem.call(uintU1D4vUS, {from: accounts[2]});
		const uintkYvyhz = await TetherTokenhTBWs9z.redeem.call(uintKjBSoUh, {from: accounts[1]});

		await expect(TetherTokenhTBWs9z.redeem.call(uintqvPHLmZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintBfVFgjY = BigInt("1334")
		const stringE83F91s = "JA2fAS22i6Q9pf4hdEvXLzrmpHerNnQtVAy8GOIHUmtTvtmSwBvKVCYjLvnxZaInFY98OpV1Wg6t7"
		const stringoFoH3VH = "lK1CSnwAKY7aDie59nFSWKpYRcRnWuNJE6iwnHyfpzd6T"
		const uintgpqQiST = BigInt("1721")
		const TetherTokenLYEzIM6 = await TetherToken.new(uintBfVFgjY, stringE83F91s, stringoFoH3VH, uintgpqQiST, {from: "0x0000000000000000000000000000000000000001"});
		const addressfrwDHk = accounts[1]
		const addresspDnWoC5 = accounts[0]
		const uintdsTSasz = BigInt("1115")
		const addresswKclgoK = "0x0000000000000000000000000000000000000001"
		const uintlNhncjp = BigInt("1816")
		const addresswbaGq3w = accounts[3]
		const addressFSugega = "0x0000000000000000000000000000000000000001"
		const uintuY46Y2 = await TetherTokenLYEzIM6.allowance.call(addresspDnWoC5, addressfrwDHk, {from: accounts[3]});
		const addressd5B9SRV = await TetherTokenLYEzIM6.approve.call(addresswKclgoK, uintdsTSasz, {from: accounts[0]});
		const addressLWe0u3q = await TetherTokenLYEzIM6.approve.call(addresswbaGq3w, uintlNhncjp, {from: accounts[0]});
		const uintvAqARKY = await TetherTokenLYEzIM6.balanceOf.call(addressFSugega, {from: accounts[4]});
	});

	it('test for TetherToken', async () => {
		const uintzW5L1OB = BigInt("1247")
		const stringpUNagW = "Tka2er313INYMMS5awLwYWAulSvd1j8aA74bxpyvRymTGPDNrgvfjrsKnGhaN3h"
		const stringsp5AUIH = "JUtNGL2RUKb122DNkpm854Pj21GzAoTE5X79Qy3YthHBaTNUD25G1WQcrDEtxqUUqMzCDGblAks6jo3bIKlMUupD3"
		const uintUqJoZdc = BigInt("185")
		const TetherTokenDrl2moH = await TetherToken.new(uintzW5L1OB, stringpUNagW, stringsp5AUIH, uintUqJoZdc, {from: accounts[3]});
		const uintGkInjuS = BigInt("1376")
		const uintJcRhBcc = BigInt("395")
		const addressVF5BRAt = accounts[2]
		const uintpHYvOO = BigInt("751")
		const uintNAWflZ = BigInt("1720")
		const addressrUBdZAY = accounts[3]
		const addressgcStTP = "0x0000000000000000000000000000000000000001"
		const addressclOPEZ0 = accounts[3]
		const uintzDH34uf = await TetherTokenDrl2moH.setParams.call(uintJcRhBcc, uintGkInjuS, {from: accounts[2]});
		const addresslro2k45 = await TetherTokenDrl2moH.deprecate.call(addressVF5BRAt, {from: accounts[3]});
		const uintZVNo3Sk = await TetherTokenDrl2moH.setParams.call(uintNAWflZ, uintpHYvOO, {from: accounts[5]});
		const addressNKj9w8I = await TetherTokenDrl2moH.deprecate.call(addressrUBdZAY, {from: accounts[3]});
		const uintionOJQt = await TetherTokenDrl2moH.allowance.call(addressclOPEZ0, addressgcStTP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokenDrl2moH.setParams.call(uintJcRhBcc, uintGkInjuS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintE6t9LV = BigInt("1759")
		const stringXUiDKLr = "W8ro44Ns0UI"
		const stringUvjb0Ph = "ycfPEhvM1NyiPZlAPXdZp2bUdLgMfLNJmPsEv4F75lPgIVRmU8iVcUpF17QQbLNKDaj8EyM1M1AwylvJ22egZeM1"
		const uints5DJD3W = BigInt("1431")
		const TetherTokenyLtuMHO = await TetherToken.new(uintE6t9LV, stringXUiDKLr, stringUvjb0Ph, uints5DJD3W, {from: accounts[1]});
		const uintRjRo9vU = BigInt("1657")
		const addressSpJuNMu = "0x0000000000000000000000000000000000000001"
		const addressnQG4dAR = accounts[5]
		const uintKSFBUaD = BigInt("389")
		const uintudMNeLs = BigInt("982")
		const uintGFKamQM = await TetherTokenyLtuMHO.redeem.call(uintRjRo9vU, {from: accounts[1]});
		const uintj8Ukh3u = await TetherTokenyLtuMHO.allowance.call(addressnQG4dAR, addressSpJuNMu, {from: accounts[5]});
		const uintX28kPuD = await TetherTokenyLtuMHO.issue.call(uintKSFBUaD, {from: accounts[0]});
		const uintV2GiHET = await TetherTokenyLtuMHO.redeem.call(uintudMNeLs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintj8Ukh3u, BigInt("0"))
		await expect(TetherTokenyLtuMHO.issue.call(uintKSFBUaD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintKKWjDW = BigInt("1488")
		const stringHSEWXDL = "817HJmSE1n3fP8odiN2eeJwqrXfydAMwAXlssiWCNL2fHRJW6OpdjaKRC65xJpyvO4Bw2IyDObaKfi1gpNdI89jAVi"
		const stringInocusx = "11C4NvNUmRO6ayWKNXCGg4TYfyKw9FhDzCLKcDo7k8b7RWFzBpWLPeoi7sHpahKjbsCz31tfaDHzNtbsHOWUObxLvwaIFrONzy"
		const uintl8Kjmmy = BigInt("1497")
		const TetherTokenveiA8e = await TetherToken.new(uintKKWjDW, stringHSEWXDL, stringInocusx, uintl8Kjmmy, {from: accounts[3]});
		const uintPBWAllS = BigInt("198")
		const addressQvIEAYY = accounts[4]
		const addressE9wh4f8 = accounts[2]
		const addresszStHbn = accounts[0]
		const addressDWqoiE = accounts[4]
		const addressXp9KElK = accounts[1]
		const uintA0pngcR = BigInt("59")
		const addressovtTBXB = accounts[4]
		const uintRIBmxMq = BigInt("452")
		const addressSHMyOs1 = accounts[3]
		const addressciNr0xk = accounts[0]
		const addressUCnstij = await TetherTokenveiA8e.transfer.call(addressQvIEAYY, uintPBWAllS, {from: accounts[1]});
		const uintTpSSwDW = await TetherTokenveiA8e.allowance.call(addresszStHbn, addressE9wh4f8, {from: accounts[0]});
		const uintMbjNJqO = await TetherTokenveiA8e.allowance.call(addressXp9KElK, addressDWqoiE, {from: accounts[2]});
		const addressz9H6Su = await TetherTokenveiA8e.approve.call(addressovtTBXB, uintA0pngcR, {from: accounts[0]});
		const uintNLWfIm9 = await TetherTokenveiA8e.totalSupply.call({from: accounts[0]});
		const addresswK25AG = await TetherTokenveiA8e.transferFrom.call(addressciNr0xk, addressSHMyOs1, uintRIBmxMq, {from: accounts[0]});

		await expect(TetherTokenveiA8e.transfer.call(addressQvIEAYY, uintPBWAllS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintXm7Gomf = BigInt("1099")
		const string4PQcr5 = "XKzoQMjBnlrusRbuhoNQKvurIsuIqBYNv7unmVxYQq"
		const stringogAlD8e = "7uq1jxgrIJ6WV3IsIWJ42OeWdbJuCqPRVoQwg0ekowpDG1y3m1QCWUD19dKxG4malrR5fJf4P"
		const uintS73uNVF = BigInt("2045")
		const TetherTokenHfETHs = await TetherToken.new(uintXm7Gomf, string4PQcr5, stringogAlD8e, uintS73uNVF, {from: accounts[2]});
		const uintTRHAE6D = BigInt("885")
		const addressP2sERJh = accounts[1]
		const uintIQYKJq = BigInt("1872")
		const addressbSYCcS = accounts[5]
		const addressWGvCZp4 = accounts[4]
		const addressT479toQ = accounts[4]
		const uintrw7QR6r = BigInt("1909")
		const uintguYbPxH = BigInt("1733")
		const addressglrVghR = accounts[1]
		const addressuzwLNu = accounts[4]
		const addressceGJvOe = accounts[5]
		const uintaHOULyr = BigInt("1194")
		const addresspQJol8p = accounts[1]
		const addressJTygHiw = await TetherTokenHfETHs.approve.call(addressP2sERJh, uintTRHAE6D, {from: accounts[5]});
		const addressdC2dc0Q = await TetherTokenHfETHs.transferFrom.call(addressWGvCZp4, addressbSYCcS, uintIQYKJq, {from: accounts[1]});
		const uintkmUBErT = await TetherTokenHfETHs.balanceOf.call(addressT479toQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintNhjW5pj = await TetherTokenHfETHs.issue.call(uintrw7QR6r, {from: accounts[5]});
		const addresst1mZFgQ = await TetherTokenHfETHs.transferFrom.call(addressuzwLNu, addressglrVghR, uintguYbPxH, {from: accounts[0]});
		const addressKV4jn2q = await TetherTokenHfETHs.deprecate.call(addressceGJvOe, {from: accounts[3]});
		const addressOAq0UcE = await TetherTokenHfETHs.approve.call(addresspQJol8p, uintaHOULyr, {from: accounts[3]});

		await expect(TetherTokenHfETHs.transferFrom.call(addressWGvCZp4, addressbSYCcS, uintIQYKJq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintKfy2zFE = BigInt("923")
		const stringnGn0vCP = "haBXsqNvLQ6BYmw7AUkYyrAxw0snMzjFjX8Fit6TauNe"
		const string2oFHVi = "54hmgiTiQrRYWetvRrMlhTzuF7Y8Nw2woENXU2wjeiu27yCxje4q"
		const uintHa9lz5L = BigInt("1956")
		const TetherTokenw6UyhNs = await TetherToken.new(uintKfy2zFE, stringnGn0vCP, string2oFHVi, uintHa9lz5L, {from: accounts[0]});
		const addressQspVEh0 = accounts[0]
		const addressVwQ0ArH = accounts[2]
		const addressy4FzwW = accounts[0]
		const addressNXXdye1 = accounts[4]
		const addressv9YP7C = accounts[5]
		const addressQRPC8D = accounts[5]
		const addressJ82PYfF = accounts[0]
		const uint5Iq1AU = await TetherTokenw6UyhNs.balanceOf.call(addressQspVEh0, {from: accounts[2]});
		const uintmvJEFDe = await TetherTokenw6UyhNs.allowance.call(addressy4FzwW, addressVwQ0ArH, {from: accounts[0]});
		const uintKChB6HE = await TetherTokenw6UyhNs.totalSupply.call({from: accounts[3]});
		const uintTc7EJCh = await TetherTokenw6UyhNs.balanceOf.call(addressNXXdye1, {from: "0x0000000000000000000000000000000000000001"});
		const uintW6sPi5Y = await TetherTokenw6UyhNs.balanceOf.call(addressv9YP7C, {from: accounts[3]});
		const uintZXi32Cc = await TetherTokenw6UyhNs.allowance.call(addressJ82PYfF, addressQRPC8D, {from: accounts[3]});

		assert.equal(uint5Iq1AU, BigInt("923"))
		assert.equal(uintKChB6HE, BigInt("923"))
		assert.equal(uintTc7EJCh, BigInt("0"))
		assert.equal(uintW6sPi5Y, BigInt("0"))
		assert.equal(uintZXi32Cc, BigInt("0"))
		assert.equal(uintmvJEFDe, BigInt("0"))
	});
})